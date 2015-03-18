using System;
using Storyteller.Core.Engine.Batching;

namespace Storyteller.Core.Engine
{
    public interface IExecutionObserver
    {
        void SpecStarted(SpecExecutionRequest request);
        void SpecFinished(SpecExecutionRequest request);
    }

    public class NulloObserver : IExecutionObserver
    {
        public void SpecStarted(SpecExecutionRequest request)
        {
            
        }

        public void SpecFinished(SpecExecutionRequest request)
        {
            
        }
    }

    public class TeamCityExecutionObserver : IExecutionObserver
    {
        public void SpecStarted(SpecExecutionRequest request)
        {
            Console.WriteLine("##teamcity[testStarted name='{0}']", request.Specification.Name.Escape());
        }

        public void SpecFinished(SpecExecutionRequest request)
        {
            Console.WriteLine("##teamcity[testFinished name='{0}']", request.Specification.Name.Escape());
        }
    }
}