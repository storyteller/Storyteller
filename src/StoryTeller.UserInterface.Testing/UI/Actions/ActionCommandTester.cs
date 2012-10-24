using System;
using NUnit.Framework;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Actions;

namespace StoryTeller.UserInterface.Testing.UI.Actions
{
    [TestFixture]
    public class ActionCommandTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            wasExecuted = false;
            command = new ActionCommand(() => wasExecuted = true);
        }

        #endregion

        private bool wasExecuted;
        private ActionCommand command;

        private void command_CanExecuteChanged(object sender, EventArgs e)
        {
            throw new NotImplementedException();
        }

        [Test]
        public void do_not_blow_up_when_calling_enable_without_a_handler()
        {
            command.Enabled = false;
        }

        [Test]
        public void execute_should_call_the_inner_action_when_the_command_is_executed()
        {
            command.Execute(null);
            wasExecuted.ShouldBeTrue();
        }

        [Test]
        public void setting_the_enabled_property_fires_the_enabled_changed_event()
        {
            bool eventWasFired = false;

            command.CanExecuteChanged += (s, e) => eventWasFired = true;

            command.Enabled = false;

            eventWasFired.ShouldBeTrue();
        }

        [Test]
        public void the_command_is_enabled_by_default()
        {
            command.CanExecute(null).ShouldBeTrue();
        }
    }
}