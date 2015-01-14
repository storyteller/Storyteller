using NUnit.Framework;
using Rhino.Mocks;
using Storyteller.Core.Conversion;
using Storyteller.Core.Grammars.Lines;

namespace Storyteller.Core.Testing.Grammars.Lines
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

            grammar.Execute(new StepValues("foo"), context);

            action.AssertWasCalled(x => x.Invoke(context));
        }


    }
}