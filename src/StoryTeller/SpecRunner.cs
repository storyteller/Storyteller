using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Baseline;
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
            var path = AppContext.BaseDirectory;
            while (Path.GetFileName(path).EqualsIgnoreCase("bin") || Path.GetFileName(path).EqualsIgnoreCase("debug") ||
                   Path.GetFileName(path).EqualsIgnoreCase("release"))
            {
                path = path.ParentDirectory();
            }

            return HierarchyLoader.SelectSpecPath(path);
        }

        private readonly FixtureLibrary _library;
        private readonly T _system;
        private readonly Hierarchy _hierarchy;

        private readonly IList<BatchRecord> _records = new List<BatchRecord>();

        public SpecRunner(string specDirectory = null)
        {
            Debug.WriteLine("SpecRunner is starting up for system " + typeof(T).FullName);
#if NET46
            Debug.WriteLine("using {0} as the configuration file", AppDomain.CurrentDomain.SetupInformation.ConfigurationFile);
#endif

            SpecDirectory = specDirectory ?? GuessSpecDirectory();

            _system = new T();
            _library = FixtureLibrary.CreateForAppDomain(_system.Start());
            _hierarchy = HierarchyLoader.ReadHierarchy(SpecDirectory).ToHierarchy();

            _warmup = _system.Warmup();

        }

        public Hierarchy Hierarchy => _hierarchy;

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
        private readonly Task _warmup;

        public SpecResults Execute(Specification specification)
        {
            
            var plan = specification.CreatePlan(_library);
            var timings = new Timings();

            _warmup.Wait(1.Minutes());

            timings.Start(specification);

            IExecutionContext execution = null;
            SpecContext context = null;

            try
            {
                using (timings.Subject("Context", "Creation"))
                {
                    execution = _system.CreateContext();
                }

                context = new SpecContext(specification, timings, new NulloResultObserver(), StopConditions,
                    execution);

                context.Reporting.As<Reporting>().StartDebugListening();

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

        public void WriteResultsDocument(string file)
        {
            var response = FullResults();
            var document = BatchResultsWriter.BuildResults(response);
            document.WriteToFile(file);
        }

        public void OpenResultsInBrowser()
        {
            var response = FullResults();
            var document = BatchResultsWriter.BuildResults(response);
            document.OpenInBrowser();
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