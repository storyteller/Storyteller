using NUnit.Framework;
using StoryTeller.Execution;
using StoryTeller.Testing;
using StructureMap;

namespace StoryTeller.UserInterface.Testing.UI
{
    [TestFixture]
    public class can_get_the_test_status_from_the_container
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            Bootstrapper.ForceRestart();
        }

        #endregion

        [Test]
        public void smoke_test_if_can_get_the_test_status()
        {
            ObjectFactory.GetInstance<TestStatusMessage>().ShouldNotBeNull();
        }
    }
}