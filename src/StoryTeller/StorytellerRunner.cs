using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Baseline;
using Baseline.Dates;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using StoryTeller.Results;

namespace StoryTeller
{
    public class StorytellerRunner : IDisposable
    {
        public static StorytellerRunner Basic()
        {
            return new StorytellerRunner(new NulloSystem());
        }

        public static StorytellerRunner For<T>() where T : ISystem, new()
        {
            return new StorytellerRunner(new T());
        }


        private readonly IList<BatchRecord> _records = new List<BatchRecord>();
        private readonly Task _warmup;

        public readonly StopConditions StopConditions = new StopConditions();
        private readonly RunningSystem _running;

        public StorytellerRunner(ISystem system, string specDirectory = null)
        {
            Debug.WriteLine("StorytellerRunner is starting up for system " + system);

            SpecDirectory = specDirectory ?? GuessSpecDirectory(system);

            _running = RunningSystem.Create(system);

            Hierarchy = HierarchyLoader.ReadHierarchy(SpecDirectory).ToHierarchy();

            _warmup = _running.System.Warmup();
        }

        public Hierarchy Hierarchy { get; }

        public string SpecDirectory { get; }

        public void Dispose()
        {
            _running.System.Dispose();
        }

        public static string GuessSpecDirectory(ISystem system)
        {
#if NET46
            var path = AppDomain.CurrentDomain.BaseDirectory;
#else
            var path = AppContext.BaseDirectory;
#endif

            var projectName = system.GetType().GetTypeInfo().Assembly.GetName().Name;
           

            var fileName = Path.GetFileName(path);
            while (fileName != projectName && !Directory.Exists(path.AppendPath("Specs")))
            {
                path = path.ParentDirectory();
                fileName = Path.GetFileName(path);
            }

            return HierarchyLoader.SelectSpecPath(path);
        }

        public SpecResults Run(string idOrPath)
        {
            idOrPath = idOrPath.Replace(" / ", "/");

            var specification = Hierarchy.Specifications.Has(idOrPath)
                ? Hierarchy.Specifications[idOrPath]
                : Hierarchy.Specifications.FirstOrDefault(x => x.path == idOrPath);

            if (specification == null)
                throw new ArgumentOutOfRangeException(nameof(idOrPath),
                    "Could not find a Specification with either id or path equal to " + idOrPath);

            return Run(specification);
        }

        public SpecResults Run(Specification specification)
        {
            var plan = specification.CreatePlan(_running.Fixtures);
            var timings = new Timings();

            _warmup.Wait(1.Minutes());

            timings.Start(specification);

            IExecutionContext execution = null;
            SpecContext context = null;

            try
            {
                using (timings.Record("Context", "Creation"))
                {
                    execution = _running.System.CreateContext();
                }

                context = new SpecContext(specification, timings, new NulloResultObserver(), StopConditions,
                    execution);

                execution.BeforeExecution(context);

                context.Reporting.As<Reporting>().StartDebugListening();

                SpecExecution.RunAll(context, plan);

                execution.AfterExecution(context);
            }
            finally
            {
                execution?.Dispose();
                context?.Dispose();
            }

            var results = context.FinalizeResults(1);

            _records.Add(new BatchRecord
            {
                results = results,
                specification = specification
            });

            return results;
        }

        public BatchRunResponse RunAll(TimeSpan timeout, string output = null, bool openResults = false)
        {
            var nodes = Hierarchy.Specifications.ToArray();
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
                fixtures = _running.Fixtures.Models.ToArray(),
                suite = "Interactive Execution",
                system = _running.System.GetType().FullName,
                records = _records.ToArray()
            };
            return response;
        }
    }
}