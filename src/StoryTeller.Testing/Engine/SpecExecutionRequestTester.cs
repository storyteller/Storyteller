using System;
using System.Collections.Generic;
using System.Linq;
using Baseline;
using Xunit;
using NSubstitute;
using Shouldly;
using StoryTeller.Engine;
using StoryTeller.Messages;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Testing.Engine
{
    
    public class SpecExecutionRequestTester : IDisposable
    {
        private readonly Specification theSpec;
        private readonly RuntimeErrorListener listener;

        public SpecExecutionRequestTester()
        {
            var path = ".".ToFullPath().ParentDirectory().ParentDirectory().ParentDirectory()
                .AppendPath("Storyteller.Samples", "Specs", "General", "Check properties.xml");

            theSpec = HierarchyLoader.ReadSpecHeader(path);

            listener = new RuntimeErrorListener();
        }

        public void Dispose()
        {
            EventAggregator.Messaging.RemoveListener(listener);
        }


        [Fact]
        public void finishing_a_spec()
        {
            var action = Substitute.For<IResultObserver>();

            var request = new SpecExecutionRequest(theSpec, action);
            request.ReadXml();
            request.CreatePlan(TestingContext.Library);
            request.Plan.Attempts = 3;

            var results = new SpecResults();
            request.SpecExecutionFinished(results);

            action.Received().SpecExecutionFinished(theSpec, results);
        }

        [Fact]
        public void read_xml_happy_path()
        {
            var request = SpecExecutionRequest.For(theSpec);

            request.ReadXml();

            request.Specification.ShouldNotBeNull();
            request.Specification.Children.Count.ShouldBeGreaterThan(0);

            request.IsCancelled.ShouldBe(false);
        }

        [Fact]
        public void read_xml_sad_path()
        {
            var request = SpecExecutionRequest.For(new Specification()
            {
                Filename = "nonexistent.xml",
                SpecType = SpecType.header
            });
            

            EventAggregator.Messaging.AddListener(listener);

            request.ReadXml();

            request.IsCancelled.ShouldBe(true);
        }

        [Fact]
        public void cancel_cancels_the_request()
        {
            var request = SpecExecutionRequest.For(theSpec);
            request.IsCancelled.ShouldBe(false);

            request.Cancel();

            request.IsCancelled.ShouldBe(true);
        }


        [Fact]
        public void create_plan_happy_path_smoke_test()
        {
            var request = SpecExecutionRequest.For(theSpec);
            request.ReadXml();
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