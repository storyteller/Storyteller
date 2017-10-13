using System;
using System.Linq;
using Baseline;
using Shouldly;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using Xunit;

namespace StoryTeller.Testing.Engine
{
    public class IntegratedHierarchyLoaderFilteringTests
    {
        private readonly Suite theHierarchy;

        public IntegratedHierarchyLoaderFilteringTests()
        {
            var directory = TestingContext.FindParallelDirectory("Storyteller.Samples").AppendPath("Specs");
            theHierarchy = HierarchyLoader.ReadHierarchy(directory);
        }

        [Fact]
        public void filter_by_found_suite()
        {
            HierarchyLoader.Filter(theHierarchy, Lifecycle.Any, "Embedded")
                .Single().path.ShouldBe("Embedded/Embeds");
        }

        [Fact]
        public void filter_by_spec_path()
        {
            HierarchyLoader.Filter(theHierarchy, Lifecycle.Any, "Embedded/Embeds")
                .Single().path.ShouldBe("Embedded/Embeds");
        }
        
        [Fact]
        public void filter_by_spec_path_with_spaces()
        {
            HierarchyLoader.Filter(theHierarchy, Lifecycle.Any, "Embedded / Embeds")
                .Single().path.ShouldBe("Embedded/Embeds");
        }

        [Fact]
        public void filter_by_including_tags()
        {
            HierarchyLoader.Filter(theHierarchy, Lifecycle.Any, includeTags:new string[]{"check"})
                .Select(x => x.path)
                .ShouldHaveTheSameElementsAs("General/Check properties", "Paragraphs/Composite with Errors", "Sentences/Currying");
        }
        
        [Fact]
        public void filter_by_excluding_tags()
        {
            var paths = HierarchyLoader.Filter(theHierarchy, Lifecycle.Any, excludeTags:new string[]{"check"})
                .Select(x => x.path).ToArray();
                
                
            paths.ShouldNotContain("General/Check properties");
            paths.ShouldNotContain("Paragraphs/Composite with Errors");
            paths.ShouldNotContain("Sentences/Currying");
        }
        
        [Fact]
        public void filter_by_excluding_multiple_tags()
        {
            var paths = HierarchyLoader.Filter(theHierarchy, Lifecycle.Any, excludeTags:new string[]{"check", "do"})
                .Select(x => x.path).ToArray();
                
                
            paths.ShouldNotContain("General/Check properties");
            paths.ShouldNotContain("Paragraphs/Composite with Errors");
            paths.ShouldNotContain("Sentences/Currying");
            
            // has do tag
            paths.ShouldNotContain("General/Check properties");
        }
        
        [Fact]
        public void filter_by_including_multiple_tags()
        {
            var specs = HierarchyLoader.Filter(theHierarchy, Lifecycle.Any, includeTags:new string[]{"check", "do"})
                .Select(x => x.path).ToArray();
            
            specs.Length.ShouldBe(5);
            
            specs.ShouldContain("General/Check properties");
            specs.ShouldContain("General/Occasionally Times Out");

        }
    }
}