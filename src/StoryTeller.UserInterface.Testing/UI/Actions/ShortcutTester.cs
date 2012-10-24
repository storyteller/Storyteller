using System.Windows.Input;
using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.UserInterface.Actions;
using StoryTeller.UserInterface.Controls;

namespace StoryTeller.UserInterface.Testing.UI.Actions
{
    [TestFixture]
    public class ShortcutTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            _commands = MockRepository.GenerateMock<ICommandBar>();
        }

        #endregion

        private ICommandBar _commands;

        [Test]
        public void shortcut_creates_a_button()
        {
            var command = MockRepository.GenerateMock<ICommand>();

            var shortcut = new ScreenAction
            {
                Name = "some text",
                Binding = new InputBinding(command, new KeyGesture(Key.F8)),
                Icon = Icon.Run
            };

            shortcut.BuildButton(_commands);

            _commands.AssertWasCalled(x => x.AddCommand("some text", command, Icon.Run));
        }
    }
}