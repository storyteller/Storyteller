using System;
using System.Collections.Generic;
using System.Linq;
using Baseline;
using Newtonsoft.Json;
using StoryTeller.Engine;
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

        public StepthroughState Stepthrough = null;

        [JsonProperty("mode")]
        public ExecutionMode Mode = ExecutionMode.normal;

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

        public void AddInitialMessages(Batch batch)
        {
            batch.Add(this);

            if (Stepthrough == null)
            {
                return;
            }


            if (Stepthrough.progress != null) batch.Add(Stepthrough.progress);
            batch.AddRange(Stepthrough.results.OfType<ClientMessage>());
            if (Stepthrough.next != null) batch.Add(Stepthrough.next);
        }
    }

    public class StepthroughState
    {
        private readonly IList<IResultMessage> _results = new List<IResultMessage>();

        public NextStep next = null;
        public SpecProgress progress = null;

        public IResultMessage[] results
        {
            get { return _results.ToArray(); }
            set
            {
                _results.Clear();
                if (value != null)
                {
                    _results.AddRange(value);
                }
            }
        }

        public void Add(IResultMessage result)
        {
            _results.Add(result);
        }
    }
}