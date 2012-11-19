using System.Reflection;
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
        public void does_match_on_fixture_class_with_the_default_ctor()
        {
            AssemblyResult.IsFixture(typeof(Calculator2Fixture)).ShouldBeTrue();
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

        [Test]
        public void ignores_types_that_are_open_generics()
        {
            AssemblyResult.IsFixture(typeof(GenericFixture<>)).ShouldBeFalse();

            var result = new AssemblyResult(Assembly.GetExecutingAssembly());
            result.FixtureTypes.ShouldNotContain(typeof(GenericFixture<>));
        }

        [Test]
        public void ignores_fixture_types_that_do_not_have_a_public_ctor()
        {
            var result = new AssemblyResult(Assembly.GetExecutingAssembly());
            result.FixtureTypes.ShouldNotContain(typeof(NoPublicCtorFixture));
        }
    }

    public class GenericFixture<T> : Fixture
    {
        
    }
    
    public class NoPublicCtorFixture : Fixture
    {
        protected NoPublicCtorFixture()
        {
            
        }
    }
}