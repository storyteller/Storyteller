using StoryTeller.Domain;

namespace StoryTeller.UserInterface.Controls
{
    public interface ITestFilterObserver
    {
        void ResultStatusChanged(ResultStatus status);
        void LifecycleChanged(Lifecycle lifecycle);
        void RunAll();
        void TagFilterApplied(string tags);
    }
}