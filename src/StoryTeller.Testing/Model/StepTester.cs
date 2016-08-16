using System.Collections.Generic;
using Xunit;
using Shouldly;
using StoryTeller.Model;

namespace StoryTeller.Testing.Model
{
    
    public class StepTester
    {
        [Fact]
        public void find_step_values()
        {
            IDictionary<string, string> values = Step.ParseValues("a:1, b:2, c:3");
            values.Count.ShouldBe(3);
            values["a"].ShouldBe("1");
            values["b"].ShouldBe("2");
            values["c"].ShouldBe("3");
        }

        [Fact]
        public void parse_values_works_just_fine_with_blank_or_null_values()
        {
            Step.ParseValues(null).ShouldNotBeNull();
            Step.ParseValues(string.Empty).ShouldNotBeNull();
        }

    }
}