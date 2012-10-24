using System.Collections.Generic;
using NUnit.Framework;
using StoryTeller.Engine;
using StoryTeller.Engine.Sets;

namespace StoryTeller.Testing.Engine
{
    [TestFixture]
    public class StepResultsTester
    {
        [SetUp]
        public void SetUp()
        {
        }

        [Test]
        public void store_and_retrieve_a_result()
        {
            var result = new List<SetRow>();
            var results = new StepResults();

            results.SetResult(result, "key");


            results.GetResult<List<SetRow>>("key").ShouldBeTheSameAs(result);
        }
    }
}