using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using StoryTeller.Results;

namespace StoryTeller.NewEngine
{
    public class AdhocRunner : ISpecificationObserver, IDisposable
    {
        public Hierarchy Hierarchy { get; }
        public FixtureLibrary Fixtures { get; }
        private readonly SystemUnderTest _system;

        internal AdhocRunner(SystemUnderTest system, Hierarchy hierarchy)
        {
            Hierarchy = hierarchy;
            _system = system;
            Fixtures = _system.Fixtures;
        }

        public IServiceProvider Services => _system.Services;
        

        public void Dispose()
        {
            _system.Dispose();
        }

        public Task<ExecutionResult> Run(string idOrPath)
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

        public Task<ExecutionResult> Run(Specification specification)
        {
            var plan = new ExecutionPlan(_system, specification, this);
            return plan.Execute();
        }

        public async Task<ExecutionResult[]> RunAll(TimeSpan timeout, string output = null, bool openResults = false)
        {
            var specs = Hierarchy.Specifications.ToArray();

            var results = new List<ExecutionResult>();
            foreach (var spec in specs)
            {
                var result = await Run(spec);
                results.Add(result);
            }

            return results.ToArray();
        }

        void ISpecificationObserver.Starting(ExecutionPlan plan)
        {
        }

        void ISpecificationObserver.Completed(ExecutionPlan plan, LineExecution line, StepResult result)
        {
        }

        void ISpecificationObserver.Finished(ExecutionPlan plan, SpecResults specResults)
        {
        }
    }
}
