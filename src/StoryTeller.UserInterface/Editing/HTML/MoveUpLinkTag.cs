using HtmlTags;
using StoryTeller.Model;

namespace StoryTeller.UserInterface.Editing.HTML
{
    public class MoveUpLinkTag : LinkTag
    {
        public MoveUpLinkTag()
            : this(new FixtureStructure())
        {
        }

        public MoveUpLinkTag(FixtureStructure fixture)
            : base("Move Up", "#", GrammarConstants.MOVEUP_STEP)
        {
        }
    }
}