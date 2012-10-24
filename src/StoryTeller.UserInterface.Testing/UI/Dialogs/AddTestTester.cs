using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Commands;
using StoryTeller.UserInterface.Dialogs;

namespace StoryTeller.UserInterface.Testing.UI.Dialogs
{
    [TestFixture]
    public class AddTestTester : InteractionContext<AddTest>
    {
        [Test]
        public void change_the_name_then_clear_it_out_disables_the_create_button()
        {
            ClassUnderTest.NameBox.Text = "something";
            ClassUnderTest.NameBox.Text = string.Empty;
            ClassUnderTest.Create.IsEnabled.ShouldBeFalse();
        }

        [Test]
        public void clicking_on_create_when_it_is_enabled_calls_to_the_command_to_create_the_test()
        {
            string theTestNameEnteredByTheUser = "something";
            ClassUnderTest.NameBox.Text = theTestNameEnteredByTheUser;
            ControlDriver.FireEvent(ClassUnderTest.Create, "Click");

            MockFor<IAddTestCommand>().AssertWasCalled(x => x.CreateTest(theTestNameEnteredByTheUser));
        }

        [Test]
        public void putting_text_into_the_name_enables_the_create_button()
        {
            ClassUnderTest.NameBox.Text = "something";
            ClassUnderTest.Create.IsEnabled.ShouldBeTrue();
        }

        [Test]
        public void the_create_button_is_initially_disabled()
        {
            ClassUnderTest.Create.IsEnabled.ShouldBeFalse();
        }
    }
}