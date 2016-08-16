using System;
using System.Linq;
using Xunit;
using Shouldly;
using StoryTeller.Conversion;
using StoryTeller.Results;

namespace StoryTeller.Testing.Conversion
{
    
    public class StepValuesTester
    {
        [Fact]
        public void store_and_retrieve()
        {
            var values = new StepValues("1");

            values.Store("a", 1);
            values.Get("a").ShouldBe(1);
        }

        [Fact]
        public void apply_ordering()
        {
            var values = new StepValues[]
            {
                new StepValues(Guid.NewGuid().ToString()),
                new StepValues(Guid.NewGuid().ToString()),
                new StepValues(Guid.NewGuid().ToString()),
                new StepValues(Guid.NewGuid().ToString()),
                new StepValues(Guid.NewGuid().ToString()),
                new StepValues(Guid.NewGuid().ToString())
            };

            values.ApplyOrdering();

            for (var i = 0; i < values.Length; i++)
            {
                values[i].Order.ShouldBe(i + 1);
            }

        }

        [Fact]
        public void process_delayed_runtime_converters_successfully()
        {
            var context = SpecContext.ForTesting();
            var values = new StepValues("1");

            values.RegisterDelayedConversion("a", "1", new StubRuntimeConverter("1", 1));
            values.RegisterDelayedConversion("b", "2", new StubRuntimeConverter("2", 2));
            values.RegisterDelayedConversion("c", "3", new StubRuntimeConverter("3", 3));

            values.DoDelayedConversions(context);

            values.Get("a").ShouldBe(1);
            values.Get("b").ShouldBe(2);
            values.Get("c").ShouldBe(3);

            ShouldBeTestExtensions.ShouldBe(values.Errors.Any(), false);
        }

        [Fact]
        public void process_delayed_runtime_convertor_that_fails_with_exception()
        {
            var context = SpecContext.ForTesting();
            var values = new StepValues("1");

            values.RegisterDelayedConversion("a", "1", new StubRuntimeConverter("1", new NotImplementedException()));

            values.DoDelayedConversions(context);

            var result = values.Errors.Single().ShouldBeOfType<CellResult>();
            result.Status.ShouldBe(ResultStatus.error);
            result.cell.ShouldBe("a");
            result.error.ShouldContain("NotImplementedException");
        }

        [Fact]
        public void process_delayed_runtime_convertor_that_fails_with_a_null()
        {
            var context = SpecContext.ForTesting();
            var values = new StepValues("1");

            values.RegisterDelayedConversion("a", "1", new StubRuntimeConverter("1", null));

            values.DoDelayedConversions(context);

            var result = values.Errors.Single().ShouldBeOfType<CellResult>();
            result.Status.ShouldBe(ResultStatus.error);
            result.cell.ShouldBe("a");
            result.error.ShouldContain("The converter was not able to create a value. Check the formatting.");
        }
    }

    public class StubRuntimeConverter : IRuntimeConverter
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
            raw.ShouldBe(_raw);

            var ex = _returnedValue as Exception;
            if (ex != null) throw ex;

            return _returnedValue;
        }

        public bool Matches(Type type)
        {
            throw new NotImplementedException();
        }
    }
}