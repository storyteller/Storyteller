using System;
using StoryTeller.Execution;
using StoryTeller.Html;
using StoryTeller.Model;
using StoryTeller.UserInterface.Actions;
using StoryTeller.UserInterface.Screens;
using StoryTeller.UserInterface.Tests;

namespace StoryTeller.UserInterface.Exploring
{
    public class GrammarErrorPresenter : IScreen, IListener<BinaryRecycleFinished>, IStartable
    {
        private readonly IHtmlView _view;

        public GrammarErrorPresenter(IHtmlView view)
        {
            _view = view;
        }

        public void Dispose()
        {
        }

        public object View
        {
            get
            {
                return _view;
            }
        }

        public string Title
        {
            get
            {
                return "Grammar Errors";
            }
        }

        public void Activate(IScreenObjectRegistry screenObjects)
        {

        }

        public bool CanClose()
        {
            return true;
        }

        public void Handle(BinaryRecycleFinished message)
        {
            var library = message.Library;
            var writer = new FixtureLibraryErrorWriter();

            _view.Html = writer.BuildReport(library).ToString();
        }

        public void Start()
        {
            _view.Html = "<html><body><h3>No Errors.</h3></body></html>";
        }
    }
}