using System.Collections.Generic;
using StoryTeller.Domain;

namespace StoryTeller.UserInterface.Exploring
{
    public interface ITestExplorer : IListener<Hierarchy>, IStartable
    {
        // For testing
        Hierarchy CurrentHierarchy { get; }
        Icon IconFor(Test test);

        IEnumerable<Test> TestsMatchingFilter(Suite suite);
        void ResetFilter();
    }
}