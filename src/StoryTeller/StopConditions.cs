using System;

namespace StoryTeller
{
#if NET46
    [Serializable]
#endif
    public class StopConditions
    {
        public bool BreakOnExceptions;
        public bool BreakOnWrongs;
        public int TimeoutInSeconds = 60;

        public bool CanContinue(Counts counts)
        {
            if (BreakOnExceptions && counts.Exceptions > 0) return false;
            if (BreakOnWrongs && counts.Wrongs > 0) return false;

            return true;
        }
    }
}