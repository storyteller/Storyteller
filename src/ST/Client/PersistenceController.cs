using System;
using System.IO;
using System.Linq;
using System.Threading;
using FubuCore;
using FubuCore.Dates;
using StoryTeller;
using StoryTeller.Messages;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using StoryTeller.Remotes.Messaging;

namespace ST.Client
{
    // TODO -- need to flush results when the file changes maybe?
    public class PersistenceController : IPersistenceController, ISpecFileObserver, IDisposable,
        IListener<SpecExecutionCompleted>
    {
        private readonly IClientConnector _client;
        private readonly ISpecFileWatcher _watcher;
        private readonly ISystemTime _systemTime;
        private string _specPath;
        private Hierarchy _hierarchy;
        private readonly ReaderWriterLockSlim _lock = new ReaderWriterLockSlim();
        private readonly ResultsCache _results = new ResultsCache();


        public PersistenceController(IClientConnector client, ISpecFileWatcher watcher, ISystemTime systemTime)
        {
            _client = client;
            _watcher = watcher;
            _systemTime = systemTime;
        }

        public SpecExecutionCompleted[] AllCachedResults()
        {
            return _results.AllResults().ToArray();
        }

        public void SetLifecycle(string id, Lifecycle lifecycle)
        {
            var spec = _hierarchy.Specifications[id];
            if (spec.Lifecycle == lifecycle) return;

            _lock.Write(() =>
            {
                spec.Lifecycle = lifecycle;
                spec.ReadBody();
                XmlWriter.WriteToXml(spec).Save(spec.Filename);
            });

            var data = LoadSpecification(id);
            _client.SendMessageToClient(data);
        }

        public ResultsCache Results
        {
            get { return _results; }
        }

        public Specification LoadSpecificationById(string id)
        {
            return Hierarchy.Specifications[id];
        }

        public void StartWatching(string path)
        {
            try
            {
                _specPath = path.ToFullPath();

                _lock.Write(() => { _hierarchy = HierarchyLoader.ReadHierarchy(_specPath).ToHierarchy(); });


                _watcher.StartWatching(path, this);
            }
            catch (Exception e)
            {
                Logger.Error("Failed to start watching spec files", e);
            }
        }

        public Hierarchy Hierarchy => _hierarchy;

        public void AddSuite(string parent, string name)
        {
            try
            {
                name = name.EscapeIllegalChars();
                var parentSuite = _hierarchy.Suites[parent];
                if (parentSuite != null)
                {
                    var directory = parentSuite.Folder.AppendPath(name);
                    Directory.CreateDirectory(directory);

                    var newPath = parentSuite.path.AppendUrl(name).TrimStart('/');
                    var newSuite = new Suite
                    {
                        Folder = directory,
                        name = name,
                        Specifications = new Specification[0],
                        path = newPath,
                        suites = new Suite[0]
                    };

                    parentSuite.AddChildSuite(newSuite);

                    _hierarchy.Suites[newPath] = newSuite;

                    _client.SendMessageToClient(new SuiteAdded(_hierarchy.Top));
                }
            }
            catch (Exception e)
            {
                Logger.Error("Error while trying to add Suite {0} to parent {1}".ToFormat(name, parent), e);
            }
        }


        public void SaveSpecification(string id, Specification specification)
        {
            try
            {
                _lock.Read(() =>
                {
                    if (!_hierarchy.Specifications.Has(id)) return true;

                    _hierarchy.Replace(specification, _systemTime.UtcNow());

                    _watcher.WriteFiles(() =>
                    {
                        var document = XmlWriter.WriteToXml(specification);
                        document.Save(specification.Filename);
                    });

                    return true;
                });
            }
            catch (Exception e)
            {
                Logger.Error("Error trying to save specification " + id, e);
            }
        }

        public SpecAdded CloneSpecification(string id, string name)
        {
            return _lock.Read(() =>
            {
                if (!_hierarchy.Specifications.Has(id)) return null;

                var spec = _hierarchy.Specifications[id];

                // Keep things isolated!
                var template = XmlReader.ReadFromFile(spec.Filename);
                template.id = Guid.NewGuid().ToString();
                template.name = name;
                template.Lifecycle = Lifecycle.Acceptance;

                var suitePath = spec.SuitePath();

                var filename = Specification.DetermineFilename(name);
                var suite = _hierarchy.Suites[suitePath];
                var file = suite.Folder.AppendPath(filename);

                _watcher.WriteFiles(() =>
                {
                    var document = XmlWriter.WriteToXml(template);
                    document.Save(file);
                });

                template.Filename = file;
                _hierarchy.Specifications[template.id] = template;

                suite.AddSpec(template);

                return new SpecAdded(_hierarchy.Top, template);
            });
        }

        public SpecAdded AddSpec(string path, string name)
        {
            return _lock.Read(() =>
            {
                if (!_hierarchy.Suites.Has(path)) return null;

                var suite = _hierarchy.Suites[path];
                var folder = suite.Folder;
                var specification = new Specification
                {
                    name = name
                };

                var specFileName = Specification.DetermineFilename(name);
                var file = folder.AppendPath(specFileName);

                _watcher.WriteFiles(() => { XmlWriter.WriteToXml(specification).Save(file); });

                specification.Filename = file;
                _hierarchy.Specifications[specification.id] = specification;
                suite.AddSpec(specification);

                return new SpecAdded(_hierarchy.Top, specification);
            });
        }

        public void ClearAllResults()
        {
            // TODO -- will need to do more

            _lock.Write(() =>
            {
                _results.ClearAll();
                SendHierarchyToClient();
            });
        }

        public SpecData LoadSpecification(string id)
        {
            return _lock.Read(() =>
            {
                if (!_hierarchy.Specifications.Has(id)) return null;

                var spec = _hierarchy.Specifications[id];
                spec.ReadBody();

                var data = getSpecDataFor(id);

                return data;
            });
        }

        private SpecData getSpecDataFor(string id)
        {
            var data = new SpecData
            {
                data = _hierarchy.Specifications[id],
                id = id,
                results = _results.ResultsFor(id).ToArray()
            };

            return data;
        }

        public void Changed(string file)
        {
            try
            {
                _lock.Read(() =>
                {
                    var node = HierarchyLoader.ReadSpecHeader(file);
                    node.ReadBody();

                    if (_hierarchy.Specifications.Has(node.id))
                    {
                        var old = _hierarchy.Specifications[node.id];
                        var suite = _hierarchy.Suites[old.SuitePath()];

                        suite.ReplaceSpecification(node);
                        _hierarchy.Specifications[node.id] = node;

                        node.WritePath(suite.path);


                      
                        _client.SendMessageToClient(new SpecData
                        {
                            data = node,
                            id = node.id,
                            results = _results.ResultsFor(node.id).ToArray()
                        });
                    }



                    return true;
                });
            }
            catch (Exception e)
            {
                Logger.Error("Failed to handle a changed file: " + file, e);
            }
        }

        public virtual void ReloadHierarchy()
        {
            try
            {
                _lock.Write(() =>
                {
                    _hierarchy = HierarchyLoader.ReadHierarchy(_specPath).ToHierarchy();
                    SendHierarchyToClient();
                });
            }
            catch (Exception e)
            {
                Logger.Error("Failed to reload the spec hierarchy", e);
            }
        }

        public void DeleteSpec(string id)
        {
            var spec = _hierarchy.RemoveSpec(id);
            if (spec != null)
            {
                _watcher.WriteFiles(() => { new FileSystem().DeleteFile(spec.Filename); });


                _client.SendMessageToClient(new SpecDeleted(_hierarchy.Top, id));
            }
        }


        public void SendHierarchyToClient()
        {
            var message = new HierarchyLoaded(_hierarchy.Top, _results);

            _client.SendMessageToClient(message);
        }

        public void Added(string file)
        {
            if (!_hierarchy.Specifications.Any(x => x.Filename.EqualsIgnoreCase(file)))
            {
                ReloadHierarchy();
            }
        }

        public void Deleted(string file)
        {
            ReloadHierarchy();
        }

        public void Dispose()
        {
            _watcher.Dispose();
        }

        public void Receive(SpecExecutionCompleted message)
        {
            _results.Store(message);
        }
    }
}