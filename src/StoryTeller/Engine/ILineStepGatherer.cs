using System;

namespace StoryTeller.Engine
{
    [Obsolete("Goes away in v6")]
    public interface ILineStepGatherer 
    {
        void Line(ILineExecution execution);
        void Composite(ICompositeExecution execution);

        ISpecContext CurrentContext { get; }
    }
}
