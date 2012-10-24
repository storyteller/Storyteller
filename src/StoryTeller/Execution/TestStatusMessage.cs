using System;
using StoryTeller.Engine;
using FubuCore;

namespace StoryTeller.Execution
{
    [Serializable]
    public class TestStatusMessage
    {
        public Counts Counts { get; set; }
        public int TotalSteps { get; set; }
        public string CurrentActivity { get; set; }
        public int CompletedSteps { get; set; }
        public string TestPath { get; set; }

        public bool IsRunning { get; set; }
        public string Status { get; set; }

        public bool WasCancelled { get; set; }

        public override string ToString()
        {
            return "Test {0}, Step {1} of {2} ({3}) with {4}".ToFormat(TestPath, CompletedSteps, TotalSteps, CurrentActivity, Counts);
        }
    }
}