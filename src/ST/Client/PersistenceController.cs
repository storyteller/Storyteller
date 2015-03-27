using System;
using System.IO;
using System.Threading;
using System.Xml;
using FubuCore;
using FubuCore.Logging;
using StoryTeller;
using StoryTeller.Messages;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using StoryTeller.Remotes;
using StoryTeller.Remotes.Messaging;
using XmlReader = StoryTeller.Model.Persistence.XmlReader;
using XmlWriter = StoryTeller.Model.Persistence.XmlWriter;

namespace ST.Client
{
    // TODO -- need to flush results when the file changes maybe?
    public class PersistenceController : IPersistenceController, ISpecFileObserver, IDisposable, IListener<SpecExecutionCompleted>
    {
        private readonly ILogger _logger;
        private readonly IRemoteController _engine;
        private readonly IClientConnector _client;
        private readonly ISpecFileWatcher _watcher;
        private string _specPath;
        private Hierarchy _hierarchy;
        private readonly ReaderWriterLockSlim _lock = new ReaderWriterLockSlim();


        public PersistenceController(ILogger logger, IRemoteController engine, IClientConnector client, ISpecFileWatcher watcher)
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

                _lock.Write(() =>
                {
                    _hierarchy = HierarchyLoader.ReadHierarchy(_specPath).ToHierarchy();
                });


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


        public void SaveSpecificationBody(string id, Specification specification)
        {
            try
            {
                _lock.Read(() =>
                {
                    if (!_hierarchy.Nodes.Has(id)) return true;

                    var spec = _hierarchy.Nodes[id];

                    using (_watcher.LatchFile(spec.Filename))
                    {
                        specification.ReadNode(spec);
                        var document = XmlWriter.WriteToXml(specification);
                        document.Save(spec.Filename);
                    }

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
                if (!_hierarchy.Nodes.Has(id)) return null;

                var spec = _hierarchy.Nodes[id];
                var template = XmlReader.ReadFromFile(spec.Filename);
                template.id = Guid.NewGuid().ToString();
                template.Name = name;
                template.Lifecycle = Lifecycle.Acceptance;

                var suitePath = spec.SuitePath();

                var filename = Specification.DetermineFilename(name);
                var suite = _hierarchy.Suites[suitePath];
                var file = suite.Folder.AppendPath(filename);

                using (_watcher.LatchFile(file))
                {
                    var document = XmlWriter.WriteToXml(template);
                    document.Save(file);

                    var node = template.ToNode();
                    node.Filename = file;
                    _hierarchy.Nodes[template.id] = node;

                    suite.AddSpec(node);

                    writeHierarchyToRemote();

                    return new SpecNodeAdded
                    {
                        suite = suitePath,
                        node = node
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
                    Name = name
                };

                var specFileName = Specification.DetermineFilename(name);
                var file = folder.AppendPath(specFileName);

                using (_watcher.LatchFile(file))
                {
                    XmlWriter.WriteToXml(specification).Save(file);

                    var node = specification.ToNode();
                    node.Filename = file;
                    _hierarchy.Nodes[node.id] = node;
                    suite.AddSpec(node);

                    writeHierarchyToRemote();

                    return new SpecNodeAdded
                    {
                        suite = path,
                        node = node
                    };
                }
            });
        }

        public SpecNodeChanged SaveSpecHeader(string id, Action<Specification> alteration)
        {
            return _lock.Read(() =>
            {
                if (!_hierarchy.Nodes.Has(id)) return null;

                var old = _hierarchy.Nodes[id];
                using (_watcher.LatchFile(old.Filename))
                {
                    var specification = XmlReader.ReadFromFile(old.Filename);

                    alteration(specification);

                    XmlWriter.WriteToXml(specification).Save(old.Filename);

                    var node = specification.ToNode();
                    node.Filename = old.Filename;

                    _hierarchy.Nodes[node.id] = node;
                    _hierarchy.Suites[old.SuitePath()].ReplaceNode(node);

                    return new SpecNodeChanged
                    {
                        node = node
                    };
                }
            });
        }

        public SpecData LoadSpecification(string id)
        {
            return _lock.Read(() =>
            {
                if (!_hierarchy.Nodes.Has(id)) return null;

                var spec = _hierarchy.Nodes[id];
                var data = new SpecData
                {
                    
                    data = XmlReader.ReadFromFile(spec.Filename),
                    id = id
                };

                if (spec.last != null) data.results = spec.last.Results;

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
                    var node = HierarchyLoader.ReadSpecNode(file);
                    if (_hierarchy.Nodes.Has(node.id))
                    {
                        var old = _hierarchy.Nodes[node.id];
                        var suite = _hierarchy.Suites[old.SuitePath()];

                        suite.ReplaceNode(node);
                        _hierarchy.Nodes[node.id] = node;

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
                    _hierarchy = HierarchyLoader.ReadHierarchy(_specPath).ToHierarchy();
                    var message = new HierarchyLoaded
                    {
                        hierarchy = _hierarchy.Top
                    };

                    // TODO -- have it read in the cached result counts

                    _client.SendMessageToClient(message);
                    _engine.SendMessage(message);
                });
            }
            catch (Exception e)
            {
                _logger.Error("Failed to reload the spec hierarchy", e);
            }
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
            Hierarchy.Nodes[message.Id].last = message;
        }
    }

}