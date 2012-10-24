using NUnit.Framework;
using StoryTeller.Assertions;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Model;
using TestContext = StoryTeller.Engine.TestContext;

namespace StoryTeller.Testing.Engine
{
    [TestFixture]
    public class SetPropertyGrammarTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
        }

        #endregion

        [Test]
        public void create_a_grammar_structure()
        {
            SetPropertyGrammar grammar = SetPropertyGrammar.For<Address>(x => x.DistanceFromOffice);
            var sentence = grammar.ToStructure(new FixtureLibrary()).ShouldBeOfType<Sentence>();
            sentence.ShouldEqual(Sentence.For("DistanceFromOffice = {DistanceFromOffice}",
                                              Cell.For<double>("DistanceFromOffice")));
        }

        [Test]
        public void sets_a_numeric_property_happy_path()
        {
            SetPropertyGrammar grammar = SetPropertyGrammar.For<Address>(x => x.DistanceFromOffice);
            var context = new TestContext();

            var address = new Address();

            context.CurrentObject = address;

            Step step = new Step().With("DistanceFromOffice", "112.3");

            grammar.Execute(step, context);

            address.DistanceFromOffice.ShouldEqual(112.3);
        }

        [Test]
        public void sets_a_numeric_property_happy_path_with_a_default_value()
        {
            SetPropertyGrammar grammar = SetPropertyGrammar.For<Address>(x => x.DistanceFromOffice);
            grammar.DefaultValue = "234.1";
            var context = new TestContext();

            var address = new Address();

            context.CurrentObject = address;

            var step = new Step();

            grammar.Execute(step, context);

            address.DistanceFromOffice.ShouldEqual(234.1);
        }

        [Test]
        public void sets_a_simple_property_happy_path()
        {
            SetPropertyGrammar grammar = SetPropertyGrammar.For<Address>(x => x.City);
            var context = new TestContext();

            var address = new Address();

            context.CurrentObject = address;

            Step step = new Step().With("City", "Dripping Springs");

            grammar.Execute(step, context);

            address.City.ShouldEqual("Dripping Springs");
        }

        [Test]
        public void try_to_set_property_when_the_current_object_is_missing()
        {
            SetPropertyGrammar grammar = SetPropertyGrammar.For<Address>(x => x.DistanceFromOffice);
            var context = new TestContext();

            var exceptionText = string.Empty;

            Step step = new Step().With("DistanceFromOffice", "112.3");
            try
            {
                grammar.Execute(step, context);
            }
            catch (StorytellerAssertionException ex)
            {
                exceptionText = ex.ToString();
            }

            string message = string.Format(
                "Test Error:  Expected an object of type '{0}' on ITestContext.CurrentObject",
                typeof(Address).AssemblyQualifiedName);

            exceptionText.ShouldContain(message);
        }
    }
}