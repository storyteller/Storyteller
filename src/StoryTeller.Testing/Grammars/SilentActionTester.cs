using System;
using System.Linq;
using Xunit;
using NSubstitute;
using Shouldly;
using StoryTeller.Engine;
using StoryTeller.Grammars;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.Testing.Grammars
{
    
    public class SilentActionTester
    {
        [Fact]
        public void execute_happy_path()
        {
            var wasCalled = false;
            var section = new Section("Math"){id = "4"};
            var action = new SilentAction("Fixture", Stage.setup, x => wasCalled = true, section);
            var context = SpecContext.ForTesting();
            action.Execute(context);

            ShouldBeTestExtensions.ShouldBe(wasCalled, true);

        }

        [Fact]
        public void execute_sad_path()
        {
            var context = SpecContext.ForTesting();
            var ex = new DivideByZeroException();

            var section = new Section("Math") {id = "5"};
            var action = new SilentAction("Fixture", Stage.teardown, x => { throw ex; }, section);

            action.Execute(context);

            var result = context.Results.Single().ShouldBeOfType<StepResult>();

            result.id.ShouldBe(section.id);
            result.position.ShouldBe(Stage.teardown.ToString());
            result.status.ShouldBe(ResultStatus.error);
            result.error.ShouldContain("DivideByZeroException");


        }

        [Fact]
        public void exceptions_are_critical()
        {
            var context = SpecContext.ForTesting();
            var ex = new DivideByZeroException();

            var section = new Section("Math") { id = "5" };
            var action = SilentAction.AsCritical("Fixture", Stage.teardown, x => { throw ex; }, section);

            action.Execute(context);

            context.CanContinue().ShouldBe(false);
        }

        [Fact]
        public void accept_visitor()
        {
            var executor = Substitute.For<IStepExecutor>();

            var action = new SilentAction("Fixture", Stage.setup, x => { }, new Section("Math"));

            action.AcceptVisitor(executor);

            executor.Received().Line(action);
        }
    }
}