using Baseline;
using StoryTeller.Model;
using Xunit;

namespace StoryTeller.Testing.Model
{
    public class FixtureModelTester
    {
        [Fact]
        public void can_mark_the_missing_grammars()
        {
            var system = new FixtureModel("something");
            system.AddGrammar(new Sentence {key = "Go1", format = "Go One"});

            var overrides = new FixtureModel("something");
            overrides.AddGrammar(new Sentence { key = "Go2", format = "Go Two" });

            var combined = system.ApplyOverrides(overrides).As<FixtureModel>();

            combined.FindGrammar("Go1").IsMissing.ShouldBeFalse();
            combined.FindGrammar("Go2").IsMissing.ShouldBeTrue();
        }
    }
}