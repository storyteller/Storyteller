using System;
using System.IO;
using StoryTeller.Domain;
using StoryTeller.Model;
using StoryTeller.UserInterface.Editing;

namespace StoryTeller.UserInterface.Tests
{
    public class EditMode : TestMode
    {
        private readonly Test _test;
        private readonly ITestStateManager _testState;
        private readonly IHtmlView _view;
        private readonly ITestEditorBuilder _editorBuilder;

        public EditMode(Test test, ITestStateManager testState, IHtmlView view, ITestEditorBuilder editorBuilder)
            : base(Mode.Edit)
        {
            _test = test;
            _testState = testState;
            _view = view;
            _editorBuilder = editorBuilder;
        }

        public override object ContentView { get { return _view; } }

        public override void Refresh()
        {
            var document = _editorBuilder.BuildEditor(_test);
            document.WriteToFile("editor.htm");
            var path = Path.GetFullPath("editor.htm");

            _view.OpenFile("file:///" + path);
            //_view.Html = _editorBuilder.BuildHtml(_test);
            _view.Listener = this;
        }

        public void CaptureChanges(string json)
        {
            _testState.StoreJson(json, this);
            _view.CaptureFocus();
        }

        public override bool IsEnabled(Test test)
        {
            return true;
        }

        public override bool ApplyChanges()
        {
            _view.RunCommand("applyChanges");
            return true;
        }
    }
}