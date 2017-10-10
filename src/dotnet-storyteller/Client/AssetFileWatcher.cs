using System;
using System.Threading;
using Baseline;
using StoryTeller.Files;
using StoryTeller.Messages;

namespace ST.Client
{
    public class AssetFileWatcher : IDisposable, IChangeSetHandler
    {
	// SAMPLE: declarations4
        private readonly IClientConnector _connector;
        private readonly FileChangeWatcher _watcher;
        // ENDSAMPLE

        private readonly FileChangeWatcher _watcherAssets;


        public AssetFileWatcher(IClientConnector connector)
        {
            _connector = connector;


            _watcher = new FileChangeWatcher(FindRootFolder(), FileSet.Shallow("bundle.js"), this);
            _watcherAssets = new FileChangeWatcher(FindClientFolder().AppendPath("public"), FileSet.Everything(), this);
        }

        void IChangeSetHandler.Handle(ChangeSet changes)
        {
            // File system changes are too fast in OSX world.
            if (!Platform.IsWindows)
            {
                Thread.Sleep(500);
            }

            _connector.SendMessageToClient(new RefreshPage());
        }

        public void Dispose()
        {
            _watcher.Dispose();
            _watcherAssets.Dispose();
        }

        public void Start(OpenInput input)
        {
            // You'd think it'd be the other way around
            if (!input.HotReloadFlag)
            {
                _watcher.Start();
            }

            _watcherAssets.Start();
        }

        public static string FindRootFolder()
        {
#if NET46
            var path = AppDomain.CurrentDomain.BaseDirectory;
#else
            var path = AppContext.BaseDirectory;
#endif
            while (!path.EndsWith("StorytellerRunner"))
            {
                path = path.ParentDirectory();
            }

            return path;
        }

        public static string FindClientFolder()
        {
            return FindRootFolder().ParentDirectory().ParentDirectory().AppendPath("client"); ;
        }
    }

    public class RefreshPage : ClientMessage
    {
        public RefreshPage() : base("refresh-page")
        {
        }
    }
}