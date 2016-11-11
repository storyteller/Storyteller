using System;
using System.IO;
using System.Linq;
using System.Threading;
using Baseline;
using Oakton;
using StoryTeller.Model;
using StoryTeller.Model.Persistence.DSL;
using StoryTeller.Remotes;

namespace ST.Client
{
    public interface IFixtureController : IDisposable
    {
        void StartWatching(string path);
        void RecordSystemFixtures(SystemRecycled recycled);
        FixtureModel[] CombinedFixtures();
    }

    public class FixtureController : IFixtureFileObserver, IFixtureController
    {
        private readonly IClientConnector _client;
        private readonly IFixtureFileWatcher _watcher;
        private readonly ReaderWriterLockSlim _lock = new ReaderWriterLockSlim();

        private FixtureLibrary _overrides;
        private string _fixturePath;
        private FixtureLibrary _systemFixtures;

        public FixtureController(IClientConnector client, IFixtureFileWatcher watcher)
        {
            _client = client;
            _watcher = watcher;
        }

        public void RecordSystemFixtures(SystemRecycled recycled)
        {
            _systemFixtures = FixtureLibrary.From(recycled.fixtures);

            if (_overrides != null)
            {
                var combined = _systemFixtures.ApplyOverrides(_overrides);
                recycled.fixtures = combined.Models.ToArray();
            }
        }

        public FixtureModel[] CombinedFixtures()
        {
            if (_overrides == null) return _systemFixtures.Models.ToArray();

            return _systemFixtures.ApplyOverrides(_overrides).Models.ToArray();
        }



        public void StartWatching(string path)
        {
            try
            {
                _fixturePath = path.ToFullPath();

                _lock.Write(() =>
                {
                    _overrides = FixtureLoader.LoadFromPath(_fixturePath);
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

                    _overrides.Models[fixture.key] = fixture;

                    // send to client

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
            ReloadFixtures();
            // send to client
        }

        public void Deleted(string file)
        {
            ReloadFixtures();
            // send to client
        }

        public virtual void ReloadFixtures()
        {
            try
            {
                _lock.Write(() =>
                {
                    _overrides = FixtureLoader.LoadFromPath(_fixturePath);
                });
            }
            catch (Exception e)
            {
                Logger.Error("Failed to reload the fixtures", e);
            }
        }

        public void Dispose()
        {
            _watcher?.Dispose();
        }
    }
}
