using System;
using StoryTeller.Engine.Batching;

namespace StoryTeller.Engine
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

    public class UserInterfaceExecutionObserver : IExecutionObserver
    {
        public void SpecStarted(SpecExecutionRequest request)
        {
            if (Controller != null) Controller.SendQueueState();
        }

        public EngineController Controller;

        public void SpecFinished(SpecExecutionRequest request)
        {
            // nothing
        }
    }

    public class TeamCityExecutionObserver : IExecutionObserver
    {
        public void SpecStarted(SpecExecutionRequest request)
        {
            Console.WriteLine("##teamcity[testStarted name='{0}']", request.Specification.name.Escape());
        }

        public void SpecFinished(SpecExecutionRequest request)
        {
            Console.WriteLine("##teamcity[testFinished name='{0}']", request.Specification.name.Escape());
        }
    }
}