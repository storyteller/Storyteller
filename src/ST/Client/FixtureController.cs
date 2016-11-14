using System;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading;
using Baseline;
using Oakton;
using StoryTeller;
using StoryTeller.Messages;
using StoryTeller.Model;
using StoryTeller.Model.Persistence.DSL;
using StoryTeller.Remotes;
using ST.Client.Fixtures;

namespace ST.Client
{
    public interface IFixtureController : IDisposable
    {
        void StartWatching(string path);
        void RecordSystemFixtures(SystemRecycled recycled);
        FixtureModel[] CombinedFixtures();
        void ReloadFixtures();
        void ExportAllFixtures();
        void Export(string key);
        string FileFor(string key);
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

        private void sendUpdatesToClient()
        {
            var message = new FixturesReloaded
            {
                fixtures = CombinedFixtures()
            };

            _client.SendMessageToClient(message);
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
                    if (File.Exists(file))
                    {
                        var fixture = FixtureReader.ReadFromFile(file);

                        ConsoleWriter.Write($"{file} changed");

                        _overrides.Models[fixture.key] = fixture;

                        sendUpdatesToClient();
                    }

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
        }

        public void Deleted(string file)
        {
            ReloadFixtures();
        }

        public virtual void ReloadFixtures()
        {
            try
            {
                _lock.Write(() =>
                {
                    _overrides = FixtureLoader.LoadFromPath(_fixturePath);
                });

                sendUpdatesToClient();
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

        public void ExportAllFixtures()
        {
            _watcher.Latch(() =>
            {
                if (!Directory.Exists(_fixturePath))
                {
                    Directory.CreateDirectory(_fixturePath);
                }

                var fixtures = CombinedFixtures();
                foreach (var fixture in fixtures)
                {
                    var file = _fixturePath.AppendPath(fixture.key + ".md");
                    try
                    {
                        FixtureWriter.Write(fixture, file);
                    }
                    catch (Exception e)
                    {
                        ConsoleWriter.Write(ConsoleColor.Red, $"Could not export fixture {fixture.key}");
                        ConsoleWriter.Write(ConsoleColor.Yellow, e.ToString());
                    }
                }
            });
        }

        public void Export(string key)
        {
            var file = FileFor(key);

            var fixture = CombinedFixtures().FirstOrDefault(x => x.key == key) ?? new FixtureModel(key);

            try
            {
                FixtureWriter.Write(fixture, file);
            }
            catch (Exception e)
            {
                ConsoleWriter.Write(ConsoleColor.Red, "Failed to write file " + file);
                ConsoleWriter.Write(ConsoleColor.Yellow, e.ToString());
            }
        }

        public string FileFor(string key)
        {
            return _fixturePath.AppendPath(key + ".md");
        }
    }
}
