using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using Baseline;
using Oakton;
using StoryTeller.Files;
using StoryTeller.Model;
using StoryTeller.Model.Persistence.DSL;

namespace ST.Client
{
    public interface IFixtureFileObserver : IDisposable
    {
        void Changed(string file);
        void Added(string file);
        void Deleted(string file);
    }

    public interface IFixtureFileWatcher : IDisposable
    {
        void WriteFiles(Action action);
        void StartWatching(string path, IFixtureFileObserver observer);
    }

    public class FixtureFileWatcher : IFixtureFileWatcher, IChangeSetHandler
    {
        private FileChangeWatcher _watcher;
        private IFixtureFileObserver _observer;

        public void Handle(ChangeSet changes)
        {
            changes.Changed.Each(x => _observer.Changed(x.Path));
            changes.Deleted.Each(x => _observer.Deleted(x));
            changes.Added.Each(x => _observer.Added(x.Path));
        }

        public void Dispose()
        {
            _watcher?.Dispose();
        }

        public void WriteFiles(Action action)
        {
            _watcher.Latch(action);
        }

        public void StartWatching(string path, IFixtureFileObserver observer)
        {
            var fullPath = path.ToFullPath();
            _watcher = new FileChangeWatcher(fullPath, FileSet.Deep("*.fixture"), this);
            _watcher.Start();

            _observer = observer;
        }
    }

    public interface IFixtureController
    {
        void StartWatching(string path);
    }

    public class FixtureController : IFixtureFileObserver, IFixtureController
    {
        private readonly IClientConnector _client;
        private readonly IFixtureFileWatcher _watcher;
        private readonly ReaderWriterLockSlim _lock = new ReaderWriterLockSlim();

        private List<FixtureModel> _fixtures;
        private string _fixturePath;

        public FixtureController(IClientConnector client, IFixtureFileWatcher watcher)
        {
            _client = client;
            _watcher = watcher;
        }

        public void StartWatching(string path)
        {
            try
            {
                _fixturePath = path.ToFullPath();

                _lock.Write(() =>
                {
                    _fixtures = FixtureLoader.LoadFromPath(_fixturePath).ToList();
                });

                _watcher.StartWatching(path, this);
            }
            catch (Exception e)
            {
                Logger.Error("Failed to start watching fixture files", e);
            }
        }

        public void Changed(string file)
        {
            try
            {
                _lock.Read(() =>
                {
                    var fixture = FixtureReader.ReadFromFile(file);

                    ConsoleWriter.Write($"{file} changed");

                    return true;
                });
            }
            catch (IOException)
            {
                ConsoleWriter.Write(ConsoleColor.Yellow, $"Unable to reload {file}, file may be locked by your editor");
            }
            catch (Exception e)
            {
                Logger.Error("Failed to handle a changed file: " + file, e);
            }
        }

        public void Added(string file)
        {
            try
            {
                _lock.Read(() =>
                {
                    var fixture = FixtureReader.ReadFromFile(file);

                    ConsoleWriter.Write($"{file} added");

                    return true;
                });
            }
            catch (IOException)
            {
                ConsoleWriter.Write(ConsoleColor.Yellow, $"Unable to load {file}, file may be locked by your editor");
            }
            catch (Exception e)
            {
                Logger.Error("Failed to handle an added file: " + file, e);
            }
        }

        public void Deleted(string file)
        {
            try
            {
                _lock.Read(() =>
                {
                    ConsoleWriter.Write($"{file} deleted");

                    return true;
                });
            }
            catch (IOException)
            {
                ConsoleWriter.Write(ConsoleColor.Yellow, $"Unable to delete {file}, file may be locked by your editor");
            }
            catch (Exception e)
            {
                Logger.Error("Failed to handle an added file: " + file, e);
            }
        }

        public void Dispose()
        {
            _watcher?.Dispose();
        }
    }
}
