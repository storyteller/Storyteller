using StoryTeller.Domain;

namespace StoryTeller.UserInterface.Tests
{
    public class ResultsMode : TestMode
    {
        private readonly Test _test;
        private readonly IHtmlView _view;

        public ResultsMode(IHtmlView view, Test test)
            : base(Mode.Results)
        {
            _view = view;
            _test = test;
        }

        public override object ContentView { get { return _view; } }

        public override void Refresh()
        {
            if( _test.LastResult.Html == null)
            {
                if (_test.LastResult.ExceptionText != null)
                {
                    const string resultsErrorFormat =
                        "<html><body><p>StoryTeller encountered an error while collecting the test results:</p><pre>{0}</pre><br/><br/><pre>{1}</pre></body></html>";
                    _view.Html = string.Format(resultsErrorFormat, _test.LastResult.ExceptionText, _test.LastResult.FullExceptionText);

                    return;
                }
                
                _view.Html =
                    "<html><body><p>StoryTeller encountered an error while collecting the test results, but the error details aren't available (LastResult.ExceptionText is null)</p></body></html>";
            }
            else
            {
                _view.Html = _test.LastResult.Html;
            }
            
        }

        public override bool IsEnabled(Test test)
        {
            return test.HasResult();
        }
    }
}