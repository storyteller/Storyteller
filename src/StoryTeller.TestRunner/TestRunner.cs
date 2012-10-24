using System;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Execution;

namespace StoryTeller.TestRunner
{
    public class TestRunner : ITestObserver
    {
        private readonly string _ProjectFile;
        private readonly string _TestName;

        public TestRunner(string project, string test)
        {
            _ProjectFile = project;
            _TestName = test;
        }

        public int Execute()
        {
            try
            {
                bool result = ExecuteTest(_ProjectFile, _TestName);
                Console.WriteLine(string.Format("{0} = {1}", _TestName, result ? "PASS" : "FAIL"));
                return result ? 0 : 1;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                throw;
            }
        }

        private bool ExecuteTest(string projectFile, string testName)
        {
            ProjectTestRunner runner = new ProjectTestRunner(projectFile);
            try
            {
                Test result = runner.RunTest(testName);
                return result.WasSuccessful();
            }
            catch (Exception e)
            {
                // EXHANDLED: 
                Console.WriteLine(e);
                runner.Dispose();
            }
            return false;
        }

        public void StartTest(Test test, Counts counts)
        {

        }

        public void StartSection(Section section)
        {

        }

        public void FinishSection(Section section)
        {

        }

        public void StartStep(IStep step)
        {

        }

        public void FinishStep(IStep step)
        {

        }

        public void FinishTest(Test test)
        {

        }

        public void Exception(string exceptionString)
        {
            Console.WriteLine(exceptionString);
        }

        public bool CanContinue(Counts counts)
        {
            return true;
        }

        public void FinishTestRetries(Test test)
        {
            
        }
    }
}