using StoryTeller.Domain;

namespace StoryTeller.Engine
{
    public interface ITestObserver
    {
        void StartTest(Test test, Counts counts);
        void StartSection(Section section);
        void FinishSection(Section section);

        void StartStep(IStep step);
        void FinishStep(IStep step);

        void FinishTest(Test test);
        void Exception(string exceptionString);

        bool CanContinue(Counts counts);
        void FinishTestRetries(Test test);
    }
}