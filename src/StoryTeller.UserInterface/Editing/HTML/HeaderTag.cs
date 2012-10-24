using HtmlTags;

namespace StoryTeller.UserInterface.Editing.HTML
{
    public class HeaderTag : HtmlTag
    {
        private readonly HtmlTag _title;

        public HeaderTag()
            : base("div")
        {
            AddClass(GrammarConstants.SECTION_HEADER);
            _title = Add("div").AddClass(GrammarConstants.SECTION_TITLE);
        }

        public HeaderTag Titled(string title)
        {
            _title.Text(title);
            return this;
        }

        public string Titled()
        {
            return _title.Text();
        }

        public void AddRemoveLink(RemoveLinkTag link)
        {
            _title.Append(link);
        }
    }
}