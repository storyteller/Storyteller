using StoryTeller.Domain;
using StoryTeller.Engine;

namespace StoryTeller.Workspace
{
    public interface IResultPersistor
    {
        void SaveResult(IProject project, Test test, TestResult result);
        ResultHistory LoadResults(IProject project);
        ResultHistory LoadResults(string directory);
        void ClearResults(IProject project);
        void SaveResultsToDirectory(ResultHistory theResults, string directory);
    }
}