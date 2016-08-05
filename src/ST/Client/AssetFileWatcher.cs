using System;
using FubuCore;
using FubuMVC.Core.Assets;
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
        public AssetFileWatcher(IAssetFinder finder, IClientConnector connector)
        {
            _connector = connector;

            var asset = finder.FindAsset("bundle.js");
            var path = asset.File.Path;

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