using System;
using System.IO;
using System.Linq;
using Baseline;
using StorytellerDocGen.Runner;
using StoryTeller.Files;

namespace StorytellerDocGen
{
    public class TopicFileWatcher : IDisposable, IChangeSetHandler
    {
        private readonly DocSettings _settings;
        private readonly DocProject _project;
        private FileChangeWatcher _watcher;
        private IBrowserRefresher _refresher;

        public TopicFileWatcher(DocSettings settings, DocProject project)
        {
            _settings = settings;
            _project = project;
        }

        public void StartWatching(IBrowserRefresher refresher)
        {
            _refresher = refresher;

            _watcher = new FileChangeWatcher(_settings.Root, FileSet.Deep("*.*"), this);
            _watcher.Start();
        }


        public void Dispose()
        {
            _watcher.Dispose();
        }

        public bool FileChangeShouldRegenerateTopicTree(string file)
        {
            if (Path.GetExtension(file) == ".md") return true;

            var name = Path.GetFileName(file);

            return name.EqualsIgnoreCase("splash.htm") || name.EqualsIgnoreCase("order.txt");
        }

        void IChangeSetHandler.Handle(ChangeSet changes)
        {
            if (changes.Added.Concat(changes.Changed).Any(x => FileChangeShouldRegenerateTopicTree(x.Path)) ||
                changes.Deleted.Any())
            {
                _project.ReadTopics();
                _refresher.RefreshPage();
            }
            else
            {
                _refresher.RefreshPage();
            }


        }
    }
}