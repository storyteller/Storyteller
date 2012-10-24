using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Model;

namespace StoryTeller.Testing.Engine
{
    [TestFixture]
    public class BooleanReturnTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
        }

        #endregion

        [Test]
        public void fact_method_with_parameters_should_build_example_correctly()
        {
            var fixture = new FactFixture();
            IGrammar grammar = fixture["XplusYShouldBe"];

            GrammarStructure structure = grammar.ToStructure(new FixtureLibrary());
            IStep example = structure.CreateExample();

            example.Values.Count.ShouldEqual(3);
        }
    }

    public class FactFixture : Fixture
    {
        [FormatAs("{x} + {y} should be {sum}")]
        public bool XplusYShouldBe(int x, int y, int sum)
        {
            return (x + y) == sum;
        }
    }
}