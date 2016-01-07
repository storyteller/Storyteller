using System.Collections.Generic;
using System.Linq;
using NUnit.Framework;
using Shouldly;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;

namespace StoryTeller.Testing.Engine
{
    [TestFixture]
    public class BatchRunRequestTester
    {
        private Suite theTopSuite;
        private Suite childSuite1;
        private Suite childSuite2;
        private BatchRunRequest theRequest;

        [SetUp]
        public void SetUp()
        {
            childSuite1 = new Suite
            {
                name = "Child Suite 1",
                suites = new Suite[0],
                Specifications = new[]
                {
                    new Specification { name = "Spec 1a", Lifecycle = Lifecycle.Acceptance, Tags = { "tag1", "tag2" }},
                    new Specification { name = "Spec 1b", Lifecycle = Lifecycle.Regression, Tags = { "tag2" } }
                }
            };

            childSuite2 = new Suite
            {
                name = "Child Suite 2",
                suites = new Suite[0],
                Specifications = new[]
                {
                    new Specification { name = "Spec 2a", Lifecycle = Lifecycle.Acceptance, Tags = { "tag1", "tag2", "tag3" } },
                    new Specification { name = "Spec 2b", Lifecycle = Lifecycle.Regression, Tags = { "tag4" } }
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

            theRequest = new BatchRunRequest { Lifecycle = Lifecycle.Any };
        }

        [Test]
        public void default_filter_returns_all_specs()
        {
            theFilteredSpecs.ShouldHaveTheSameElementsAs(theTopSuite.GetAllSpecs().ToArray());
        }

        [Test]
        public void filter_top_by_lifecycle()
        {
            theRequest.Lifecycle = Lifecycle.Regression;
            theFilteredSpecs.ShouldHaveTheSameElementsAs(childSuite1.Specifications[1], childSuite2.Specifications[1]);
        }

        [Test]
        public void filter_by_suite()
        {
            theRequest.Suite = childSuite1.name;
            theFilteredSpecs.ShouldHaveTheSameElementsAs(childSuite1.Specifications);
        }

        [Test]
        public void throw_when_filtering_by_suite_that_does_not_exist()
        {
            theRequest.Suite = "Doesn't Exist";
            Should.Throw<SuiteNotFoundException>(() => theRequest.Filter(theTopSuite));
        }

        [Test]
        public void filter_by_suite_and_lifecycle()
        {
            theRequest.Lifecycle = Lifecycle.Acceptance;
            theRequest.Suite = childSuite1.name;
            theFilteredSpecs.ShouldHaveTheSameElementsAs(childSuite1.Specifications[0]);
        }

        [Test]
        public void filter_by_single_excluded_tag()
        {
            theRequest.Tags = new[] {"tag1"};
            theFilteredSpecs.ShouldHaveTheSameElementsAs(childSuite1.Specifications[1], childSuite2.Specifications[1]);
        }

        [Test]
        public void filter_by_multiple_excluded_tags()
        {
            theRequest.Tags = new[] { "tag1", "tag2" };
            theFilteredSpecs.ShouldHaveTheSameElementsAs(childSuite2.Specifications[1]);
        }

        private IEnumerable<Specification> theFilteredSpecs
        {
            get { return theRequest.Filter(theTopSuite); }
        }
    }
}
