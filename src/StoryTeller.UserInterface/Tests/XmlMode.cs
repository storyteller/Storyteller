using System;
using StoryTeller.Domain;
using StoryTeller.Model;

namespace StoryTeller.UserInterface.Tests
{
    public class XmlMode : TestMode
    {
        private readonly IMessageCreator _messageBox;
        private readonly IXmlView _view;
        private readonly ITestStateManager _testState;

        public XmlMode(ITestStateManager testState, IMessageCreator messageBox, IXmlView view)
            : base(Mode.Xml)
        {
            _testState = testState;
            _messageBox = messageBox;
            _view = view;
        }

        public override object ContentView { get { return _view; } }

        public override void Refresh()
        {
            refresh();
        }

        private void refresh()
        {
            _view.Xml = _testState.CurrentXml;
        }

        public override bool IsEnabled(Test test)
        {
            return true;
        }

        public override bool ApplyChanges()
        {
            try
            {
                _testState.StoreXml(_view.Xml, this);
                return true;
            }
            catch (Exception e)
            {
                _messageBox.ShowAlert("Could not save Xml", e.ToString());
                return false;
            }
        }
    }
}