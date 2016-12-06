using System;
using System.Collections.Generic;
using Baseline;
using StoryTeller.Engine.Stepthrough;
using StoryTeller.Results;

namespace StoryTeller.Messages
{
#if NET46
    [Serializable]
#endif
    public class QueueState : ClientMessage, IBatchedMessage
    {
        public QueueState() : base("queue-state")
        {
        }

        public string[] queued = new string[0];
        public string running = null;
        public StepthroughState stepthrough = null;


        public IEnumerable<string> AllSpecIds()
        {
            if (running.IsNotEmpty()) yield return running;

            if (queued != null)
            {
                foreach (var id in queued)
                {
                    yield return id;
                }
            }
        }
    }

    public class StepthroughState
    {
        public NextStep next = null;
        public SpecProgress progress = null;
        public IResultMessage[] results = new IResultMessage[0];
    }
}