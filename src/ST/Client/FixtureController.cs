using System;
using System.IO;
using System.Threading;
using Baseline;
using Oakton;
using StoryTeller.Model;
using StoryTeller.Model.Persistence.DSL;

namespace ST.Client
{
    public interface IFixtureController
    {
        void StartWatching(string path);
    }

    public class FixtureController : IFixtureFileObserver, IFixtureController
    {
        private readonly IClientConnector _client;
        private readonly IFixtureFileWatcher _watcher;
        private readonly ReaderWriterLockSlim _lock = new ReaderWriterLockSlim();

        private FixtureLibrary _fixtures;
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
                    _fixtures = FixtureLoader.LoadFromPath(_fixturePath);
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
                Logger.Error("Failed to handle a deleted file: " + file, e);
            }
        }

        public void Dispose()
        {
            _watcher?.Dispose();
        }
    }
}
