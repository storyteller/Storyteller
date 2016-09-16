using System.Collections.Generic;
using System.Linq;
using FubuCore;
using NUnit.Framework;
using Rhino.Mocks;
using Shouldly;
using StoryTeller.Engine;
using StoryTeller.Messages;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Testing.Engine
{
    [TestFixture]
    public class SpecExecutionRequestTester
    {
        private readonly Specification theSpec;
        private RuntimeErrorListener listener;

        public SpecExecutionRequestTester()
        {
            var path = ".".ToFullPath().ParentDirectory().ParentDirectory().ParentDirectory()
                .AppendPath("Storyteller.Samples", "Specs", "General", "Check properties.xml");

            theSpec = HierarchyLoader.ReadSpecHeader(path);
        }

        [SetUp]
        public void SetUp()
        {
            listener = new RuntimeErrorListener();
        }

        [TearDown]
        public void TearDown()
        {
            EventAggregator.Messaging.RemoveListener(listener);
        }

        [Test]
        public void finishing_a_spec()
        {
            var action = MockRepository.GenerateMock<IResultObserver>();

            var request = new SpecExecutionRequest(theSpec, action);

            request.CreatePlan(TestingContext.Library);
            request.Plan.Attempts = 3;

            var results = new SpecResults();
            request.SpecExecutionFinished(results);

            action.AssertWasCalled(x => x.SpecExecutionFinished(theSpec, results));
        }

        [Test]
        public void read_xml_happy_path()
        {
            var request = SpecExecutionRequest.For(theSpec);

            request.Specification.ShouldNotBeNull();
            request.Specification.Children.Count.ShouldBeGreaterThan(0);

            request.IsCancelled.ShouldBe(false);
        }


        [Test]
        public void cancel_cancels_the_request()
        {
            var request = SpecExecutionRequest.For(theSpec);
            request.IsCancelled.ShouldBe(false);

            request.Cancel();

            request.IsCancelled.ShouldBe(true);
        }


        [Test]
        public void create_plan_happy_path_smoke_test()
        {
            var request = SpecExecutionRequest.For(theSpec);
            request.CreatePlan(TestingContext.Library);

            request.IsCancelled.ShouldBe(false);

            request.Plan.ShouldNotBeNull();
        }

        public class RuntimeErrorListener : IListener<RuntimeError>
        {
            public readonly IList<RuntimeError> Errors = new List<RuntimeError>();

            public void Receive(RuntimeError message)
            {
                Errors.Add(message);
            }
        }
    }
}