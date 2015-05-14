using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using FubuCore;
using HtmlTags;
using StoryTeller.Engine;
using StoryTeller.Engine.Batching;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using StoryTeller.Results;

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

        private readonly FixtureLibrary _library;
        private readonly T _system;
        private readonly Hierarchy _hierarchy;

        private readonly IList<BatchRecord> _records = new List<BatchRecord>();

        public SpecRunner(string specDirectory = null)
        {
            SpecDirectory = specDirectory ?? GuessSpecDirectory();

            _system = new T();
            var task = FixtureLibrary.CreateForAppDomain(_system.Start());
            _hierarchy = HierarchyLoader.ReadHierarchy(SpecDirectory).ToHierarchy();
            
            task.Wait();

            _library = task.Result;

        }

        public Hierarchy Hierarchy
        {
            get { return _hierarchy; }
        }

        public string SpecDirectory { get; private set; }

        public SpecResults Run(string idOrPath)
        {
            var specification = _hierarchy.Specifications.Has(idOrPath)
                ? _hierarchy.Specifications[idOrPath]
                : _hierarchy.Specifications.FirstOrDefault(x => x.path == idOrPath);

            if (specification == null) throw new ArgumentOutOfRangeException("idOrPath","Could not find a Specification with either id or path equal to " + idOrPath);

            return Run(specification);
        }

        public SpecResults Run(Specification specification)
        {
            specification.ReadBody();

            var results = Execute(specification);

            _records.Add(new BatchRecord
            {
                results = results,
                specification = specification
            });

            return results;
        }

        public readonly StopConditions StopConditions = new StopConditions();

        public SpecResults Execute(Specification specification)
        {
            var plan = specification.CreatePlan(_library);
            var timings = new Timings();
            timings.Start(specification);

            IExecutionContext execution = null;
            ISpecContext context = null;

            try
            {
                using (timings.Subject("Context", "Creation"))
                {
                    execution = _system.CreateContext();
                }

                context = new SpecContext(specification, timings, new NulloResultObserver(), StopConditions,
                    execution);

                context.Reporting.StartDebugListening();

                var executor = new SynchronousExecutor(context);
                plan.AcceptVisitor(executor);
            }
            finally
            {
                if (execution != null) execution.Dispose();
                if (context != null) context.Dispose();
            }


            return context.FinalizeResults(1);
        }

        public BatchRunResponse RunAll(TimeSpan timeout, string output = null, bool openResults = false)
        {
            var nodes = _hierarchy.Specifications.ToArray();
            nodes.Each(x => Run(x));

            return FullResults();
        }

        public HtmlDocument GenerateResultsDocument()
        {
            var response = FullResults();

            return BatchResultsWriter.BuildResults(response);
        }

        public BatchRunResponse FullResults()
        {
            var response = new BatchRunResponse
            {
                fixtures = _library.Models.ToArray(),
                suite = "Interactive Execution",
                system = typeof (T).FullName,
                records = _records.ToArray()
            };
            return response;
        }

        public void Dispose()
        {
            _system.Dispose();
        }
    }
}