using HtmlTags;
using StoryTeller.Model;
using StoryTeller.UserInterface.Editing.Scripts;

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
            Add("img").Attr("src", "data:image/png;base64," + Embeds.ResourceFileToBase64("downArrow.png"));
        }
    }
}