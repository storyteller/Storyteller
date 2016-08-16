using System.Linq;
using Baseline;
using Xunit;
using Shouldly;
using StoryTeller.Conversion;
using StoryTeller.Grammars;
using StoryTeller.Model;

namespace StoryTeller.Testing.Model
{
    
    public class ErrorGrammarTester
    {
        [Fact]
        public void compile_just_returns_itself()
        {
            var grammar = new ErrorGrammar("bad", "Bad!");
            grammar.As<IGrammar>().Compile(new Fixture(), null)
                .ShouldBeTheSameAs(grammar);
        }

        [Fact]
        public void create_an_error_grammar_adds_error_to_itself()
        {
            var grammar = new ErrorGrammar("bad", "Bad!");

            grammar.errors.Single().error.ShouldBe("Bad!");
        }

        [Fact]
        public void create_plan_returns_an_invalid_grammar_step()
        {
            var grammar = new ErrorGrammar("bad", "Bad!");

            grammar.As<IGrammar>().CreatePlan(new Step("foo") {id = "1"}, TestingContext.Library)
                .ShouldBe(new InvalidGrammarStep(new StepValues("1"), "Grammar 'bad' is in an invalid state. See the grammar errors"));
        }
    }
}