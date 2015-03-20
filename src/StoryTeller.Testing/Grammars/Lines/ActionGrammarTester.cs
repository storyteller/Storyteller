using System.Linq;
using FubuTestingSupport;
using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Conversion;
using StoryTeller.Grammars.Lines;
using StoryTeller.Model;

namespace StoryTeller.Testing.Grammars.Lines
{
    [TestFixture]
    public class ActionGrammarTester
    {
        [Test]
        public void execute_delegates()
        {
            var action = MockRepository.GenerateMock<System.Action<ISpecContext>>();
            var grammar = new ActionGrammar("do something", action);

            var context = SpecContext.ForTesting();

            grammar.Execute(new StepValues("foo"), context).ToArray();

            action.AssertWasCalled(x => x.Invoke(context));
        }

        [Test]
        public void build_out_the_grammar_model()
        {
            var grammar = new ActionGrammar("do something", c => { });

            var model = grammar.Compile(new Fixture(), CellHandling.Basic()).ShouldBeOfType<Sentence>();

            model.errors.Any().ShouldBeFalse();
            model.format.ShouldEqual("do something");
            model.cells.Any().ShouldBeFalse();
        }
    }
}