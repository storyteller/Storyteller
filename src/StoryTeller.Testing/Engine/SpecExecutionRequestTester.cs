using System.Collections.Generic;
using System.Linq;
using FubuCore;
using NUnit.Framework;
using Rhino.Mocks;
using Shouldly;
using StoryTeller.Engine;
using StoryTeller.Messages;
using StoryTeller.Model.Persistence;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Testing.Engine
{
    [TestFixture]
    public class SpecExecutionRequestTester
    {
        private readonly SpecNode theSpec;
        private RuntimeErrorListener listener;

        public SpecExecutionRequestTester()
        {
            var path = ".".ToFullPath().ParentDirectory().ParentDirectory().ParentDirectory()
                .AppendPath("Storyteller.Samples", "Specs", "General", "Check properties.xml");

            theSpec = HierarchyLoader.ReadSpecNode(path);
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
            request.ReadXml();
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

            request.ReadXml();

            request.Specification.ShouldNotBeNull();
            request.Specification.Children.Count.ShouldBeGreaterThan(0);

            request.IsCancelled.ShouldBe(false);
        }

        [Test]
        public void read_xml_sad_path()
        {
            var request = SpecExecutionRequest.For(new SpecNode { Filename = "nonexistent.xml" });

            EventAggregator.Messaging.AddListener(listener);

            request.ReadXml();

            request.IsCancelled.ShouldBe(true);
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
            request.ReadXml();
            request.CreatePlan(TestingContext.Library);

            request.IsCancelled.ShouldBe(false);

            request.Plan.ShouldNotBeNull();
        }

        [Test]
        public void create_plan_sad_path_smoke_test()
        {
            var request = SpecExecutionRequest.For(theSpec);

            // No specification, so it blows up
            //request.ReadXml();
            request.CreatePlan(TestingContext.Library);

            request.IsCancelled.ShouldBe(true);
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