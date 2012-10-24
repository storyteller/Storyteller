using HtmlTags;

namespace StoryTeller.UserInterface.Editing.HTML
{
    using HtmlTags.Extended.TagBuilders;

    public class TagsTag : HtmlTag
    {
        public TagsTag()
            : base("table")
        {
            AddClass(GrammarConstants.TAGS);
            AddClass(GrammarConstants.STEP);
            MetaData(GrammarConstants.KEY, GrammarConstants.TAGS);

            var cell = Add("tr/td");

            cell.Span(x =>
                          {
                              x.AddClass(GrammarConstants.TAGS_TEXT_HOLDER);
                              x.Span(s => s.AddClass(GrammarConstants.TAGS_TEXT));
                              x.ActionLink("edit", GrammarConstants.TAGS_EDITOR);
                          });

            cell.Span(x =>
                          {
                              x.AddClass(GrammarConstants.TAGS_EDITOR_HOLDER);
                              x.Add("textarea").AddClass("editor").Attr("rows", "2");
                              x.ActionLink("close", GrammarConstants.TAGS_CLOSER);
                          });

            cell.Append(new RemoveLinkTag());
        }
    }
}