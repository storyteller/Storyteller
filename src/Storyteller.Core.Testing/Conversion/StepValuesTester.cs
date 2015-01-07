using System;
using System.Linq;
using FubuTestingSupport;
using NUnit.Framework;
using Storyteller.Core.Conversion;
using Storyteller.Core.Results;

namespace Storyteller.Core.Testing.Conversion
{
    [TestFixture]
    public class StepValuesTester
    {
        [Test]
        public void store_and_retrieve()
        {
            var values = new StepValues();

            values.Store("a", 1);
            values.Get("a").ShouldEqual(1);
        }

        [Test]
        public void happy_check_for_a_simple_equals_match()
        {
            var context = new RecordingSpecContext();
            var values = new StepValues();

            values.Store("a", 1);

            values.Check(context, "a", 1);

            context.AssertTheOnlyResultIs(CellResult.Success("a"));

        }

        [Test]
        public void sad_path_check_for_a_simple_equals_match()
        {
            var context = new RecordingSpecContext();
            var values = new StepValues();

            values.Store("a", 1);

            values.Check(context, "a", 2);

            context.AssertTheOnlyResultIs(CellResult.Failure("a", "2"));
        }

        [Test]
        public void process_delayed_runtime_converters_successfully()
        {
            var context = new RecordingSpecContext();
            var values = new StepValues();

            values.RegisterDelayedConversion("a", "1", new StubRuntimeConverter("1", 1));
            values.RegisterDelayedConversion("b", "2", new StubRuntimeConverter("2", 2));
            values.RegisterDelayedConversion("c", "3", new StubRuntimeConverter("3", 3));

            values.DoDelayedConversions(context);

            values.Get("a").ShouldEqual(1);
            values.Get("b").ShouldEqual(2);
            values.Get("c").ShouldEqual(3);

            values.Errors.Any().ShouldBeFalse();
        }

        [Test]
        public void process_delayed_runtime_convertor_that_fails_with_exception()
        {
            var context = new RecordingSpecContext();
            var values = new StepValues();

            values.RegisterDelayedConversion("a", "1", new StubRuntimeConverter("1", new NotImplementedException()));

            values.DoDelayedConversions(context);

            var result = values.Errors.Single().ShouldBeOfType<CellResult>();
            result.status.ShouldEqual(ResultStatus.error);
            result.cell.ShouldEqual("a");
            result.error.ShouldContain("NotImplementedException");
        }

        [Test]
        public void process_delayed_runtime_convertor_that_fails_with_a_null()
        {
            var context = new RecordingSpecContext();
            var values = new StepValues();

            values.RegisterDelayedConversion("a", "1", new StubRuntimeConverter("1", null));

            values.DoDelayedConversions(context);

            var result = values.Errors.Single().ShouldBeOfType<CellResult>();
            result.status.ShouldEqual(ResultStatus.error);
            result.cell.ShouldEqual("a");
            result.error.ShouldContain("The converter was not able to create a value. Check the formatting.");
        }
    }

    public class StubRuntimeConverter : IRuntimeConvertor
    {
        private readonly string _raw;
        private readonly object _returnedValue;

        public StubRuntimeConverter(string raw, object returnedValue)
        {
            _raw = raw;
            _returnedValue = returnedValue;
        }

        public object Convert(string raw, ISpecContext context)
        {
            raw.ShouldEqual(_raw);

            var ex = _returnedValue as Exception;
            if (ex != null) throw ex;

            return _returnedValue;
        }
    }
}