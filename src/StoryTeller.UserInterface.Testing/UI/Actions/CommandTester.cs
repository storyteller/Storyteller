using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Actions;
using StructureMap;

namespace StoryTeller.UserInterface.Testing.UI.Actions
{
    [TestFixture]
    public class CommandTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            doer = MockRepository.GenerateMock<IDoer>();
            var container = new Container(x =>
            {
                x.For<IDoer>().Use(doer);
            });

            command = new Command<IDoer>(container, x => x.Execute());
        }

        #endregion

        private IDoer doer;
        private Command<IDoer> command;

        [Test]
        public void always_able_to_execute()
        {
            command.CanExecute(null).ShouldBeTrue();
        }

        [Test]
        public void execute_should_get_the_service_from_the_container_and_run_the_action_against_that_service()
        {
            command.Execute(null);

            doer.AssertWasCalled(x => x.Execute());
        }
    }

    public interface IDoer
    {
        void Execute();
    }
}