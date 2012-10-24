using Examples;
using Examples.Fixtures.Example;
using NUnit.Framework;
using StoryTeller.Engine;

namespace StoryTeller.Testing.Engine
{
    [TestFixture]
    public class AssemblyResultTester
    {
        private AssemblyResult theResult;

        [SetUp]
        public void SetUp()
        {
            theResult = new AssemblyResult(typeof (Calculator).Assembly);
        }

        [Test]
        public void should_have_scanned_just_fine()
        {
            theResult.WasAbleToScan.ShouldBeTrue();
        }

        [Test]
        public void found_fixture_types()
        {
            theResult.FixtureTypes.ShouldContain(typeof(Calculator2Fixture));
            theResult.FixtureTypes.ShouldContain(typeof(CalculatorFixture1));
            theResult.FixtureTypes.ShouldContain(typeof(CalculatorFixture3));
        }

        [Test]
        public void should_be_able_to_find_the_system()
        {
            theResult.SystemTypes.ShouldContain(typeof(ExampleSystem));
        }
    }
}