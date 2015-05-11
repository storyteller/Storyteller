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
        public void get_all_results()
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

            var all = theCache.AllResults().ToArray();
            all.Count().ShouldBe(6);
            all.ShouldContain(result1);
            all.ShouldContain(result2);
            all.ShouldContain(result3);
            all.ShouldContain(result4);
            all.ShouldContain(result5);
            all.ShouldContain(result6);
        }

        [Test, Explicit("Too flakey in batches. No earthly idea why")]
        public void last_counts()
        {
            var c = new ResultsCache();

            var result1 = new SpecExecutionCompleted("foo", new SpecResults(), new Specification());
            c.Store(result1);
            var result2 = new SpecExecutionCompleted("bar", new SpecResults(), new Specification());
            c.Store(result2);
            var result3 = new SpecExecutionCompleted("foo", new SpecResults{Counts = new Counts()}, new Specification());
            c.Store(result3);

            c.LastResultFor("foo")
                .ShouldBe(result3);
        }
    }
}