using System.Linq;
using Xunit;
using NSubstitute;
using Shouldly;
using StoryTeller.Conversion;
using StoryTeller.Engine;
using StoryTeller.Grammars;
using StoryTeller.Results;

namespace StoryTeller.Testing.Grammars
{
    
    public class InvalidGrammarStepTester
    {
        [Fact]
        public void accept_visitor()
        {
            var executor = Substitute.For<IStepExecutor>();

            var step = new InvalidGrammarStep(new StepValues("foo"), "grammar is wonky");

            step.AcceptVisitor(executor);

            executor.Received().Line(step);
        }

        [Fact]
        public void execute_logs_a_step_result_error()
        {
            var context = SpecContext.ForTesting();

            var step = new InvalidGrammarStep(new StepValues("the id"), "grammar is wonky");

            step.Execute(context);

            var result = context.Results.Single().ShouldBeOfType<StepResult>();

            result.id.ShouldBe("the id");
            result.status.ShouldBe(ResultStatus.error);
            result.error.ShouldBe("grammar is wonky");
        }
    }
}