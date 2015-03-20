using System.Collections.Generic;
using NUnit.Framework;
using StoryTeller.Model;

namespace StoryTeller.Testing.Model
{
    [TestFixture]
    public class StepTester
    {
        [Test]
        public void find_step_values()
        {
            IDictionary<string, string> values = Step.ParseValues("a:1, b:2, c:3");
            values.Count.ShouldEqual(3);
            values["a"].ShouldEqual("1");
            values["b"].ShouldEqual("2");
            values["c"].ShouldEqual("3");
        }

        [Test]
        public void parse_values_works_just_fine_with_blank_or_null_values()
        {
            Step.ParseValues(null).ShouldNotBeNull();
            Step.ParseValues(string.Empty).ShouldNotBeNull();
        }

    }
}