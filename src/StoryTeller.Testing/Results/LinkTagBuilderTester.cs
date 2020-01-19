using System;
using Shouldly;
using StoryTeller.Engine;
using StoryTeller.Results;
using StoryTeller.Util;
using Xunit;

namespace StoryTeller.Testing.Results
{
    public class LinkTagBuilderTester
    {
        [Fact]
        public void creates_a_link_tag()
        {
            var builder = new LinkTagBuilder(new Uri("/test", UriKind.Relative));
            builder.TagName().ShouldBe("link");
        }

        [Fact]
        public void sets_the_tag_href_attribute_from_uri()
        {
            var builder = new LinkTagBuilder(new Uri("/test", UriKind.Relative));
            builder.Attr("href").ShouldBe("/test");
        }

        [Fact]
        public void set_the_link_relationship_to_stylesheet_by_default()
        {
            var builder = new LinkTagBuilder(new Uri("/test", UriKind.Relative));
            builder.Attr("rel").ShouldBe("stylesheet");
        }
        
        [Fact]
        public void set_the_link_relationship_to_passed_in_value()
        {
            var builder = new LinkTagBuilder(new Uri("/test", UriKind.Relative), "rel_test");
            builder.Attr("rel").ShouldBe("rel_test");
        }

        [Fact]
        public void the_style_tag_will_attach_itself_to_the_document_head()
        {
            var doc = new HtmlDocument();
            var results = new BatchRunResponse();
            var builder = new LinkTagBuilder(new Uri("/test", UriKind.Relative));

            builder.Apply(doc, results);
            
            doc.Head.Children.Count.ShouldBe(2);
            doc.Head.Children[1].TagName().ShouldBe("link");
        }
    }
}
