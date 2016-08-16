using Xunit;
using Shouldly;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.Testing.Grammars.Reflection
{
    
    public class FactMethod_specs : SpecRunningContext
    {
        [Fact]
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

        [Fact]
        public void spot_check_the_model()
        {
            var sentence = ModelFor<Sentence>("JustTheFacts", "AlwaysTrue");
            sentence.format.ShouldBe("This is always true");
        }

        [Fact]
        public void paragraph_of_facts()
        {
            execute(@"
=> JustTheFacts
* FactParagraph#1

");



            CountsShouldBe(3, 0, 0, 0);
            
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

        [FormatAs("Fact1 should be true")]
        public bool Fact1()
        {
            return true;
        }

        public bool Fact2()
        {
            return true;
        }

        public bool Fact3()
        {
            return true;
        }

        public IGrammar FactParagraph()
        {
            return Paragraph("Just the facts", _ =>
            {
                _ += this["Fact1"];
                _ += this["Fact2"];
                _ += this["Fact3"];
            });
        }
    }
}