using System;
using Baseline;
using Shouldly;
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

        [Fact]
        public void to_missing_code_if_nothing_is_missing()
        {
            var fixture = new FixtureModel("Something") {IsMissing = false};

            fixture.missingCode.ShouldBe(FixtureModel.FullyImplementedMessage);
        }

        [Fact]
        public void to_missing_code_with_the_fixture_itself_being_missing()
        {
            var fixture = new FixtureModel("Something") { IsMissing = true };

            fixture.missingCode.ShouldNotBe(FixtureModel.FullyImplementedMessage);

            fixture.missingCode.ShouldContain("public class SomethingFixture");
        }

        [Fact]
        public void create_a_fixture_from_a_key()
        {
            var fixture = FixtureModel.BuildFromKeyOrTitle("Something");
            fixture.key.ShouldBe("Something");
            fixture.title.ShouldBe("Something");
        }

        [Fact]
        public void derive_the_title_for_a_complex_key()
        {
            var fixture = FixtureModel.BuildFromKeyOrTitle("SomethingElse");
            fixture.key.ShouldBe("SomethingElse");
            fixture.title.ShouldBe("Something Else");
        }

        [Fact]
        public void derive_the_key_from_a_title()
        {
            var fixture = FixtureModel.BuildFromKeyOrTitle("Going to the store");

            fixture.title.ShouldBe("Going to the store");
            fixture.key.ShouldBe("GoingToTheStore");
        }


        [Fact]
        public void derive_the_key_from_a_title_2()
        {
            var fixture = FixtureModel.BuildFromKeyOrTitle("Going to the store: Walmart");

            fixture.title.ShouldBe("Going to the store: Walmart");
            fixture.key.ShouldBe("GoingToTheStoreWalmart");
        }

        [Fact]
        public void derive_the_key_from_a_title_3()
        {
            var fixture = FixtureModel.BuildFromKeyOrTitle("Going to the store - Walmart");

            fixture.title.ShouldBe("Going to the store - Walmart");
            fixture.key.ShouldBe("GoingToTheStoreWalmart");
        }

    }

    
}