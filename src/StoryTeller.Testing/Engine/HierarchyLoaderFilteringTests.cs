using System.Linq;
using Shouldly;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using Xunit;

namespace StoryTeller.Testing.Engine
{
    public class HierarchyLoaderFilteringTests
    {
        public HierarchyLoaderFilteringTests()
        {
            childSuite1 = new Suite
            {
                name = "Child Suite 1",
                Specifications = new[]
                {
                    new Specification {name = "Spec 1a", Lifecycle = Lifecycle.Acceptance, Tags = {"tag1", "tag2"}},
                    new Specification {name = "Spec 1b", Lifecycle = Lifecycle.Regression, Tags = {"tag2"}}
                }
            };

            childSuite2 = new Suite
            {
                name = "Child Suite 2",
                Specifications = new[]
                {
                    new Specification
                    {
                        name = "Spec 2a",
                        Lifecycle = Lifecycle.Acceptance,
                        Tags = {"tag1", "tag2", "tag3"}
                    },
                    new Specification {name = "Spec 2b", Lifecycle = Lifecycle.Regression, Tags = {"tag4"}}
                }
            };

            theTopSuite = new Suite
            {
                Specifications = new Specification[0]
            };

            theTopSuite.AddChildSuite(childSuite1);
            theTopSuite.AddChildSuite(childSuite2);
        }

        private readonly Suite theTopSuite;
        private readonly Suite childSuite1;
        private readonly Suite childSuite2;

        [Fact]
        public void default_filter_returns_all_specs()
        {
            HierarchyLoader.Filter(theTopSuite).ShouldHaveTheSameElementsAs(theTopSuite.GetAllSpecs().ToArray());
        }

        [Fact]
        public void filter_by_multiple_excluded_tags()
        {
            HierarchyLoader.Filter(theTopSuite, excludeTags: new[] { "tag1", "tag2" }).ShouldHaveTheSameElementsAs(childSuite2.Specifications[1]);
        }

        [Fact]
        public void filter_by_single_excluded_tag()
        {
            HierarchyLoader.Filter(theTopSuite, excludeTags: new[] { "tag1" }).ShouldHaveTheSameElementsAs(childSuite1.Specifications[1], childSuite2.Specifications[1]);
        }

        [Fact]
        public void filter_by_suite()
        {
            HierarchyLoader.Filter(theTopSuite, suiteOrSpec: childSuite1.name).ShouldHaveTheSameElementsAs(childSuite1.Specifications);
        }

        [Fact]
        public void filter_by_suite_and_lifecycle()
        {
            HierarchyLoader.Filter(theTopSuite, lifecycle: Lifecycle.Acceptance, suiteOrSpec: childSuite1.name).ShouldHaveTheSameElementsAs(childSuite1.Specifications[0]);
        }

        [Fact]
        public void filter_top_by_lifecycle()
        {
            HierarchyLoader.Filter(theTopSuite, lifecycle: Lifecycle.Regression).ShouldHaveTheSameElementsAs(childSuite1.Specifications[1], childSuite2.Specifications[1]);
        }

        [Fact]
        public void throw_when_filtering_by_suite_that_does_not_exist()
        {
            Should.Throw<SuiteOrSpecNotFoundException>(() => HierarchyLoader.Filter(theTopSuite, suiteOrSpec: "Doesn't Exist"));
        }
    }
}