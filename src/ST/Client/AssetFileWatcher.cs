using System;
using System.Collections.Generic;
using System.IO;
using Bottles;
using Bottles.Diagnostics;
using FubuCore;
using FubuMVC.Core.Assets;
using StoryTeller.Messages;

namespace ST.Client
{
    public class StartWatchingAssets : IActivator
    {
        private readonly AssetFileWatcher _watcher;

        public StartWatchingAssets(AssetFileWatcher watcher)
        {
            _watcher = watcher;
        }

        public void Activate(IEnumerable<IPackageInfo> packages, IPackageLog log)
        {
            _watcher.Start();
        }
    }

    public class AssetFileWatcher : IDisposable
    {
        private readonly IAssetFinder _finder;
        private readonly IClientConnector _connector;
        private readonly IList<FileSystemWatcher> _watchers = new List<FileSystemWatcher>();
        private DateTime _lastUpdate = DateTime.UtcNow;

        public AssetFileWatcher(IAssetFinder finder, IClientConnector connector)
        {
            _finder = finder;
            _connector = connector;
        }

        private void watch(string search)
        {
            var asset = _finder.FindAsset(search);
            var path = asset.File.Path;
            var watcher = new FileSystemWatcher(path.ParentDirectory(), Path.GetFileName(path))
            {
                EnableRaisingEvents = true,
            };

            watcher.Changed += (sender, args) =>
            {
                if (DateTime.UtcNow.Subtract(_lastUpdate) > 1.Seconds())
                {
                    _lastUpdate = DateTime.UtcNow;
                    _connector.SendMessageToClient(new RefreshPage());
                }
            };

            _watchers.Add(watcher);
        }

        public void Dispose()
        {
            _watchers.Each(x =>
            {
                x.EnableRaisingEvents = false;
                x.Dispose();
            });
        }

        public void Start()
        {
            watch("assets/client/public/stylesheets/storyteller.css");
            watch("assets/client/public/javascript/bundle.js");
        }
    }

    public class RefreshPage : ClientMessage
    {
        public RefreshPage() : base("refresh-page")
        {
        }
    }
}