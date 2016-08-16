using System.Linq;
using Xunit;
using NSubstitute;
using Shouldly;
using StoryTeller.Conversion;
using StoryTeller.Grammars.Lines;
using StoryTeller.Model;

namespace StoryTeller.Testing.Grammars.Lines
{
    
    public class ActionGrammarTester
    {
        [Fact]
        public void execute_delegates()
        {
            var action = Substitute.For<System.Action<ISpecContext>>();
            var grammar = new ActionGrammar("do something", action);

            var context = SpecContext.ForTesting();

            grammar.Execute(new StepValues("foo"), context).ToArray();

            action.Received().Invoke(context);
        }

        [Fact]
        public void build_out_the_grammar_model()
        {
            var grammar = new ActionGrammar("do something", c => { });

            var model = grammar.Compile(new Fixture(), CellHandling.Basic()).ShouldBeOfType<Sentence>();

            model.errors.Any().ShouldBe(false);
            model.format.ShouldBe("do something");
            model.cells.Any().ShouldBe(false);
        }
    }
}