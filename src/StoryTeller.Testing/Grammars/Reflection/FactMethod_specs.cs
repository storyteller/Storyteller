using FubuTestingSupport;
using NUnit.Framework;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.Testing.Grammars.Reflection
{
    [TestFixture]
    public class FactMethod_specs : SpecRunningContext
    {
        [Test]
        public void run_positive_and_negative()
        {
            execute(@"
=> JustTheFacts
* AlwaysTrue#1
* AlwaysFalse#2

");

            CountsShouldBe(1,1,0,0);
            Step("1").StatusWas(ResultStatus.success);
            Step("2").StatusWas(ResultStatus.failed);
        }

        [Test]
        public void spot_check_the_model()
        {
            var sentence = ModelFor<Sentence>("JustTheFacts", "AlwaysTrue");
            sentence.format.ShouldEqual("This is always true");
        }
    }

    public class JustTheFactsFixture : Fixture
    {
        [FormatAs("This is always true")]
        public bool AlwaysTrue()
        {
            return true;
        }

        public bool AlwaysFalse()
        {
            return false;
        }
    }
}