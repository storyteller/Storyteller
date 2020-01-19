using System.Linq;
using Shouldly;
using StoryTeller.Engine;
using StoryTeller.Results;
using StoryTeller.Util;
using Xunit;

namespace StoryTeller.Testing.Results
{
    public class DefaultHtmlDocumentBuilderTester
    {

        [Fact]
        public void additional_builders_can_be_added()
        {
            var builder = new DefaultHtmlDocumentBuilder();
                builder.Add(new ScriptTagBuilder(string.Empty));
                
            builder.Get<IDocumentPartBuilder>().Count().ShouldBe(5);
        }
        
        [Fact]
        public void defines_four_parts()
        {
            var builder = new DefaultHtmlDocumentBuilder();
            builder.Get<IDocumentPartBuilder>().Count().ShouldBe(4);
        }
        
        [Fact]
        public void defines_the_title()
        {
            var builder = new DefaultHtmlDocumentBuilder();
            builder.Get<StoryTellerTitleBuilder>().ShouldNotBeEmpty();
        }
        
        [Fact]
        public void defines_the_javascript()
        {
            var builder = new DefaultHtmlDocumentBuilder();
            builder.Get<ScriptTagBuilder>().ShouldNotBeEmpty();
        }
        
        
        [Fact]
        public void defines_the_styles()
        {
            var builder = new DefaultHtmlDocumentBuilder();
            builder.Get<StyleTagBuilder>().ShouldNotBeEmpty();
        }
        
        
        [Fact]
        public void defines_the_report_content()
        {
            var builder = new DefaultHtmlDocumentBuilder();
            builder.Get<ReportPartBuilder>().ShouldNotBeEmpty();
        }

        [Fact]
        public void building_the_document_results_in_html_document()
        {
            var response = new BatchRunResponse();
            var builder = new DefaultHtmlDocumentBuilder();
            builder.Build(response).ShouldBeOfType<HtmlDocument>();
        }
        
        [Fact]
        public void result_has_set_title()
        {
            var response = new BatchRunResponse() { system = "system", suite = "suite"};
            var builder = new DefaultHtmlDocumentBuilder();
            var result = builder.Build(response);
            
            result.Head.Children[0].TagName().ShouldBe("title");
            result.Head.Children[0].Text().ShouldBe("Storyteller Batch Results for system: suite");
        }
        
        [Fact]
        public void result_has_set_the_style()
        {
            var response = new BatchRunResponse() { system = "system", suite = "suite"};
            var builder = new DefaultHtmlDocumentBuilder();
            var result = builder.Build(response);
            
            result.Head.Children[1].TagName().ShouldBe("style");
            result.Head.Children[1].Text().ShouldNotBeEmpty();
        }
        
        [Fact]
        public void result_has_set_the_report()
        {
            var response = new BatchRunResponse() { system = "system", suite = "suite"};
            var builder = new DefaultHtmlDocumentBuilder();
            var result = builder.Build(response);
            
            result.Body.Children[0].TagName().ShouldBe("div");
            result.Body.Children[0].Text().ShouldNotBeEmpty();
            
            result.Body.Children[1].TagName().ShouldBe("div");
            result.Body.Children[1].Text().ShouldBeEmpty();
        }
        
        [Fact]
        public void result_has_set_the_script()
        {
            var response = new BatchRunResponse() { system = "system", suite = "suite"};
            var builder = new DefaultHtmlDocumentBuilder();
            var result = builder.Build(response);
            
            result.Body.Children[2].TagName().ShouldBe("script");
            result.Body.Children[2].Text().ShouldNotBeEmpty();
        }

    }
}
