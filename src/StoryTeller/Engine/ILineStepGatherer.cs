using System;

namespace StoryTeller.Engine
{
    public interface ILineStepGatherer 
    {
        void Line(ILineExecution execution);
        void Composite(ICompositeExecution execution);

        ISpecContext CurrentContext { get; }
    }
}