using Shouldly;
using StoryTeller.Engine;
using StoryTeller.Results;
using StoryTeller.Util;
using Xunit;

namespace StoryTeller.Testing.Results
{
    public class ReportPartBuilderTester
    {
        [Fact]
        public void adds_two_tags_to_the_document()
        {
            var doc = new HtmlDocument();
            var results = new BatchRunResponse();
            new ReportPartBuilder().Apply(doc, results);
            
            doc.Body.Children.Count.ShouldBe(2);
        }

        [Fact]
        public void adds_a_div_tag_with_id_batch_data()
        {
            var doc = new HtmlDocument();
            var results = new BatchRunResponse();
            new ReportPartBuilder().Apply(doc, results);
            
            doc.Body.Children[0].TagName().ShouldBe("div");
            doc.Body.Children[0].Id().ShouldBe("batch-data");
        }
        
        [Fact]
        public void batch_data_tag_is_not_empty()
        {
            var doc = new HtmlDocument();
            var results = new BatchRunResponse();
            new ReportPartBuilder().Apply(doc, results);
            
            doc.Body.Children[0].Text().ShouldNotBeNullOrEmpty();
        }
        
        [Fact]
        public void batch_data_tag_is_hidden()
        {
            var doc = new HtmlDocument();
            var results = new BatchRunResponse();
            new ReportPartBuilder().Apply(doc, results);

            doc.Body.Children[0].Style("display").ShouldBe("none");
        }
        
        [Fact]
        public void adds_a_div_tag_with_id_main()
        {
            var doc = new HtmlDocument();
            var results = new BatchRunResponse();
            new ReportPartBuilder().Apply(doc, results);
            
            doc.Body.Children[1].TagName().ShouldBe("div");
            doc.Body.Children[1].Id().ShouldBe("main");
        }
        
        [Fact]
        public void main_tag_is_empty()
        {
            var doc = new HtmlDocument();
            var results = new BatchRunResponse();
            new ReportPartBuilder().Apply(doc, results);
            
            doc.Body.Children[1].Text().ShouldBeNullOrEmpty();
        }
        
        [Fact]
        public void main_tag_is_not_hidden()
        {
            var doc = new HtmlDocument();
            var results = new BatchRunResponse();
            new ReportPartBuilder().Apply(doc, results);

            doc.Body.Children[1].HasStyle("display").ShouldBeFalse();
        }
    }
}
