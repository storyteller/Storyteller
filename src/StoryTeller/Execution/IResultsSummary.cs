using System;
using StoryTeller.Domain;

namespace StoryTeller.Execution
{
    public interface IResultsSummary
    {
        void Start(string description, DateTime runningTime);
        void AddTest(Test test, string resultsFile);
        void WriteFile(string fileName);
    }
}