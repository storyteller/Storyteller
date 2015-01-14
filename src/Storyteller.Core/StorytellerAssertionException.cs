using System;
using System.Runtime.Serialization;

namespace Storyteller.Core
{
    [Serializable]
    public class StorytellerAssertionException : ApplicationException
    {
        public StorytellerAssertionException()
        {
        }

        protected StorytellerAssertionException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
        }

        public StorytellerAssertionException(string message)
            : base(message)
        {
        }

        public override string ToString()
        {
            return Message;
        }
    }
}