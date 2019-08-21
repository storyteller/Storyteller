using System;
using StoryTeller.Engine;

namespace StoryTeller
{
    [Obsolete("Goes away in v6")]
    public interface IExecutionStep
    {
        int Count();
        void AcceptVisitor(ILineStepGatherer gatherer);
    }
}
