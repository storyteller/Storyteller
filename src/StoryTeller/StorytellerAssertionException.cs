using System;
using System.Runtime.Serialization;

namespace StoryTeller
{
#if NET46
    [Serializable]
#endif
    public class StorytellerAssertionException : Exception
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