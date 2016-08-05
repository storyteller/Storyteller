using System;
using System.IO;
using FubuCore;
using StoryTeller.Messages;
using ST.Files;

namespace ST.Client
{
    public class AssetFileWatcher : IDisposable, IChangeSetHandler
    {
	// SAMPLE: declarations4
        private readonly IClientConnector _connector;
        private readonly FileChangeWatcher _watcher;
	// ENDSAMPLE
        public AssetFileWatcher(IClientConnector connector)
        {
            _connector = connector;

            var path = Directory.GetCurrentDirectory().AppendPath("bundle.js");

            _watcher = new FileChangeWatcher(path.ParentDirectory(), FileSet.Shallow("bundle.js"), this);
        }

        void IChangeSetHandler.Handle(ChangeSet changes)
        {
            _connector.SendMessageToClient(new RefreshPage());
        }

        public void Dispose()
        {
            _watcher.Dispose();
        }

        public void Start()
        {
            _watcher.Start();
        }
    }

    public class RefreshPage : ClientMessage
    {
        public RefreshPage() : base("refresh-page")
        {
        }
    }
}