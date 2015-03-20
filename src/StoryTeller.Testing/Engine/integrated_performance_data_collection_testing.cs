using System;
using System.Linq;
using FubuCore;
using NUnit.Framework;
using Shouldly;
using StoryTeller.Conversion;
using StoryTeller.Engine;
using StoryTeller.Engine.Batching;
using StoryTeller.Equivalence;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using StoryTeller.Samples;

namespace StoryTeller.Testing.Engine
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
            creation.Subject.ShouldBe("Creation");
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

        [Test]
        public void records_the_fixture_setup_and_teardown()
        {
            var records = theResults.Performance.Where(x => x.Type == "Fixture");
            records.Select(x => x.Subject)
                .ShouldHaveTheSameElementsAs("Sentence:SetUp", "Sentence:TearDown");
        }
    }

    public class SpecRunner<T> : IDisposable where T : ISystem, new()
    {
        private readonly T _system;
        private readonly FixtureLibrary _library;

        public SpecRunner()
        {
            _system = new T();
            var handling = new CellHandling(new EquivalenceChecker(), new Conversions(_system.ConversionProviders()));
            var task = FixtureLibrary.CreateForAppDomain(handling);
            task.Wait(15.Seconds());

            _library = task.Result;
        }

        public void Dispose()
        {
            _system.Dispose();
        }

        public readonly StopConditions StopConditions = new StopConditions();


        public SpecResults Execute(Specification specification)
        {
            var plan = specification.CreatePlan(_library);
            var timings = new Timings();
            timings.Start(specification);

            IExecutionContext execution = null;

            using (timings.Subject("Context", "Creation"))
            {
                execution = _system.CreateContext();
            }

            var context = new SpecContext(specification, timings, new NulloResultObserver(), StopConditions,
                execution.Services);

            context.Reporting.StartDebugListening();

            var executor = new SynchronousExecutor(context);
            plan.AcceptVisitor(executor);



            execution.Dispose();
            context.Dispose();

            return context.FinalizeResults(1);
        }
    }
}