using System;
using System.Threading;
using System.Xml;
using FubuCore;
using Storyteller.Core.Messages;
using Storyteller.Core.Model;
using Storyteller.Core.Model.Persistence;
using Storyteller.Core.Remotes;
using Storyteller.Core.Remotes.Messaging;
using XmlReader = Storyteller.Core.Model.Persistence.XmlReader;
using XmlWriter = Storyteller.Core.Model.Persistence.XmlWriter;

namespace ST.Client
{
    public class PersistenceController : IPersistenceController, ISpecFileObserver, IDisposable
    {
        private readonly IRemoteController _engine;
        private readonly IClientConnector _client;
        private readonly ISpecFileWatcher _watcher;
        private string _specPath;
        private Hierarchy _hierarchy;
        private readonly ReaderWriterLockSlim _lock = new ReaderWriterLockSlim();


        public PersistenceController(IRemoteController engine, IClientConnector client, ISpecFileWatcher watcher)
        {
            _engine = engine;
            _client = client;
            _watcher = watcher;
        }

        public void StartWatching(string path)
        {
            _specPath = path.ToFullPath();

            _lock.Write(() => { _hierarchy = HierarchyLoader.ReadHierarchy(_specPath).ToHierarchy(); });


            _watcher.StartWatching(path, this);
        }

        public Hierarchy Hierarchy
        {
            get { return _hierarchy; }
        }


        public void SaveSpecificationBody(string id, Specification specification)
        {
            _lock.Read(() =>
            {
                if (!_hierarchy.Nodes.Has(id)) return true;

                var spec = _hierarchy.Nodes[id];

                using (_watcher.LatchFile(spec.Filename))
                {
                    specification.ReadNode(spec);

                    var document = new XmlDocument();
                    document.Load(spec.Filename);

                    XmlWriter.WriteBody(specification, document.DocumentElement);

                    document.Save(spec.Filename);
                }

                return true;
            });
        }

        public SpecNodeAdded CloneSpecification(string id, string name)
        {
            return _lock.Read(() =>
            {
                if (!_hierarchy.Nodes.Has(id)) return null;

                var spec = _hierarchy.Nodes[id];
                var template = XmlReader.ReadFromFile(spec.Filename);
                template.Id = Guid.NewGuid().ToString();
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
                    _hierarchy.Nodes[template.Id] = node;

                    suite.AddSpec(node);

                    return new SpecNodeAdded
                    {
                        suite = suitePath,
                        node = node
                    };
                }
            });
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

                var file = folder.AppendPath(Specification.DetermineFilename(name));

                using (_watcher.LatchFile(file))
                {
                    XmlWriter.WriteToXml(specification).Save(file);

                    var node = specification.ToNode();
                    node.Filename = file;
                    _hierarchy.Nodes[node.id] = node;
                    suite.AddSpec(node);

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

        public Specification LoadSpecification(string id)
        {
            return _lock.Read(() =>
            {
                if (!_hierarchy.Nodes.Has(id)) return null;

                var spec = _hierarchy.Nodes[id];
                return XmlReader.ReadFromFile(spec.Filename);
            });
        }

        public string LoadSpecificationJson(string id)
        {
            var specification = LoadSpecification(id);
            return JsonSerialization.ToCleanJson(specification);
        }

        public void Changed(string file)
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

        private void reloadHierarchy()
        {
            _lock.Write(() =>
            {
                _hierarchy = HierarchyLoader.ReadHierarchy(_specPath).ToHierarchy();
                var message = new HierarchyLoaded
                {
                    root = _hierarchy.Top
                };

                _client.SendMessageToClient(message);
                _engine.SendMessage(message);
            });
        }

        public void Added(string file)
        {
            reloadHierarchy();
        }

        public void Deleted(string file)
        {
            reloadHierarchy();
        }

        public void Dispose()
        {
            _watcher.Dispose();
        }
    }
}