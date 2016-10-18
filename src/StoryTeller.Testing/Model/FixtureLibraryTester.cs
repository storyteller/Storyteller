using Shouldly;
using StoryTeller.Model;
using Xunit;

namespace StoryTeller.Testing.Model
{
    public class FixtureLibraryTester
    {
        [Fact]
        public void copies_from_overrides_when_not_in_original()
        {
            const string key = "a key";

            var lib = new FixtureLibrary();

            var overrides = new FixtureLibrary();
            overrides.Models[key] = new FixtureModel(key);

            var result = lib.ApplyOverrides(overrides);

            result.Models.Count.ShouldBe(1);

            var fixture = result.Models[key];
            ReferenceEquals(fixture, overrides.Models[key]).ShouldBeFalse();
            fixture.key.ShouldBe(key);
        }

        [Fact]
        public void overrides_original_title()
        {
            const string key = "a key";

            var lib = new FixtureLibrary();
            var original = new FixtureModel(key);
            original.title = "A title";
            original.implementation = "some implementation";
            lib.Models[key] = original;

            var overrides = new FixtureLibrary();
            var overriden = new FixtureModel(key);
            overriden.title = "A new title";
            overrides.Models[key] = overriden;

            var result = lib.ApplyOverrides(overrides);

            result.Models.Count.ShouldBe(1);

            var fixture = result.Models[key];
            ReferenceEquals(fixture, overrides.Models[key]).ShouldBeFalse();
            fixture.title.ShouldBe(overriden.title);
            fixture.implementation.ShouldBe(original.implementation);
        }

        [Fact]
        public void copies_grammars()
        {
            const string fixtureKey = "a key";

            var lib = new FixtureLibrary();
            var original = new FixtureModel(fixtureKey);
            lib.Models[fixtureKey] = original;

            original.AddGrammar(new Sentence { key = "sentence", format = "a format"});

            var overrides = new FixtureLibrary();
            var overriden = new FixtureModel(fixtureKey);
            overrides.Models[fixtureKey] = overriden;

            var result = lib.ApplyOverrides(overrides);

            result.Models.Count.ShouldBe(1);

            var fixture = result.Models[fixtureKey];
            ReferenceEquals(fixture, overrides.Models[fixtureKey]).ShouldBeFalse();
            fixture.key.ShouldBe(fixtureKey);

            fixture.grammars.Length.ShouldBe(1);

            var sentence = fixture.grammars[0] as Sentence;
            sentence.key.ShouldBe("sentence");
            sentence.format.ShouldBe("a format");
        }
    }
}
