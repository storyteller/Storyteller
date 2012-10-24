using HtmlTags;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Model;

namespace StoryTeller.Html
{
    public class ParagraphTag : HtmlTag
    {
        private readonly Paragraph _paragraph;
        private readonly IStep _step;

        public ParagraphTag(Paragraph paragraph, IStep step) : base("div")
        {
            _paragraph = paragraph;
            _step = step;

            AddClass("paragraph");
            AddClass(paragraph.Style.ToString());
            

            if (paragraph.Style == EmbedStyle.TitledAndIndented)
            {
                Add("div").AddClass("paragraph-title").Text(paragraph.Label).Title(paragraph.Name);
            }
        }
    }
}