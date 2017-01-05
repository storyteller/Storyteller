using System;
using System.Runtime.Serialization;
using StoryTeller.Results;

namespace StoryTeller
{
#if NET46
    [Serializable]
#endif
    public class StorytellerAssertionException : StorytellerFailureException
    {
        public StorytellerAssertionException()
        {
        }

#if NET46
        protected StorytellerAssertionException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
        }
#endif

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