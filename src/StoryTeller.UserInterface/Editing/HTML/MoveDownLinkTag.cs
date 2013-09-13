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
            base("", "#", GrammarConstants.MOVEDOWN_STEP)
        {
            Add("img").Attr("src", "Images/downArrow.png");
        }
    }
}