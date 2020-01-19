using Shouldly;
using StoryTeller.Engine;
using StoryTeller.Results;
using StoryTeller.Util;
using Xunit;

namespace StoryTeller.Testing.Results
{
    public class StyleTagBuilderTester
    {
        [Fact]
        public void creates_a_style_tag()
        {
            var builder = new StyleTagBuilder(string.Empty);
            builder.TagName().ShouldBe("style");
        }

        [Fact]
        public void sets_the_tag_content_from_a_string()
        {
            var builder = new StyleTagBuilder("test");
            builder.Text().ShouldBe("test");
        }
        
        [Fact]
        public void sets_the_tag_content_from_a_loader()
        {
            var loader = new VirtualFileLoader("test");
            var builder = new StyleTagBuilder(loader);
            builder.Text().ShouldBe("test");
        }

        [Fact]
        public void the_style_tag_will_attach_itself_to_the_document_head()
        {
            var doc = new HtmlDocument();
            var results = new BatchRunResponse();
            var builder = new StyleTagBuilder(string.Empty);

            builder.Apply(doc, results);
            
            doc.Head.Children.Count.ShouldBe(2);
            doc.Head.Children[1].TagName().ShouldBe("style");
        }
    }
}
