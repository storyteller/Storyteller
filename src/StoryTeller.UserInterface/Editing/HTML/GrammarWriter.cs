using System.Collections.Generic;
using HtmlTags;
using StoryTeller.Model;

namespace StoryTeller.UserInterface.Editing.HTML
{
    public class GrammarWriter
    {
        private readonly FixtureLibrary _library;
        private FixtureTag _fixtureTag;
        private HtmlTag _top;

        public GrammarWriter(FixtureLibrary library)
        {
            _library = library;
        }

        public HtmlTag Build()
        {
            _top = new DivTag(GrammarConstants.FIXTURE_SELECTOR).Hide();

            FixtureStructure topFixture = _library.BuildTopLevelGraph();
            var topFixtureNode = writeFixture(topFixture);
            topFixtureNode.Children.Each(x => x.AddClass("top-node"));

            _library.ActiveFixtures.Each(f => writeFixture(f));

            return _top;
        }

        private FixtureTag writeFixture(FixtureStructure fixture)
        {
            _fixtureTag = new FixtureTag(fixture);
            _top.Append(_fixtureTag);

            return _fixtureTag;
        }
    }
}