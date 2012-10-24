using System;
using StoryTeller.Domain;
using StoryTeller.UserInterface.Running;

namespace StoryTeller.UserInterface.Exploring
{
    public interface IIconService
    {
        Icon IconFor(Test test);
    }

    public class IconService : IIconService
    {
        private readonly IExecutionQueue _queue;

        public IconService(IExecutionQueue queue)
        {
            _queue = queue;
        }

        public Icon IconFor(Test test)
        {
            if (_queue.IsQueued(test)) return Icon.Pending;

            // TODO -- change to CPS?
            if (_queue.IsExecuting() && _queue.ExecutingTest == test)
            {
                if (test.LastResult == null) return Icon.RunningSuccess;

                if (test.WasSuccessful()) return Icon.RunningSuccess;

                return Icon.RunningFailure;
            }

            if (test.LastResult == null) return Icon.Unknown;

            return test.WasSuccessful() ? Icon.Success : Icon.Failed;
            
        }
    }
}