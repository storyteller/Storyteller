using HtmlTags;

namespace StoryTeller.Html
{
    public class TableContainerTag : HtmlTag
    {
        public TableContainerTag() : base("div")
        {
            
        }

        public void Add(string title, HtmlTag bodyTag)
        {
            

            Add("div").Text(title).AddClass("table-title");
            Add("div").AddClass("table-container").AddClass("table-cell").Append(bodyTag);
        }
    }
}