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

        [TestFixtureSetUp]
        public void SetUp()
        {
            _runner = new SpecRunner<GrammarSystem>();
            _hierarchy = TestingContext.Hierarchy;
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
            var results = runSpec("sentence1");

            var creation = results.Performance.Single(x => x.Type == "Context");
            creation.Subject.ShouldEqual("Creation");
        }
    }
}