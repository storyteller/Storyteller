using System.Linq;
using FubuCore;
using NUnit.Framework;
using StoryTeller.Conversion;
using StoryTeller.Grammars;
using StoryTeller.Model;

namespace StoryTeller.Testing.Model
{
    [TestFixture]
    public class MissingGrammarTester
    {
        [Test]
        public void create_an_Missing_grammar_adds_Missing_to_itself()
        {
            var grammar = new MissingGrammar("NotHere");

            grammar.errors.Single().error.ShouldEqual("Grammar 'NotHere' is not implemented");
        }

        [Test]
        public void create_plan_creates_an_invalid_grammar_step()
        {
            var grammar = new MissingGrammar("missing");
            grammar.As<IGrammar>().CreatePlan(new Step("missing"){Id = "3"}, TestingContext.Library)
                .ShouldEqual(new InvalidGrammarStep(new StepValues("3"), "Grammar 'missing' is not implemented"));
        }

        [Test]
        public void compile_just_returns_itself()
        {
            var grammar = new MissingGrammar("Bad!");
            grammar.As<IGrammar>().Compile(new Fixture(), null)
                .ShouldBeTheSameAs(grammar);
        }


    }
}