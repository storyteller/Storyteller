using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Execution;
using StoryTeller.Workspace;

namespace StoryTeller.Testing
{
    [TestFixture, Explicit]
    public class Template
    {
        private ProjectTestRunner runner;

        [TestFixtureSetUp]
        public void SetupRunner()
        {
            runner = new ProjectTestRunner(@"C:\svn\blue\StoryTeller.xml");
        }

        [Test]
        public void test1()
        {

            runner.RunAndAssertTest("Adding/Bad Add 1");
        }

        [TestFixtureTearDown]
        public void TeardownRunner()
        {
            runner.Dispose();
        }
    }
}