using System;
using System.Linq;
using Xunit;
using Rhino.Mocks;
using Shouldly;
using StoryTeller.Conversion;
using StoryTeller.Engine;
using StoryTeller.Grammars;
using StoryTeller.Results;

namespace StoryTeller.Testing.Grammars
{
    
    public class LinePlanTester
    {
        private StepValues values;
        private SpecContext context;
        private ILineGrammar theLineGrammar;
        private int thePosition = 5;


        public LinePlanTester()
        {
            values = new StepValues(Guid.NewGuid().ToString());
            context = SpecContext.ForTesting();
            theLineGrammar = MockRepository.GenerateMock<ILineGrammar>();
        }


        private void afterExecuting()
        {
            new LineStep(values, theLineGrammar){Position = thePosition}.Execute(context);
        }

        [Fact]
        public void run_happy_path_with_no_conversions_and_no_errors()
        {
            var cells = new[]
            {
                new CellResult("a", ResultStatus.error), new CellResult("b", ResultStatus.error)
            };

            theLineGrammar.Stub(x => x.Execute(values, context)).Return(cells);

            afterExecuting();

            var result = context.Results.Single().ShouldBeOfType<StepResult>();
            result.id.ShouldBe(values.id);
            result.status.ShouldBe(ResultStatus.ok);
            result.cells.ShouldHaveTheSameElementsAs(cells);

        }

        [Fact]
        public void run_puts_the_position_on_the_result_happy_path()
        {
            var cells = new[]
            {
                new CellResult("a", ResultStatus.error), new CellResult("b", ResultStatus.error)
            };

            theLineGrammar.Stub(x => x.Execute(values, context)).Return(cells);

            afterExecuting();

            var result = context.Results.Single().ShouldBeOfType<StepResult>();
            result.position.ShouldBe(thePosition.ToString());
        }

        [Fact]
        public void no_conversion_errors_but_the_action_blows_up()
        {
            var ex = new NotImplementedException();
            theLineGrammar.Expect(x => x.Execute(values, context)).Throw(ex);

            afterExecuting();

            context.AssertTheOnlyResultIs(new StepResult(values.id, ResultStatus.error){error = ex.ToString(), position = thePosition});
        }


        [Fact]
        public void no_conversion_errors_but_the_action_blows_up_sets_the_position()
        {
            var ex = new NotImplementedException();
            theLineGrammar.Expect(x => x.Execute(values, context)).Throw(ex);

            afterExecuting();

            var result = context.Results.Single().ShouldBeOfType<StepResult>();
            result.position.ShouldBe(thePosition.ToString());
        }

        [Fact]
        public void runs_all_the_delayed_conversions_before_performing_the_action()
        {
            var c1 = new FakeRuntimeConverter();
            var c2 = new FakeRuntimeConverter();

            values.RegisterDelayedConversion("a", "1", c1);
            values.RegisterDelayedConversion("b", "2", c2);

            theLineGrammar.Expect(x => x.Execute(values, context)).Return(new CellResult[0]);

            afterExecuting();

            theLineGrammar.VerifyAllExpectations();

            ShouldBeTestExtensions.ShouldBe(c1.ConversionHappened, true);
            ShouldBeTestExtensions.ShouldBe(c2.ConversionHappened, true);

        }

        [Fact]
        public void when_there_are_conversion_errors_a_head_of_time()
        {
            values.LogError("a", "don't like you");

            afterExecuting();

            theLineGrammar.AssertWasNotCalled(x => x.Execute(values, context));

            var result = context.Results.Single().ShouldBeOfType<StepResult>();
            result.id.ShouldBe(values.id);
            result.status.ShouldBe(ResultStatus.ok);
            result.cells.ShouldHaveTheSameElementsAs(new[]
            {
                new CellResult("a", ResultStatus.error){error = "don't like you"}
            });

        }

        [Fact]
        public void when_there_are_errors_in_the_runtime_conversion()
        {
            values.RegisterDelayedConversion("a", "foo", new RuntimeConverterThatBlowsUp());

            afterExecuting();

            theLineGrammar.AssertWasNotCalled(x => x.Execute(values, context));

            var result = context.Results.Single().ShouldBeOfType<StepResult>()
                .cells.Single();

            result.Status.ShouldBe(ResultStatus.error);
            result.cell.ShouldBe("a");
            
        }

        [Fact]
        public void accept_visitor_calls_through_to_line()
        {
            var executor = MockRepository.GenerateMock<IStepExecutor>();

            var step = new LineStep(values, theLineGrammar);

            step.AcceptVisitor(executor);

            executor.AssertWasCalled(x => x.Line(step));
        }
    }

    public class FakeRuntimeConverter : IRuntimeConverter
    {
        public object Convert(string raw, ISpecContext context)
        {
            ConversionHappened = true;

            return raw;
        }

        public bool Matches(Type type)
        {
            throw new NotImplementedException();
        }

        public bool ConversionHappened { get; set; }
    }

    public class RuntimeConverterThatBlowsUp : IRuntimeConverter
    {
        public object Convert(string raw, ISpecContext context)
        {
            throw new Exception("You shall not pass!");
        }

        public bool Matches(Type type)
        {
            throw new NotImplementedException();
        }
    }
}