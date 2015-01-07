using System;
using System.Linq;
using FubuTestingSupport;
using NUnit.Framework;
using Rhino.Mocks;
using Storyteller.Core.Conversion;
using Storyteller.Core.Grammars;
using Storyteller.Core.Results;

namespace Storyteller.Core.Testing.Grammars
{
    [TestFixture]
    public class LinePlanTester
    {
        private StepValues values;
        private RecordingSpecContext context;
        private Action<ISpecContext, StepValues> action;
        private bool innerActionRan;


        [SetUp]
        public void SetUp()
        {
            innerActionRan = false;
            values = new StepValues();
            context = new RecordingSpecContext();
            action = (c, v) => innerActionRan = true;
        }

        private void afterExecuting()
        {
            new LinePlan(values, action).Execute(context);
        }

        [Test]
        public void run_happy_path_with_no_conversions_and_no_errors()
        {
            afterExecuting();

            innerActionRan.ShouldBeTrue();

            context.AssertTheOnlyResultIs(new StepResult(ResultStatus.ok));
        }

        [Test]
        public void no_conversion_errors_but_the_action_blows_up()
        {
            var ex = new NotImplementedException();
            action = (c, v) => { throw ex; };

            afterExecuting();

            context.AssertTheOnlyResultIs(new StepResult(ResultStatus.error){error = ex.ToString()});
        }

        [Test]
        public void runs_all_the_delayed_conversions_before_performing_the_action()
        {
            var c1 = new FakeRuntimeConverter();
            var c2 = new FakeRuntimeConverter();

            values.RegisterDelayedConversion("a", "1", c1);
            values.RegisterDelayedConversion("b", "2", c2);

            action = (c, v) =>
            {
                innerActionRan = true;
                c1.ConversionHappened.ShouldBeTrue();
                c2.ConversionHappened.ShouldBeTrue();
            };

            afterExecuting();

            innerActionRan.ShouldBeTrue();
        }

        [Test]
        public void when_there_are_conversion_errors_a_head_of_time()
        {
            values.LogError("a", "don't like you");

            afterExecuting();

            innerActionRan.ShouldBeFalse();

            context.AssertTheOnlyResultIs(new CellResult("a", ResultStatus.error){error = "don't like you"});
        }

        [Test]
        public void when_there_are_errors_in_the_runtime_conversion()
        {
            values.RegisterDelayedConversion("a", "foo", new RuntimeConverterThatBlowsUp());

            afterExecuting();

            innerActionRan.ShouldBeFalse();

            var result = context.Results.Single().ShouldBeOfType<CellResult>();

            result.status.ShouldEqual(ResultStatus.error);
            result.cell.ShouldEqual("a");
            
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