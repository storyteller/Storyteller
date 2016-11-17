using System;
using System.IO;
using System.Linq;
using System.Threading;
using Baseline;
using Oakton;
using StoryTeller.Messages;
using StoryTeller.Model;
using StoryTeller.Model.Persistence.DSL;
using StoryTeller.Remotes;

namespace ST.Client
{
    public class FixtureController : IFixtureFileObserver, IFixtureController
    {
        private readonly IClientConnector _client;
        private readonly ReaderWriterLockSlim _lock = new ReaderWriterLockSlim();
        private readonly IFixtureFileWatcher _watcher;
        private string _fixturePath;

        private FixtureLibrary _overrides = new FixtureLibrary();
        private FixtureLibrary _systemFixtures = new FixtureLibrary();

        public FixtureController(IClientConnector client, IFixtureFileWatcher watcher)
        {
            _client = client;
            _watcher = watcher;
        }

        public void RecordSystemFixtures(SystemRecycled recycled)
        {
            _systemFixtures = FixtureLibrary.From(recycled.fixtures);
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

                _lock.Write(() => { _overrides = FixtureLoader.LoadFromPath(_fixturePath); });

                _watcher.StartWatching(path, this);
            }
            catch (Exception e)
            {
                Logger.Error("Failed to start watching fixture files", e);
            }
        }

        public virtual void ReloadFixtures()
        {
            try
            {
                _lock.Write(() => { _overrides = FixtureLoader.LoadFromPath(_fixturePath); });

                sendUpdatesToClient();
            }
            catch (Exception e)
            {
                Logger.Error("Failed to reload the fixtures", e);
            }
        }

        public void ExportAllFixtures()
        {
            _watcher.Latch(() =>
            {
                if (!Directory.Exists(_fixturePath))
                    Directory.CreateDirectory(_fixturePath);

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
                _watcher.Latch(() => FixtureWriter.Write(fixture, file));
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

        public string CreateFixture(string keyOrTitle)
        {
            var fixture = FixtureModel.BuildFromKeyOrTitle(keyOrTitle);
            var file = FileFor(fixture.key);

            if (File.Exists(file))
            {
                ConsoleWriter.Write(ConsoleColor.White, $"Fixture file '{file}' already exists");
            }
            else
            {
                _watcher.Latch(() =>
                {
                    FixtureWriter.Write(fixture, file);
                });

                _overrides.Models[fixture.key] = fixture;

                sendUpdatesToClient();

                ConsoleWriter.Write(ConsoleColor.Green, $"Successfully created a new Fixture {fixture.key}: {fixture.title}");


            }

            return file;
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

        public void Dispose()
        {
            _watcher?.Dispose();
        }

        private void sendUpdatesToClient()
        {
            var message = new FixturesReloaded
            {
                fixtures = CombinedFixtures()
            };

            _client.SendMessageToClient(message);
        }
    }
}