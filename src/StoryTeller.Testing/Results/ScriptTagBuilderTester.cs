using System;
using Shouldly;
using StoryTeller.Engine;
using StoryTeller.Results;
using StoryTeller.Util;
using Xunit;

namespace StoryTeller.Testing.Results
{
    public class ScriptTagBuilderTester
    {
        [Fact]
        public void creates_a_script_tag()
        {
            var builder = new ScriptTagBuilder(string.Empty);
            builder.TagName().ShouldBe("script");
        }

        [Fact]
        public void loaded_script_is_wrapped_with_double_blank_lines()
        {
            var builder = new ScriptTagBuilder(string.Empty);
            builder.Text().ShouldBe("\n\n\n\n");
        }
        
        [Fact]
        public void sets_the_tag_content_from_a_string()
        {
            var builder = new ScriptTagBuilder("test");
            builder.Text().ShouldBe("\n\ntest\n\n");
        }
        
        [Fact]
        public void sets_the_tag_content_from_a_loader()
        {
            var loader = new VirtualFileLoader("test");
            var builder = new ScriptTagBuilder(loader);
            builder.Text().ShouldBe("\n\ntest\n\n");
        }
        
        [Fact]
        public void sets_the_tag_src_from_a_uri()
        {
            var builder = new ScriptTagBuilder(new Uri("/test", UriKind.Relative));
            builder.Attr("src").ShouldBe("/test");
        }

        [Fact]
        public void content_script_tags_dont_create_src_attribute()
        {
            var builder = new ScriptTagBuilder("test");
            builder.Attr("src").ShouldBeNullOrEmpty();
        }

        [Fact]
        public void uri_script_tags_dont_create_text_content()
        {
            var builder = new ScriptTagBuilder(new Uri("/test", UriKind.Relative));
            builder.Text().ShouldBeNullOrEmpty();
        }

        [Fact]
        public void language_is_set_to_javascript_by_default()
        {
            var builder = new ScriptTagBuilder(string.Empty);
            builder.Attr("language").ShouldBe("javascript");
        }
        
        [Fact]
        public void language_is_set_to_passed_in_value()
        {
            var builder = new ScriptTagBuilder(string.Empty, "test_language");
            builder.Attr("language").ShouldBe("test_language");
        }
        
        [Fact]
        public void the_script_tag_will_attach_itself_to_the_document_body()
        {
            var doc = new HtmlDocument();
            var results = new BatchRunResponse();
            new ScriptTagBuilder(string.Empty).Apply(doc, results);
            
            doc.Body.Children.Count.ShouldBe(1);
            doc.Body.Children[0].TagName().ShouldBe("script");
        }
    }
}
