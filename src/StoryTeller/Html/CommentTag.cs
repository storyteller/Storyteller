using HtmlTags;
using StoryTeller.Domain;
using FubuCore;

namespace StoryTeller.Html
{
    public class TagsTag : HtmlTag
    {
        public TagsTag(Tags tags)
            : base("div")
        {
            AddClass("TestTags");
            Add("span").AddClass("tags-text").Text("Tags: " + tags.Text);
        }
    }

    public class CommentTag : HtmlTag
    {
        public CommentTag(Comment comment)
            : base("div")
        {
            AddClass("Comment");
            Add("span").AddClass("comment-text").Text(comment.Text);
        }
    }

    public class InvalidFixtureTag : ExceptionTag
    {
        public InvalidFixtureTag(string fixtureName)
            : base("Invalid fixture '{0}'".ToFormat(fixtureName))
        {
        }
    }

    public class InvalidGrammarTag : ExceptionTag
    {
        public InvalidGrammarTag(string grammarKey)
            : base("Invalid grammar '{0}'".ToFormat(grammarKey))
        {
        }
    }
}