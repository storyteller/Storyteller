using HtmlTags;
using StoryTeller.Model;
using StoryTeller.UserInterface.Editing.Scripts;

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
            Add("img").Attr("src", "data:image/png;base64," + Embeds.ResourceFileToBase64("upArrow.png"));
        }
    }
}