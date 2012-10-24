using HtmlTags;
using HtmlTags.Extended.TagBuilders;

namespace StoryTeller.UserInterface.Editing.HTML
{
    public class CommentTag : HtmlTag
    {
        public CommentTag()
            : base("table")
        {
            AddClass(GrammarConstants.COMMENT);
            AddClass(GrammarConstants.STEP);
            MetaData(GrammarConstants.KEY, GrammarConstants.COMMENT);

            var cell = Add("tr/td");

            cell.Span(x =>
            {
                x.AddClass(GrammarConstants.COMMENT_TEXT_HOLDER);
                x.Span(s => s.AddClass(GrammarConstants.COMMENT_TEXT));
                x.ActionLink("edit", GrammarConstants.COMMENT_EDITOR);
            });

            cell.Span(x =>
            {
                x.AddClass(GrammarConstants.COMMENT_EDITOR_HOLDER);
                x.Add("textarea").AddClass("editor").Attr("rows", "4");
                x.ActionLink("close", GrammarConstants.COMMENT_CLOSER);
            });

            cell.Append(new RemoveLinkTag());
        }
    }
}