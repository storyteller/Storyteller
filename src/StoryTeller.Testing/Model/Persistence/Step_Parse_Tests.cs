using System.Linq;
using Shouldly;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using Xunit;

namespace StoryTeller.Testing.Model.Persistence
{
    public class Step_Parse_Tests
    {
        [Fact]
        public void parse_step_with_no_values()
        {
            var step = Step.Parse("|> MyKey");
            step.Key.ShouldBe("MyKey");

            step.Values.Any().ShouldBeFalse();
        }

        [Fact]
        public void parse_step_with_key_values()
        {
            var step = Step.Parse("|> MyKey foo=ABC, bar=B, baz=C");
            step.Key.ShouldBe("MyKey");
            step.Values.Count.ShouldBe(3);

            step.Values["foo"].ShouldBe("ABC");
            step.Values["bar"].ShouldBe("B");
            step.Values["baz"].ShouldBe("C");
        }

        [Fact]
        public void parse_step_with_staged_values()
        {
            var step = Step.Parse("|> MyKey ABC, B, C");
            step.Key.ShouldBe("MyKey");
            step.StagedValues.ShouldHaveTheSameElementsAs("ABC", "B", "C");
        }

        [Fact]
        public void parse_step_with_staged_values_2()
        {
            var step = Step.Parse("|> MyKey ABC,B,C");
            step.Key.ShouldBe("MyKey");
            step.StagedValues.ShouldHaveTheSameElementsAs("ABC", "B", "C");
        }

        [Fact]
        public void parse_step_with_key_values_messed_up_spacing()
        {
            var step = Step.Parse("    |> MyKey   foo=ABC,  bar=B,   baz=C");
            step.Key.ShouldBe("MyKey");
            step.Values.Count.ShouldBe(3);

            step.Values["foo"].ShouldBe("ABC");
            step.Values["bar"].ShouldBe("B");
            step.Values["baz"].ShouldBe("C");
        }


    }
}