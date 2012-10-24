using NUnit.Framework;
using StoryTeller.Execution;

namespace StoryTeller.Testing.Execution
{
    [TestFixture]
    public class ProjectTestRunnerIntegratedTester
    {
        private ProjectTestRunner runner;

        [SetUp]
        public void SetUp()
        {
            runner = DataMother.MathProjectRunner();
        }

        [TearDown]
        public void TearDown()
        {
            runner.Dispose();
        }

        [Test]
        public void run_a_single_property()
        {
            runner.RunTest("Adding/Bad Add 1");
        }

        [Test, Explicit]
        public void run_a_single_property_with_assert()
        {
            runner.RunAndAssertTest("Adding/Bad Add 1");
        }
    }
}