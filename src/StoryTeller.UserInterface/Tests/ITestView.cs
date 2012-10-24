using StoryTeller.UserInterface.Tests.Outline;

namespace StoryTeller.UserInterface.Tests
{
    public interface ITestView
    {
        ITestHeaderView Header { get; }

        void PlaceInMainPane(object view);

        void MarkAsExecuting();
        void MarkNotExecuting();
    }
}