using System;
using System.Linq;
using FubuTestingSupport;
using NUnit.Framework;
using Rhino.Mocks;
using Storyteller.Core.Conversion;
using Storyteller.Core.Engine;
using Storyteller.Core.Grammars;
using Storyteller.Core.Results;

namespace Storyteller.Core.Testing.Grammars
{
    [TestFixture]
    public class LinePlanTester
    {
        private StepValues values;
        private SpecContext context;
        private ILineGrammar theLineGrammar;


        [SetUp]
        public void SetUp()
        {
            values = new StepValues(Guid.NewGuid().ToString());
            context = SpecContext.ForTesting();
            theLineGrammar = MockRepository.GenerateMock<ILineGrammar>();
        }

        private void afterExecuting()
        {
            new LineStep(values, theLineGrammar).Execute(context);
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
            result.id.ShouldEqual(values.Id);
            result.status.ShouldEqual(ResultStatus.ok);
            result.cells.ShouldHaveTheSameElementsAs(cells);

        }

        [Test]
        public void no_conversion_errors_but_the_action_blows_up()
        {
            var ex = new NotImplementedException();
            theLineGrammar.Expect(x => x.Execute(values, context)).Throw(ex);

            afterExecuting();

            context.AssertTheOnlyResultIs(new StepResult(values.Id, ResultStatus.error){error = ex.ToString()});
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

            c1.ConversionHappened.ShouldBeTrue();
            c2.ConversionHappened.ShouldBeTrue();

        }

        [Test]
        public void when_there_are_conversion_errors_a_head_of_time()
        {
            values.LogError("a", "don't like you");

            afterExecuting();

            theLineGrammar.AssertWasNotCalled(x => x.Execute(values, context));

            var result = context.Results.Single().ShouldBeOfType<StepResult>();
            result.id.ShouldEqual(values.Id);
            result.status.ShouldEqual(ResultStatus.ok);
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

            result.status.ShouldEqual(ResultStatus.error);
            result.cell.ShouldEqual("a");
            
        }

        [Test]
        public void accept_visitor_calls_through_to_line()
        {
            var executor = MockRepository.GenerateMock<ISpecExecutor>();

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