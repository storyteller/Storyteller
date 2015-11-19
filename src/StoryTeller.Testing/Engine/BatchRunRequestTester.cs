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
                specs = new[]
                {
                    new Specification { name = "Spec 1a", Lifecycle = Lifecycle.Acceptance },
                    new Specification { name = "Spec 1b", Lifecycle = Lifecycle.Regression }
                }
            };

            childSuite2 = new Suite
            {
                name = "Child Suite 2",
                suites = new Suite[0],
                specs = new[]
                {
                    new Specification { name = "Spec 2a", Lifecycle = Lifecycle.Acceptance },
                    new Specification { name = "Spec 2b", Lifecycle = Lifecycle.Regression }
                }
            };

            theTopSuite = new Suite
            {
                specs = new Specification[0],
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
            theFilteredSpecs.ShouldHaveTheSameElementsAs(childSuite1.specs[1], childSuite2.specs[1]);
        }

        [Test]
        public void filter_by_suite()
        {
            theRequest.Suite = childSuite1.name;
            theFilteredSpecs.ShouldHaveTheSameElementsAs(childSuite1.specs);
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
            theFilteredSpecs.ShouldHaveTheSameElementsAs(childSuite1.specs[0]);
        }

        private IEnumerable<Specification> theFilteredSpecs
        {
            get { return theRequest.Filter(theTopSuite); }
        }
    }
}
