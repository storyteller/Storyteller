using HtmlTags;
using StoryTeller.Model;

namespace StoryTeller.UserInterface.Editing.HTML
{
    public class RemoveLinkTag : LinkTag
    {
        public RemoveLinkTag()
            : this(new FixtureStructure())
        {
        }

        public RemoveLinkTag(FixtureStructure fixture)
            : base(fixture.IsSingleSelection() ? "change" : "delete", "#", GrammarConstants.DELETE_STEP)
        {
        }
    }
}