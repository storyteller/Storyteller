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

            values.Check<int>(context, "a", 1);

            context.AssertTheOnlyResultIs(CellResult.Success("a"));

        }

        [Test]
        public void sad_path_check_for_a_simple_equals_match()
        {
            var context = new RecordingSpecContext();
            var values = new StepValues();

            values.Store("a", 1);

            values.Check<int>(context, "a", 2);

            context.AssertTheOnlyResultIs(CellResult.Failure("a", "2"));
        }
    }
}