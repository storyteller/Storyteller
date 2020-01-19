using System.Linq;
using Shouldly;
using StoryTeller.Results;
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
        
    }
}
