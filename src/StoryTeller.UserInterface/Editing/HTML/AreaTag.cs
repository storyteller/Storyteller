using System.Security.Cryptography.X509Certificates;
using HtmlTags;
using StoryTeller.Domain;
using StoryTeller.Model;

namespace StoryTeller.UserInterface.Editing.HTML
{
    public class AreaTag : HtmlTag
    {
        private readonly HtmlTag _container;

        public AreaTag() : base("table")
        {
            _container = Add("tbody/tr/td");
        }

        public AreaTag(string title) : this()
        {
            var sectionTitle = _container.Add("div").AddClass("section-title");
            sectionTitle.Add<MoveDownLinkTag>();
            sectionTitle.Add<MoveUpLinkTag>();
            sectionTitle.Add("span").Text(title);
            sectionTitle.Add("a").AddClass("deleteStep").Text("delete").Attr("href", "#");
        }

        public HtmlTag Container
        {
            get { return _container; }
        }
    }
}