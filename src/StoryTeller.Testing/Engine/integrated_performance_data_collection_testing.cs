using System;
using System.Linq;
using FubuCore;
using Shouldly;
using StoryTeller.Engine;
using StoryTeller.Engine.Batching;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using StoryTeller.Results;
using StoryTeller.Samples;
using Xunit;

namespace StoryTeller.Testing.Engine
{
    public class integrated_performance_data_collection_testing : IDisposable
    {
        private readonly SpecRunner<GrammarSystem> _runner;
        private readonly Suite _hierarchy;
        private readonly SpecResults theResults;

        public integrated_performance_data_collection_testing()
        {
            _runner = new SpecRunner<GrammarSystem>();
            _hierarchy = TestingContext.Hierarchy;

            theResults = runSpec("sentence4");
        }

        public void Dispose()
        {
            _runner.Dispose();
        }

        private SpecResults runSpec(string id)
        {
            var node = _hierarchy.ToHierarchy().Specifications[id];
            var specification = XmlReader.ReadFromFile(node.Filename);

            return _runner.Execute(specification);
        }

        [Fact]
        public void measures_the_context_creation()
        {
            var creation = theResults.Performance.Single(x => x.Type == "Context");
            creation.Subject.ShouldBe("Creation");
        }

        [Fact]
        public void measures_the_specification_time_itself()
        {
            var record = theResults.Performance.Single(x => x.Type == "Specification");
            record.ShouldNotBeNull();
        }

        [Fact]
        public void records_each_grammar()
        {
            var records = theResults.Performance.Where(x => x.Type == "Grammar");
            records.Select(x => x.Subject)
                .ShouldHaveTheSameElementsAs("StartWithTheNumber", "StartWithTheNumber", "MultiplyThenAdd", "Subtract",
                    "TheValueShouldBe", "TheSumOf", "ThisLineIsAlwaysTrue", "ThisLineIsAlwaysFalse",
                    "ThisLineAlwaysThrowsExceptions");
        }

        [Fact]
        public void records_the_fixture_setup_and_teardown()
        {
            var records = theResults.Performance.Where(x => x.Type == "Fixture");
            records.Select(x => x.Subject)
                .ShouldHaveTheSameElementsAs("Sentence:SetUp", "Sentence:TearDown");
        }
    }

    public class SpecRunner<T> : IDisposable where T : ISystem, new()
    {
        private readonly FixtureLibrary _library;
        private readonly T _system;

        public readonly StopConditions StopConditions = new StopConditions();

        public SpecRunner()
        {
            _system = new T();

            _library = FixtureLibrary.CreateForAppDomain(_system.Start());
        }

        public void Dispose()
        {
            _system.Dispose();
        }


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
                execution);

            context.Reporting.As<Reporting>().StartDebugListening();

            var executor = new SynchronousExecutor(context);
            plan.AcceptVisitor(executor);


            execution.Dispose();
            context.Dispose();

            return context.FinalizeResults(1);
        }
    }
}