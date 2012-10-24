using System;
using StoryTeller.Domain;
using StoryTeller.UserInterface.Exploring;
using StoryTeller.UserInterface.Handlers;
using StoryTeller.Workspace;
using System.Collections.Generic;

namespace StoryTeller.UserInterface.Workspace
{
    public class LoadPreviousResults{}
    public class LoadResultsFromDirectory
    {
        public string Directory { get; set; }
    }

    public class SaveResultsToDirectoryMessage
    {
        public string Directory { get; set; }
    }

    // TODO -- this is only here for StructureMap mechanics
    // Streamline in SM 3
    public interface ITestResultHandler{}

    // TODO -- Need LOTS of hardening here
    public class TestResultHandler : IStartable, ITestResultHandler
        , IListener<TestRunEvent>
        , IListener<LoadPreviousResults>
        , IListener<LoadResultsFromDirectory>
        , IListener<ClearResultsMessage>
        , IListener<SaveResultsToDirectoryMessage>
    {
        private readonly ProjectContext _context;
        private readonly IResultPersistor _persistor;
        private readonly Func<IEventAggregator> _toEvents;
        private IEventAggregator _events;

        public TestResultHandler(ProjectContext context, IResultPersistor persistor, Func<IEventAggregator> toEvents)
        {
            _context = context;
            _persistor = persistor;
            _toEvents = toEvents;
        }

        private IEventAggregator events
        {
            get
            {
                if (_events == null)
                {
                    _events = _toEvents();
                }

                return _events;
            }
        }

        public void Handle(TestRunEvent message)
        {
            if (message.Completed)
            {
                _persistor.SaveResult(_context.Project, message.Test, message.Test.LastResult);
            }
        }



        public virtual void ApplyResults(Hierarchy hierarchy, ResultHistory history)
        {
            hierarchy.GetAllTests().Each(t => t.LastResult = history[t]);

            events.SendMessage<TestResultsLoaded>();
        }

        public void Handle(LoadPreviousResults message)
        {
            var results = _persistor.LoadResults(_context.Project);
            ApplyResults(_context.Hierarchy, results);
        }

        public void Handle(LoadResultsFromDirectory message)
        {
            var results = _persistor.LoadResults(message.Directory);
            ApplyResults(_context.Hierarchy, results);
        }

        public void Handle(ClearResultsMessage message)
        {
            _persistor.ClearResults(_context.Project);
        }

        public void Handle(SaveResultsToDirectoryMessage message)
        {
            var results = _context.Hierarchy.GetFullResults();
            _persistor.SaveResultsToDirectory(results, message.Directory);
        }

        public void Start()
        {
            
        }
    }
}