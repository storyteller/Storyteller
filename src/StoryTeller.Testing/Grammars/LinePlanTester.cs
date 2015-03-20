using System;
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
    public class LinePlanTester
    {
        private StepValues values;
        private SpecContext context;
        private ILineGrammar theLineGrammar;
        private int thePosition = 5;


        [SetUp]
        public void SetUp()
        {
            values = new StepValues(Guid.NewGuid().ToString());
            context = SpecContext.ForTesting();
            theLineGrammar = MockRepository.GenerateMock<ILineGrammar>();
        }

        private void afterExecuting()
        {
            new LineStep(values, theLineGrammar){Position = thePosition}.Execute(context);
        }

        [Test]
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
            result.Status.ShouldBe(ResultStatus.ok);
            result.cells.ShouldHaveTheSameElementsAs(cells);

        }

        [Test]
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

        [Test]
        public void no_conversion_errors_but_the_action_blows_up()
        {
            var ex = new NotImplementedException();
            theLineGrammar.Expect(x => x.Execute(values, context)).Throw(ex);

            afterExecuting();

            context.AssertTheOnlyResultIs(new StepResult(values.id, ResultStatus.error){error = ex.ToString(), position = thePosition});
        }


        [Test]
        public void no_conversion_errors_but_the_action_blows_up_sets_the_position()
        {
            var ex = new NotImplementedException();
            theLineGrammar.Expect(x => x.Execute(values, context)).Throw(ex);

            afterExecuting();

            var result = context.Results.Single().ShouldBeOfType<StepResult>();
            result.position.ShouldBe(thePosition.ToString());
        }

        [Test]
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

        [Test]
        public void when_there_are_conversion_errors_a_head_of_time()
        {
            values.LogError("a", "don't like you");

            afterExecuting();

            theLineGrammar.AssertWasNotCalled(x => x.Execute(values, context));

            var result = context.Results.Single().ShouldBeOfType<StepResult>();
            result.id.ShouldBe(values.id);
            result.Status.ShouldBe(ResultStatus.ok);
            result.cells.ShouldHaveTheSameElementsAs(new[]
            {
                new CellResult("a", ResultStatus.error){error = "don't like you"}
            });

        }

        [Test]
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

        [Test]
        public void accept_visitor_calls_through_to_line()
        {
            var executor = MockRepository.GenerateMock<IStepExecutor>();

            var step = new LineStep(values, theLineGrammar);

            step.AcceptVisitor(executor);

            executor.AssertWasCalled(x => x.Line(step));
        }
    }

    public class FakeRuntimeConverter : IRuntimeConvertor
    {
        public object Convert(string raw, ISpecContext context)
        {
            ConversionHappened = true;

            return raw;
        }

        public bool ConversionHappened { get; set; }
    }

    public class RuntimeConverterThatBlowsUp : IRuntimeConvertor
    {
        public object Convert(string raw, ISpecContext context)
        {
            throw new Exception("You shall not pass!");
        }
    }
}