﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Reflection;
using Baseline;
using StoryTeller.Engine;
using Xunit;
using StoryTeller.Engine.Batching;
using StoryTeller.Messages;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using StoryTeller.Remotes.Messaging;
using StoryTeller.Results;
using StoryTeller.Samples;

namespace StoryTeller.Testing
{
    public class record_data_for_client_testing : IDisposable
    {
        private GrammarSystem theSystem;

        public record_data_for_client_testing()
        {
            theSystem = new GrammarSystem();
        }

        public void Dispose()
        {
            theSystem.Dispose();
        }


        //[Fact]
        public void what_are_the_client_message_names()
        {
            var types = typeof (ClientMessage).GetTypeInfo().Assembly.GetExportedTypes()
                .Where(x => x.IsConcrete() && x.CanBeCastTo<ClientMessage>()).Select(x => x.Name).OrderBy(x => x).ToArray();

            types.Each(x => Debug.WriteLine(x));
        }

        //[Fact]
        public void record_and_save_file()
        {
            var data = new ClientData();
            
            var library = TestingContext.Library;

            
            var hierarchy = TestingContext.Hierarchy;

            hierarchy.GetAllSpecs().Each(x => x.path.ShouldNotBeNull());

            hierarchy.GetAllSpecs().Each(spec =>
            {
                data.specs.Add(spec.id, spec);

                using (var execution = theSystem.CreateContext())
                {
                    var observer = new RecordingObserver(data.results);
                    using (var context = new SpecContext(spec, null, observer, new StopConditions(), execution)
                        )
                    {
                        context.Reporting.As<Reporting>().StartDebugListening();
                        var plan = spec.CreatePlan(library);

                        var gatherer = new LineStepGatherer(context);
                        plan.AcceptVisitor(gatherer);

                        foreach (var line in gatherer.Lines)
                        {
                            line.Execute(context);
                        }

                        observer.SpecExecutionFinished(spec, context.FinalizeResults(1));
                    }
                    
                    

                }
            });

            data.specs.Values.Each(x => x.path.ShouldNotBeNull());

            data.hierarchy = hierarchy;
            data.fixtures = library.Models.Where(x => x.implementation.Contains("StoryTeller.Samples")).ToArray();

            var json = JsonSerialization.ToIndentedJson(data);

            var clientPath = TestingContext.FindClientFolder();

            new FileSystem().WriteStringToFile(clientPath.AppendPath("all-spec-data.js"), "module.exports = " + json);
            Debug.WriteLine("Wrote file to all-spec-data.js");
        }
    }

    public class RecordingObserver : IResultObserver
    {
        private readonly IDictionary<string, SpecExecutionCompleted> _completed;
        public readonly IList<ClientMessage> Messages = new List<ClientMessage>();

        public RecordingObserver(IDictionary<string, SpecExecutionCompleted> completed)
        {
            _completed = completed;
        }

        public void Handle<T>(T message) where T : IResultMessage
        {
            Messages.Add(message.As<ClientMessage>());
        }

        public void SpecExecutionFinished(Specification specification, SpecResults results)
        {
            var completed = new SpecExecutionCompleted(specification.id, results, specification);
            _completed.Add(specification.id, completed);

        }
    }

    public class ClientData
    {
        public FixtureModel[] fixtures;
        public readonly Dictionary<string, Specification> specs = new Dictionary<string, Specification>();
        public Suite hierarchy;

        public readonly Dictionary<string, SpecExecutionCompleted> results = new Dictionary<string, SpecExecutionCompleted>(); 
    }
}