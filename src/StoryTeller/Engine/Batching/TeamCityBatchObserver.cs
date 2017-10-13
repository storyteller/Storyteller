using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;

namespace StoryTeller.Engine.Batching
{
    public class TeamCityBatchObserver : IBatchObserver
    {
        public void SpecRequeued(SpecExecutionRequest request)
        {
            Console.WriteLine("Requeuing {0}, attempt # {1}", request.Specification.name, request.Plan.Attempts + 1);
        }

        public void SpecHandled(SpecExecutionRequest request, SpecResults results)
        {
            var name = request.Specification.name.Escape();
            var resultText = results.Counts.ToString().Escape();

            if (results.Counts.WasSuccessful())
            {
                Console.WriteLine("##teamcity[testFinished name='{0}' message='{1}']", name, resultText);
            }
            else if (request.Specification.Lifecycle == Lifecycle.Acceptance)
            {
                
                Console.WriteLine("##teamcity[testIgnored name='{0}' message='{1}']", name,
                    "Acceptance test failed: " + resultText);
            }
            else
            {
                Console.WriteLine("##teamcity[testFailed name='{0}' details='{1}']", name,
                    resultText);
            }
        }

    }
}