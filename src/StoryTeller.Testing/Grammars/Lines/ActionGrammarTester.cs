using System.Linq;
using Xunit;
using Rhino.Mocks;
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
            var action = MockRepository.GenerateMock<System.Action<ISpecContext>>();
            var grammar = new ActionGrammar("do something", action);

            var context = SpecContext.ForTesting();

            grammar.Execute(new StepValues("foo"), context).ToArray();

            action.AssertWasCalled(x => x.Invoke(context));
        }

        [Fact]
        public void build_out_the_grammar_model()
        {
            var grammar = new ActionGrammar("do something", c => { });

            var model = grammar.Compile(new Fixture(), CellHandling.Basic()).ShouldBeOfType<Sentence>();

            ShouldBeTestExtensions.ShouldBe(model.errors.Any(), false);
            model.format.ShouldBe("do something");
            ShouldBeTestExtensions.ShouldBe(model.cells.Any(), false);
        }
    }
}