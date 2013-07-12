using HtmlTags;
using StoryTeller.Model;

namespace StoryTeller.UserInterface.Editing.HTML
{
    public class MoveDownLinkTag : LinkTag
    {
        public MoveDownLinkTag() : this(new FixtureStructure())
        {
        }

        public MoveDownLinkTag(FixtureStructure fixture) :
            base("Move Down", "#", GrammarConstants.MOVEDOWN_STEP)
        {
        }
    }
}