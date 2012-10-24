using System.Collections.Generic;

namespace StoryTeller.Domain
{
    public interface ITestVisitable
    {
        void AcceptVisitor(ITestVisitor visitor);
    }

    public interface ITestPart : ITestVisitable
    {
        IEnumerable<ITestPart> Children { get; }
        int StepCount();
    }
}