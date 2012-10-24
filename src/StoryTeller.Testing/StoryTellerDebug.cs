using NUnit.Framework;
using StoryTeller.Execution;

namespace StoryTellerTestHarness
{
    [TestFixture, Explicit]
    public class Template
    {
        private ProjectTestRunner runner;

        [TestFixtureSetUp]
        public void SetupRunner()
        {
            runner = new ProjectTestRunner(@"..\..\StoryTeller.xml");
        }

        [Test]
        public void Either_a_site_or_contact_is_required()
        {
            runner.RunAndAssertTest("Parts/Installed Parts/Against a Contact/Either a site or contact is required");
        }

        [TestFixtureTearDown]
        public void TeardownRunner()
        {
            runner.Dispose();
        }
    }
}