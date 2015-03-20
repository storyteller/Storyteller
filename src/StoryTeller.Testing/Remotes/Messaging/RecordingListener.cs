using System.Collections.Generic;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Testing.Remotes.Messaging
{
    public class RecordingListener : IListener
    {
        private readonly IList<object> _received = new List<object>();

        public IEnumerable<object> Received
        {
            get { return _received; }
        }

        public void Clear()
        {
            _received.Clear();
        }

        public void Receive<T>(T message)
        {
            _received.Add(message);
        }

        
    }
}