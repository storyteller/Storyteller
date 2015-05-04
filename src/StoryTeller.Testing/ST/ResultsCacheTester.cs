using System.Linq;
using NUnit.Framework;
using Shouldly;
using ST.Client;
using StoryTeller.Messages;
using StoryTeller.Model;

namespace StoryTeller.Testing.ST
{
    [TestFixture]
    public class ResultsCacheTester
    {
        private ResultsCache theCache;

        [SetUp]
        public void SetUp()
        {
            theCache = new ResultsCache();
        }

        [Test]
        public void stores_the_last_five_per_spec()
        {
            theCache.Store(new SpecExecutionCompleted("foo", new SpecResults(), new Specification()));
            theCache.Store(new SpecExecutionCompleted("foo", new SpecResults(), new Specification()));
            theCache.Store(new SpecExecutionCompleted("foo", new SpecResults(), new Specification()));
            theCache.Store(new SpecExecutionCompleted("foo", new SpecResults(), new Specification()));
            theCache.Store(new SpecExecutionCompleted("foo", new SpecResults(), new Specification()));
            theCache.Store(new SpecExecutionCompleted("foo", new SpecResults(), new Specification()));
            theCache.Store(new SpecExecutionCompleted("foo", new SpecResults(), new Specification()));
            theCache.Store(new SpecExecutionCompleted("foo", new SpecResults(), new Specification()));
            theCache.Store(new SpecExecutionCompleted("foo", new SpecResults(), new Specification()));
            theCache.Store(new SpecExecutionCompleted("foo", new SpecResults(), new Specification()));
            theCache.Store(new SpecExecutionCompleted("foo", new SpecResults(), new Specification()));

            theCache.ResultsFor("foo").Count().ShouldBe(5);
        }

        [Test]
        public void retrieve_results_for_a_spec()
        {
            var result1 = new SpecExecutionCompleted("foo", new SpecResults(), new Specification());
            theCache.Store(result1);
            var result2 = new SpecExecutionCompleted("bar", new SpecResults(), new Specification());
            theCache.Store(result2);
            var result3 = new SpecExecutionCompleted("foo", new SpecResults(), new Specification());
            theCache.Store(result3);
            var result4 = new SpecExecutionCompleted("bar", new SpecResults(), new Specification());
            theCache.Store(result4);
            var result5 = new SpecExecutionCompleted("foo", new SpecResults(), new Specification());
            theCache.Store(result5);
            var result6 = new SpecExecutionCompleted("bar", new SpecResults(), new Specification());
            theCache.Store(result6);

            theCache.ResultsFor("foo").ShouldHaveTheSameElementsAs(result5, result3, result1);
            theCache.ResultsFor("bar").ShouldHaveTheSameElementsAs(result6, result4, result2);

        }

        [Test]
        public void last_counts()
        {
            var result1 = new SpecExecutionCompleted("foo", new SpecResults(), new Specification());
            theCache.Store(result1);
            var result2 = new SpecExecutionCompleted("bar", new SpecResults(), new Specification());
            theCache.Store(result2);
            var result3 = new SpecExecutionCompleted("foo", new SpecResults{Counts = new Counts()}, new Specification());
            theCache.Store(result3);

            theCache.LastResultFor("foo")
                .ShouldBe(result3);
        }
    }
}