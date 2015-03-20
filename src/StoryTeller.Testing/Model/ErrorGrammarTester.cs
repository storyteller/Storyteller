using System.Linq;
using FubuCore;
using NUnit.Framework;
using StoryTeller.Conversion;
using StoryTeller.Grammars;
using StoryTeller.Model;

namespace StoryTeller.Testing.Model
{
    [TestFixture]
    public class ErrorGrammarTester
    {
        [Test]
        public void compile_just_returns_itself()
        {
            var grammar = new ErrorGrammar("bad", "Bad!");
            grammar.As<IGrammar>().Compile(new Fixture(), null)
                .ShouldBeTheSameAs(grammar);
        }

        [Test]
        public void create_an_error_grammar_adds_error_to_itself()
        {
            var grammar = new ErrorGrammar("bad", "Bad!");

            grammar.errors.Single().error.ShouldEqual("Bad!");
        }

        [Test]
        public void create_plan_returns_an_invalid_grammar_step()
        {
            var grammar = new ErrorGrammar("bad", "Bad!");

            grammar.As<IGrammar>().CreatePlan(new Step("foo") {Id = "1"}, TestingContext.Library)
                .ShouldEqual(new InvalidGrammarStep(new StepValues("1"), "Grammar 'bad' is in an invalid state. See the grammar errors"));
        }
    }
}