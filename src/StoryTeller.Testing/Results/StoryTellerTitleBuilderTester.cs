using Shouldly;
using StoryTeller.Engine;
using StoryTeller.Results;
using StoryTeller.Util;
using Xunit;

namespace StoryTeller.Testing.Results
{
    public class StoryTellerTitleBuilderTester
    {
        [Fact]
        public void title_property_is_not_empty()
        {
            var doc = new HtmlDocument();
            var results = new BatchRunResponse();
            new StoryTellerTitleBuilder().Apply(doc, results);
            
            doc.Title.ShouldNotBeNullOrEmpty();
        }
        
        [Fact]
        public void title_property_contains_the_system_name()
        {
            var doc = new HtmlDocument();
            var results = new BatchRunResponse() { system = "test_system"};
            new StoryTellerTitleBuilder().Apply(doc, results);
            
            doc.Title.ShouldContain("test_system");
        }
        
        [Fact]
        public void title_property_contains_the_suite_name()
        {
            var doc = new HtmlDocument();
            var results = new BatchRunResponse() { suite = "test_suite"};
            new StoryTellerTitleBuilder().Apply(doc, results);
            
            doc.Title.ShouldContain("test_suite");
        }
    }
}
