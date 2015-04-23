using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using FubuCore;
using StoryTeller.Engine;
using StoryTeller.Engine.Batching;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;

namespace StoryTeller
{
    public class SpecRunner<T> : IDisposable where T : ISystem, new()
    {
        public static string GuessSpecDirectory()
        {
            var path = AppDomain.CurrentDomain.BaseDirectory;
            while (Path.GetFileName(path).EqualsIgnoreCase("bin") || Path.GetFileName(path).EqualsIgnoreCase("debug") ||
                   Path.GetFileName(path).EqualsIgnoreCase("release"))
            {
                path = path.ParentDirectory();
            }

            return path.AppendPath("Specs");
        }

        private FixtureLibrary _library;
        private readonly T _system;
        private readonly Hierarchy _hierarchy;

        public SpecRunner(string specDirectory = null)
        {
            SpecDirectory = specDirectory ?? GuessSpecDirectory();

            _system = new T();
            var task = FixtureLibrary.CreateForAppDomain(_system.Start());
            _hierarchy = HierarchyLoader.ReadHierarchy(SpecDirectory).ToHierarchy();
            
            task.Wait();

            _library = task.Result;

        }

        public string SpecDirectory { get; private set; }

        public BatchRunResponse RunAll(TimeSpan timeout, string output = null, bool openResults = false)
        {
            IBatchObserver batchObserver = new BatchObserver();
            IExecutionObserver executionObserver = new NulloObserver();

            var executionMode = new BatchExecutionMode(batchObserver);
            var runner = new SpecRunner(executionMode, _system);

            BatchRunResponse response = null;

            using (var engine = new SpecificationEngine(_system, runner, executionObserver))
            {
                var nodes = _hierarchy.Nodes.ToArray();

                var task = batchObserver.MonitorBatch(nodes);
                nodes
                    .Select(SpecExecutionRequest.ForLocal)
                    .Each(x => engine.Enqueue(x));


                task.Wait(timeout);

                if (task.IsFaulted)
                {
                    throw task.Exception.Flatten();
                }

                response = new BatchRunResponse
                {
                    records = task.Result.ToArray(),
                    fixtures = _library.Models.ToArray()
                };
            }

            return response;
        }

        public void Dispose()
        {
            _system.Dispose();
        }
    }
}