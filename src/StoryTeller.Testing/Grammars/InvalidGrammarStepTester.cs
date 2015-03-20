using System.Linq;
using NUnit.Framework;
using Rhino.Mocks;
using Shouldly;
using StoryTeller.Conversion;
using StoryTeller.Engine;
using StoryTeller.Grammars;
using StoryTeller.Results;

namespace StoryTeller.Testing.Grammars
{
    [TestFixture]
    public class InvalidGrammarStepTester
    {
        [Test]
        public void accept_visitor()
        {
            var executor = MockRepository.GenerateMock<IStepExecutor>();

            var step = new InvalidGrammarStep(new StepValues("foo"), "grammar is wonky");

            step.AcceptVisitor(executor);

            executor.AssertWasCalled(x => x.Line(step));
        }

        [Test]
        public void execute_logs_a_step_result_error()
        {
            var context = SpecContext.ForTesting();

            var step = new InvalidGrammarStep(new StepValues("the id"), "grammar is wonky");

            step.Execute(context);

            var result = context.Results.Single().ShouldBeOfType<StepResult>();

            result.id.ShouldBe("the id");
            result.Status.ShouldBe(ResultStatus.error);
            result.error.ShouldBe("grammar is wonky");
        }
    }
}