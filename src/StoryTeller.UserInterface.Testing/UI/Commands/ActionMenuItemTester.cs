using System.Windows.Controls;
using NUnit.Framework;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Commands;

namespace StoryTeller.UserInterface.Testing.UI.Commands
{
    [TestFixture]
    public class ActionMenuItemTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            action = new StubContextualAction();
            item = new ActionMenuItem(action);
        }

        #endregion

        private StubContextualAction action;
        private ActionMenuItem item;

        [Test]
        public void the_icon_is_from_the_action()
        {
            item.Icon.ShouldBeOfType<Image>().GetIcon().ShouldEqual(action.Icon);
        }

        [Test]
        public void the_menu_is_enabled_or_disabled_by_the_enabled_flag()
        {
            action.Enabled = true;
            item.Update();
            item.IsEnabled.ShouldBeTrue();

            action.Enabled = false;
            item.Update();
            item.IsEnabled.ShouldBeFalse();
        }

        [Test]
        public void the_text_is_from_the_command()
        {
            item.Header.ShouldEqual(action.Description);
        }
    }

    public class StubContextualAction : IContextualAction
    {
        public bool WasExecuted;

        #region IContextualAction Members

        public Icon Icon { get { return Icon.Success; } }

        public string Description { get { return "the description of the command"; } }

        public bool Enabled { get; set; }

        public void Execute()
        {
            WasExecuted = true;
        }

        #endregion
    }
}