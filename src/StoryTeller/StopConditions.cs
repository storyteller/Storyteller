using System;
using System.Threading;
using FubuCore;

namespace StoryTeller
{
    [Serializable]
    public class StopConditions
    {
        public bool BreakOnExceptions;
        public bool BreakOnWrongs;
        public int TimeoutInSeconds = 60;

        // TODO -- break on a specific step
        
        public bool CanContinue(Counts counts)
        {
            if (BreakOnExceptions && counts.Exceptions > 0) return false;
            if (BreakOnWrongs && counts.Wrongs > 0) return false;

            return true;
        }

        // TODO -- test this somehow.
        public CancellationTokenSource CreateCancellationSource()
        {
            if (TimeoutInSeconds > 0)
            {
                return new CancellationTokenSource(TimeoutInSeconds.Seconds());
            }

            return new CancellationTokenSource();
        }
    }
}