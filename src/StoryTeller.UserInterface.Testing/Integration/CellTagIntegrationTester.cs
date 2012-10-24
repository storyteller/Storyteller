using NUnit.Framework;
using StoryTeller.Model;
using StoryTeller.Samples;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Editing.HTML;

namespace StoryTeller.UserInterface.Testing.Integration
{
    public class CellTagIntegrationTester
    {
        [Test]
        public void integrated_test_for_the_default_value_coming_all_the_way_through()
        {
            var fixture = new MathFixture();
            var sentence = fixture["StartWith"].ToStructure(new FixtureLibrary()).ShouldBeOfType<Sentence>();
            var cell = sentence.Cells[0].ToInputCell();
            var buildTag = new CellBuilderLibrary().BuildTag(cell);

            buildTag.MetaData("defaultValue").ShouldEqual(cell.DefaultValue);
        }
    }
}