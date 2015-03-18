using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Storyteller.Core.Grammars;
using Storyteller.Core.Model;
using Storyteller.Core.Model.Persistence;

namespace Storyteller.Core.Engine.Batching
{
    public class TeamCityBatchObserver : IBatchObserver
    {
        private readonly IBatchObserver _inner;

        public TeamCityBatchObserver(IBatchObserver inner)
        {
            _inner = inner;
        }

        public void SpecRequeued(SpecificationPlan plan, ISpecContext context)
        {
            Console.WriteLine("Requeuing {0}, attempt # {1}", context.Specification.Name, plan.Attempts + 1);
        }

        public void SpecHandled(SpecificationPlan plan, ISpecContext context)
        {
            _inner.SpecHandled(plan, context);

            var name = context.Specification.Name.Escape();
            var results = context.Counts.ToString().Escape();

            if (context.Counts.WasSuccessful())
            {
                Console.WriteLine("##teamcity[testFinished name='{0}' message='{1}']", name, results);
            }
            else if (context.Specification.Lifecycle == Lifecycle.Acceptance)
            {
                
                Console.WriteLine("##teamcity[testIgnored name='{0}' message='{1}']", name,
                    "Acceptance test failed: " + results);
            }
            else
            {
                Console.WriteLine("##teamcity[testFailed name='{0}' details='{1}']", name,
                    results);
            }
        }


        public Task<IEnumerable<BatchRecord>> MonitorBatch(IEnumerable<SpecNode> nodes)
        {
            return _inner.MonitorBatch(nodes);
        }
    }
}