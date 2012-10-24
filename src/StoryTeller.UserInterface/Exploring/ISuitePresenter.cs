using StoryTeller.Domain;
using StoryTeller.UserInterface.Screens;

namespace StoryTeller.UserInterface.Exploring
{
    public interface ISuitePresenter : IScreen<Suite>
    {
        void RunAll();
    }
}