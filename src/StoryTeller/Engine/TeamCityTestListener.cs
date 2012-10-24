using System;
using FubuCore;
using StoryTeller.Domain;
using StoryTeller.Engine.TeamCity;

namespace StoryTeller.Engine
{
    public class TeamCityTestListener : ConsoleListener
    {
        // Makes use of TeamCity's support for Service Messages
        // http://www.jetbrains.net/confluence/display/TCD4/Build+Script+Interaction+with+TeamCity#BuildScriptInteractionwithTeamCity-ReportingTests

        public override void StartTest(Test test, Counts counts)
        {
            Console.WriteLine("##teamcity[testStarted name='{0}']", test.Name.Escape());
        }

        public override void FinishTest(Test test)
        {
            // no-op
            // we have to write the REAL result when the retries finish
        }

        public override void FinishTestRetries(Test test)
        {
            if (!test.LastResult.Counts.WasSuccessful())
            {
                if (test.Lifecycle == Lifecycle.Regression)
                {
                    Console.WriteLine("##teamcity[testFailed name='{0}' details='{1}']", test.Name.Escape(),
                                      getFailureDetails(test).Escape());
                }
                else
                {
                    Console.WriteLine("##teamcity[testIgnored name='{0}' message='{1}']", test.Name.Escape(),
                                      "Acceptance test failed: " + getFailureDetails(test).Escape());
                }
            }
            Console.WriteLine("##teamcity[testFinished name='{0}']", test.Name.Escape());
        }

        private static string getFailureDetails(Test test)
        {
            string output = test.LastResult.Counts.ToString();
            
            //TODO:  replace by looking at TestResult
            if (test.LastResult.ExceptionText.IsNotEmpty()) output += " Exception: " + test.LastResult.ExceptionText;
            return output;
        }
    }

    namespace TeamCity
    {
        public static class TeamCityExtensions
        {
            public static string Escape(this string output)
            {
                if (output == null) return null;
                return output.Replace("|", "||").Replace("'", "|'").Replace("]", "|]").Replace("\n", "|n").Replace(
                    "\r", "|r");
            }
        }
    }
}