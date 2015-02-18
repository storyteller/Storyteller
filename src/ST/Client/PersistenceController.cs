using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Bottles;
using Bottles.Diagnostics;
using FubuCore;
using Storyteller.Core.Messages;
using Storyteller.Core.Model;
using Storyteller.Core.Model.Persistence;
using Storyteller.Core.Remotes;

namespace ST.Client
{
    // TODO -- add commands to delegate?
    // TODO -- the commands will have to do Lazy<IPersistenceController>
    public interface IPersistenceController
    {
        Hierarchy Hierarchy { get; }
        void StartWatching(string path);
    }

    public class StartWatchingFilesActivator : IActivator
    {
        private readonly IPersistenceController _controller;
        private readonly StorytellerContext _context;

        public StartWatchingFilesActivator(IPersistenceController controller, StorytellerContext context)
        {
            _controller = controller;
            _context = context;
        }

        public void Activate(IEnumerable<IPackageInfo> packages, IPackageLog log)
        {
            _controller.StartWatching(_context.SpecPath);
        }
    }

    public class PersistenceController : IPersistenceController
    {
        private readonly IRemoteController _controller;
        private readonly IClientConnector _connector;
        private string _specPath;
        private Hierarchy _hierarchy;


        // TODO -- add a FileSystemWatcher on the specs.
        // TODO -- set change "latches"
        // TODO -- publish 'hierarchy-loaded' to both client and remote
        // TODO -- publish SpecChanged messages when detected by file system watcher


        public PersistenceController(IRemoteController controller, IClientConnector connector)
        {
            _controller = controller;
            _connector = connector;
        }

        public void StartWatching(string path)
        {
            _specPath = path.ToFullPath();
            _hierarchy = HierarchyLoader.ReadHierarchy(_specPath).ToHierarchy();
        }

        public Hierarchy Hierarchy
        {
            get { return _hierarchy; }
        }

        // TODO -- need an ICommand that can handle "save-spec-body"
        public void SaveSpecificationBody(string id, string json)
        {
            throw new NotImplementedException();
        }

        // TODO -- need an ICommand for "clone-spec"
        public SpecNodeAdded CloneSpecification(string id, string name)
        {
            // TODO --kick out spec-node-added
            throw new NotImplementedException();
        }

        public SpecNodeAdded AddSpec(string path, string name)
        {
            // TODO --kick out spec-node-added
            throw new NotImplementedException();
        }

        public SpecNodeChanged SaveSpecHeader(string id, Action<Specification> alteration)
        {
            // TODO -- kick out the spec-node-changed at the end
            throw new NotImplementedException();
        }

        public string LoadSpecificationJson(string id)
        {
            throw new NotImplementedException();
        }
    }
}