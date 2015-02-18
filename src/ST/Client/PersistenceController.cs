using System;
using System.Diagnostics;
using System.Threading;
using System.Threading.Tasks;
using System.Xml;
using Bottles.Services;
using FubuCore;
using Storyteller.Core.Messages;
using Storyteller.Core.Model;
using Storyteller.Core.Model.Persistence;
using Storyteller.Core.Remotes;
using JsonSerialization = Storyteller.Core.Remotes.Messaging.JsonSerialization;
using XmlReader = Storyteller.Core.Model.Persistence.XmlReader;
using XmlWriter = Storyteller.Core.Model.Persistence.XmlWriter;

namespace ST.Client
{
    // TODO -- add commands to delegate?
    // TODO -- the commands will have to do Lazy<IPersistenceController>
    public interface IPersistenceController
    {
        Hierarchy Hierarchy { get; }
        void StartWatching(string path);
    }

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

            _lock.Write(() =>
            {
                _hierarchy = HierarchyLoader.ReadHierarchy(_specPath).ToHierarchy();
            });

            
            _watcher.StartWatching(path, this);
        }

        public Hierarchy Hierarchy
        {
            get { return _hierarchy; }
        }


        // TODO -- need an ICommand that can handle "save-spec-body"
        public void SaveSpecificationBody(string id, string json)
        {
            _lock.Read(() =>
            {
                if (!_hierarchy.Nodes.Has(id)) return true;

                var spec = _hierarchy.Nodes[id];

                using (_watcher.LatchFile(spec.filename))
                {
                    var specification = JsonSerialization.Deserialize<Specification>(json);
                    specification.ReadNode(spec);

                    var document = new XmlDocument();
                    document.Load(spec.filename);

                    XmlWriter.WriteBody(specification, document.DocumentElement);

                    document.Save(spec.filename);
                }

                return true;
            });



        }

        // TODO -- need an ICommand for "clone-spec"
        public SpecNodeAdded CloneSpecification(string id, string name)
        {
            return _lock.Read(() =>
            {
                if (!_hierarchy.Nodes.Has(id)) return null;

                var spec = _hierarchy.Nodes[id];
                var template = XmlReader.ReadFromFile(spec.filename);
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
                    node.filename = file;
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
                    node.filename = file;
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
                using (_watcher.LatchFile(old.filename))
                {
                    var specification = XmlReader.ReadFromFile(old.filename);

                    alteration(specification);

                    XmlWriter.WriteToXml(specification).Save(old.filename);

                    var node = specification.ToNode();
                    node.filename = old.filename;

                    _hierarchy.Nodes[node.id] = node;
                    _hierarchy.Suites[old.SuitePath()].ReplaceNode(node);

                    return new SpecNodeChanged
                    {
                        node = node
                    };
                }
            });


        }

        public string LoadSpecificationJson(string id)
        {
            return _lock.Read(() =>
            {
                if (!_hierarchy.Nodes.Has(id)) return null;

                var spec = _hierarchy.Nodes[id];
                var specification = XmlReader.ReadFromFile(spec.filename);
                return JsonSerialization.ToCleanJson(specification);
            });


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

    public interface ISpecFileObserver
    {
        void Changed(string file);
        void Added(string file);
        void Deleted(string file);
    }

    public interface ISpecFileWatcher : IDisposable
    {
        IDisposable LatchFile(string file);
        void StartWatching(string path, ISpecFileObserver observer);
    }
}