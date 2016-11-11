using Shouldly;
using StoryTeller.Model;
using Xunit;

namespace StoryTeller.Testing.Model
{
    public class EmbeddedSectionTester
    {
        [Fact]
        public void override_title()
        {
            var section1 = new EmbeddedSection
            {
                key = "Something",
                title = "Do something",
                fixture = new FixtureModel("Something")
            };

            var @override = new EmbeddedSection
            {
                key = "Something",
                title = "Do something different",
                fixture = new FixtureModel("Something")
            };

            section1.ApplyOverrides(@override)
                .ShouldBeOfType<EmbeddedSection>()
                .title.ShouldBe(@override.title);
        }
    }
}