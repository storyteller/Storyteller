using System;

namespace StoryTeller
{
#if NET46
    [Serializable]
#endif
    [Obsolete("merge this into Project for V6")]
    public class StopConditions
    {
        public bool BreakOnExceptions;
        public bool BreakOnWrongs;
        public int TimeoutInSeconds = 60;
        private bool _cancelled;

        public bool CanContinue(Counts counts)
        {
            if (_cancelled) return false;
            if (BreakOnExceptions && counts.Exceptions > 0) return false;
            if (BreakOnWrongs && counts.Wrongs > 0) return false;

            return true;
        }

        public void Cancel()
        {
            _cancelled = true;
        }
    }
}
