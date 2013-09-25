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
            : base("", "#", GrammarConstants.MOVEUP_STEP)
        {
            Add("img").Attr("src", "Images/upArrow.png");
        }
    }
}