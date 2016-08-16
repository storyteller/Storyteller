using System.Collections.Generic;
using System.Linq;
using Shouldly;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using Xunit;

namespace StoryTeller.Testing.Engine
{
    public class BatchRunRequestTester
    {
        public BatchRunRequestTester()
        {
            childSuite1 = new Suite
            {
                name = "Child Suite 1",
                suites = new Suite[0],
                Specifications = new[]
                {
                    new Specification {name = "Spec 1a", Lifecycle = Lifecycle.Acceptance, Tags = {"tag1", "tag2"}},
                    new Specification {name = "Spec 1b", Lifecycle = Lifecycle.Regression, Tags = {"tag2"}}
                }
            };

            childSuite2 = new Suite
            {
                name = "Child Suite 2",
                suites = new Suite[0],
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
                Specifications = new Specification[0],
                suites = new[]
                {
                    childSuite1, childSuite2
                }
            };

            theRequest = new BatchRunRequest {Lifecycle = Lifecycle.Any};
        }

        private readonly Suite theTopSuite;
        private readonly Suite childSuite1;
        private readonly Suite childSuite2;
        private readonly BatchRunRequest theRequest;

        private IEnumerable<Specification> theFilteredSpecs
        {
            get { return theRequest.Filter(theTopSuite); }
        }


        [Fact]
        public void default_filter_returns_all_specs()
        {
            theFilteredSpecs.ShouldHaveTheSameElementsAs(theTopSuite.GetAllSpecs().ToArray());
        }

        [Fact]
        public void filter_by_multiple_excluded_tags()
        {
            theRequest.Tags = new[] {"tag1", "tag2"};
            theFilteredSpecs.ShouldHaveTheSameElementsAs(childSuite2.Specifications[1]);
        }

        [Fact]
        public void filter_by_single_excluded_tag()
        {
            theRequest.Tags = new[] {"tag1"};
            theFilteredSpecs.ShouldHaveTheSameElementsAs(childSuite1.Specifications[1], childSuite2.Specifications[1]);
        }

        [Fact]
        public void filter_by_suite()
        {
            theRequest.Suite = childSuite1.name;
            theFilteredSpecs.ShouldHaveTheSameElementsAs(childSuite1.Specifications);
        }

        [Fact]
        public void filter_by_suite_and_lifecycle()
        {
            theRequest.Lifecycle = Lifecycle.Acceptance;
            theRequest.Suite = childSuite1.name;
            theFilteredSpecs.ShouldHaveTheSameElementsAs(childSuite1.Specifications[0]);
        }

        [Fact]
        public void filter_top_by_lifecycle()
        {
            theRequest.Lifecycle = Lifecycle.Regression;
            theFilteredSpecs.ShouldHaveTheSameElementsAs(childSuite1.Specifications[1], childSuite2.Specifications[1]);
        }

        [Fact]
        public void throw_when_filtering_by_suite_that_does_not_exist()
        {
            theRequest.Suite = "Doesn't Exist";
            Should.Throw<SuiteNotFoundException>(() => theRequest.Filter(theTopSuite));
        }
    }
}