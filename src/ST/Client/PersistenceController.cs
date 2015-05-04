using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using FubuCore;
using FubuCore.Logging;
using StoryTeller;
using StoryTeller.Messages;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using StoryTeller.Remotes;
using StoryTeller.Remotes.Messaging;
using StructureMap.Util;

namespace ST.Client
{
    // TODO -- need to flush results when the file changes maybe?
    public class PersistenceController : IPersistenceController, ISpecFileObserver, IDisposable,
        IListener<SpecExecutionCompleted>
    {
        private readonly ILogger _logger;
        private readonly IRemoteController _engine;
        private readonly IClientConnector _client;
        private readonly ISpecFileWatcher _watcher;
        private string _specPath;
        private Hierarchy _hierarchy;
        private readonly ReaderWriterLockSlim _lock = new ReaderWriterLockSlim();


        public PersistenceController(ILogger logger, IRemoteController engine, IClientConnector client,
            ISpecFileWatcher watcher)
        {
            _logger = logger;
            _engine = engine;
            _client = client;
            _watcher = watcher;
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
                _logger.Error("Failed to start watching spec files", e);
            }
        }

        public Hierarchy Hierarchy
        {
            get { return _hierarchy; }
        }

        public void AddSuite(string parent, string name)
        {
            try
            {
                name = name.EscapeIllegalChars();
                var parentSuite = _hierarchy.Suites[parent];
                if (parentSuite != null)
                {
                    var path = parentSuite.Folder.AppendPath(name);
                    Directory.CreateDirectory(path);

                    ReloadHierarchy();
                }
            }
            catch (Exception e)
            {
                _logger.Error("Error while trying to add Suite {0} to parent {1}".ToFormat(name, parent), e);
            }
        }


        public void SaveSpecification(string id, Specification specification)
        {
            try
            {
                _lock.Read(() =>
                {
                    if (!_hierarchy.Specifications.Has(id)) return true;

                    var spec = _hierarchy.Specifications[id];

                    using (_watcher.LatchFile(spec.Filename))
                    {
                        var document = XmlWriter.WriteToXml(specification);
                        document.Save(spec.Filename);
                    }

                    _hierarchy.Specifications[id] = specification;

                    return true;
                });
            }
            catch (Exception e)
            {
                _logger.Error("Error trying to save specification " + id, e);
            }
        }

        public SpecNodeAdded CloneSpecification(string id, string name)
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

                using (_watcher.LatchFile(file))
                {
                    var document = XmlWriter.WriteToXml(template);
                    document.Save(file);

                    template.Filename = file;
                    _hierarchy.Specifications[template.id] = template;

                    suite.AddSpec(template);

                    writeHierarchyToRemote();

                    return new SpecNodeAdded
                    {
                        suite = suitePath,
                        node = template
                    };
                }
            });
        }

        private void writeHierarchyToRemote()
        {
            _engine.SendMessage(new HierarchyLoaded {hierarchy = _hierarchy.Top});
        }

        public SpecNodeAdded AddSpec(string path, string name)
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

                using (_watcher.LatchFile(file))
                {
                    XmlWriter.WriteToXml(specification).Save(file);

                    specification.Filename = file;
                    _hierarchy.Specifications[specification.id] = specification;
                    suite.AddSpec(specification);

                    writeHierarchyToRemote();

                    return new SpecNodeAdded
                    {
                        suite = path,
                        node = specification
                    };
                }
            });
        }

        public void ClearAllResults()
        {
            _lock.Write(() =>
            {
                _hierarchy.Specifications.Each(node => node.results = null);
                UpdateHierarchyInClientAndEngine();
            });
        }

        public SpecData LoadSpecification(string id)
        {
            return _lock.Read(() =>
            {
                if (!_hierarchy.Specifications.Has(id)) return null;

                var spec = _hierarchy.Specifications[id];
                spec.ReadBody();

                var data = new SpecData
                {
                    data = _hierarchy.Specifications[id],
                    id = id
                };

                if (spec.results != null) data.results = spec.results;

                return data;
            });
        }

        public string LoadSpecificationJson(string id)
        {
            var specification = LoadSpecification(id);
            return JsonSerialization.ToCleanJson(specification);
        }

        public void Changed(string file)
        {
            try
            {
                _lock.Read(() =>
                {
                    var node = HierarchyLoader.ReadSpecHeader(file);

                    if (_hierarchy.Specifications.Has(node.id))
                    {
                        var old = _hierarchy.Specifications[node.id];
                        var suite = _hierarchy.Suites[old.SuitePath()];

                        suite.ReplaceSpecification(node);
                        _hierarchy.Specifications[node.id] = node;

                        node.WritePath(suite.path);
                    }

                    _client.SendMessageToClient(new SpecChanged
                    {
                        node = node
                    });

                    return true;
                });
            }
            catch (Exception e)
            {
                _logger.Error("Failed to handle a changed file: " + file, e);
            }
        }

        public virtual void ReloadHierarchy()
        {
            try
            {
                _lock.Write(() =>
                {
                    var results = new LightweightCache<string, SpecResults>();
                    _hierarchy.Specifications.GetAll().Where(x => x.results != null).Each(x => { results[x.id] = x.results; });

                    _hierarchy = HierarchyLoader.ReadHierarchy(_specPath).ToHierarchy();

                    results.Each((id, result) =>
                    {
                        // Specs might have been deleted in the meantime.
                        if (_hierarchy.Specifications.Has(id))
                        {
                            _hierarchy.Specifications[id].results = result;
                        }
                    });


                    UpdateHierarchyInClientAndEngine();
                });
            }
            catch (Exception e)
            {
                _logger.Error("Failed to reload the spec hierarchy", e);
            }
        }


        public void UpdateHierarchyInClientAndEngine()
        {
            var message = new HierarchyLoaded
            {
                hierarchy = _hierarchy.Top
            };

            _client.SendMessageToClient(message);
            _engine.SendMessage(message);
        }

        public void Added(string file)
        {
            ReloadHierarchy();
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
            Hierarchy.Specifications[message.Id].results = message.Results;
        }
    }
}