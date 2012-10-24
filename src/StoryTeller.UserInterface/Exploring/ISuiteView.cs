using System;
using StoryTeller.Domain;

namespace StoryTeller.UserInterface.Exploring
{
    public interface ISuiteView
    {
        ISuitePresenter Presenter { get; set; }
        ITestLineDriver AddTest(Test test, Action<Test> queueAction);
        void ClearAll();
    }
}