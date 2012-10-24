using StoryTeller.Domain;
using StoryTeller.Model;

namespace StoryTeller.UserInterface.Tests
{
    public class PreviewMode : TestMode
    {
        private readonly IHtmlView _html;
        private readonly ITestService _service;
        private readonly Test _test;

        public PreviewMode(IHtmlView html, ITestService service, Test test)
            : base(Mode.Preview)
        {
            _html = html;
            _service = service;
            _test = test;
        }

        public override object ContentView { get { return _html; } }

        public override void Refresh()
        {
            refresh();
        }

        private void refresh()
        {
            _html.Html = _service.CreatePreview(_test);
        }

        public override bool IsEnabled(Test test)
        {
            return true;
        }
    }
}