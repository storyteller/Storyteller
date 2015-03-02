using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using FubuTestingSupport;
using NUnit.Framework;
using Storyteller.Core.Engine;
using Storyteller.Core.Model.Persistence;
using StoryTeller.Samples;

namespace Storyteller.Core.Testing.Engine
{
    [TestFixture]
    public class integrated_performance_data_collection_testing
    {
        private SpecRunner<GrammarSystem> _runner;
        private Suite _hierarchy;
        private SpecResults theResults;

        [TestFixtureSetUp]
        public void SetUp()
        {
            _runner = new SpecRunner<GrammarSystem>();
            _hierarchy = TestingContext.Hierarchy;

            theResults = runSpec("sentence4");
        }

        [TestFixtureTearDown]
        public void TearDown()
        {
            _runner.Dispose();
        }

        private SpecResults runSpec(string id)
        {
            var node = _hierarchy.ToHierarchy().Nodes[id];
            var specification = XmlReader.ReadFromFile(node.Filename);

            return _runner.Execute(specification);
        }

        [Test]
        public void measures_the_context_creation()
        {
            var creation = theResults.Performance.Single(x => x.Type == "Context");
            creation.Subject.ShouldEqual("Creation");
        }

        [Test]
        public void measures_the_specification_time_itself()
        {
            var record = theResults.Performance.Single(x => x.Type == "Specification");
            record.ShouldNotBeNull();
        }

        [Test]
        public void records_each_grammar()
        {
            var records = theResults.Performance.Where(x => x.Type == "Grammar");
            records.Select(x => x.Subject)
                .ShouldHaveTheSameElementsAs("StartWithTheNumber", "StartWithTheNumber", "MultiplyThenAdd", "Subtract", "TheValueShouldBe", "TheSumOf", "ThisLineIsAlwaysTrue", "ThisLineIsAlwaysFalse", "ThisLineAlwaysThrowsExceptions");
        }
    }
}