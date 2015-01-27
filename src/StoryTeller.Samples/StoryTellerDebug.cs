using NUnit.Framework;
using StoryTeller.Execution;
using StoryTeller.Engine;
using System.IO;

namespace StoryTellerTestHarness
{
    [TestFixture, Explicit]
    public class Template
    {
        private ProjectTestRunner runner;

        [TestFixtureSetUp]
        public void SetupRunner()
        {
            runner = new ProjectTestRunner(Path.Combine("..", "..", "..", "..", "samples", "grammars.xml"));
        }

        [Test]
        public void Tables()
        {
            var test = runner.RunTest("Tables/Tables");

        }

        [TestFixtureTearDown]
        public void TeardownRunner()
        {
            runner.Dispose();
        }
    }
}