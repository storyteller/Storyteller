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
        private readonly IRemoteController _controller;
        private readonly IClientConnector _connector;
        private readonly ISpecFileWatcher _watcher;
        private string _specPath;
        private Hierarchy _hierarchy;
        private readonly ReaderWriterLockSlim _lock = new ReaderWriterLockSlim();

        // TODO -- harden this puppy for errors

        // TODO -- add a FileSystemWatcher on the specs.
        // TODO -- publish 'hierarchy-loaded' to both client and remote
        // TODO -- publish SpecChanged messages when detected by file system watcher


        public PersistenceController(IRemoteController controller, IClientConnector connector, ISpecFileWatcher watcher)
        {
            _controller = controller;
            _connector = connector;
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

                var file = Specification.DetermineFilename(name);
                using (_watcher.LatchFile(file))
                {
                    XmlWriter.WriteToXml(template);

                    var node = template.ToNode();
                    _hierarchy.Nodes[template.Id] = node;

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

                var folder = _hierarchy.Suites[path].Folder;
                var specification = new Specification
                {
                    Name = name
                };

                var file = folder.AppendPath(Specification.DetermineFilename(name));

                using (_watcher.LatchFile(file))
                {
                    XmlWriter.WriteToXml(specification).Save(file);

                    return new SpecNodeAdded
                    {
                        suite = path,
                        node = specification.ToNode()
                    };
                }
            });


        }

        public SpecNodeChanged SaveSpecHeader(string id, Action<Specification> alteration)
        {
            return _lock.Read(() =>
            {
                if (!_hierarchy.Nodes.Has(id)) return null;

                var spec = _hierarchy.Nodes[id];
                using (_watcher.LatchFile(spec.filename))
                {
                    var specification = XmlReader.ReadFromFile(spec.filename);

                    alteration(specification);

                    XmlWriter.WriteToXml(specification).Save(spec.filename);

                    return new SpecNodeChanged
                    {
                        node = specification.ToNode()
                    };
                }
            });


        }

        public string LoadSpecificationJson(string id)
        {
            var spec = _hierarchy.Nodes[id];
            var specification = XmlReader.ReadFromFile(spec.filename);
            return JsonSerialization.ToCleanJson(specification);
        }

        public void Changed(string file)
        {
            // TODO -- reload the file
            // TODO -- replace in hierarchy
            // publish spec-changed message

            throw new NotImplementedException();
        }

        private void reloadHierarchy()
        {
            // Need to lock
            // Need to broadcast to engine
            // Need to broadcast to client
            throw new NotImplementedException();
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