using System.Windows;
using NUnit.Framework;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Dialogs;
using StoryTeller.UserInterface.Testing.UI.Commands;
using StructureMap;

namespace StoryTeller.UserInterface.Testing.UI.Dialogs
{
    [TestFixture]
    public class DialogLauncherTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            top = new Window();
            top.Show();
            theAction = new StubContextualAction();

            container = new Container(x =>
            {
                x.For<Window>().Use(top);

                x.For<ICommandDialog<StubContextualAction>>().Use<StubDialogView>();
            });

            theDialog = container.GetInstance<DialogLauncher>().BuildDialog(theAction);
        }

        [TearDown]
        public void TearDown()
        {
            top.Close();
        }

        #endregion

        private IContainer container;
        private Dialog theDialog;
        private Window top;
        private StubContextualAction theAction;

        [Test]
        public void the_command_should_be_sent_to_the_view_through_the_constructor_of_the_view()
        {
            theDialog.Content.ShouldBeOfType<StubDialogView>().BoundCommand.ShouldBeTheSameAs(theAction);
        }

        [Test]
        public void the_dialog_should_have_a_stub_dialog_view_as_the_content()
        {
            theDialog.Content.ShouldBeOfType<StubDialogView>();
        }
    }

    public class StubDialogView : ICommandDialog<StubContextualAction>
    {
        public StubContextualAction BoundCommand;

        public StubDialogView(StubContextualAction boundCommand)
        {
            BoundCommand = boundCommand;
        }

        #region ICommandDialog<StubContextualAction> Members

        public string Title { get { return "The Title"; } }

        #endregion
    }
}