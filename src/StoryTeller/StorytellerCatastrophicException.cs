using System;
using System.Runtime.Serialization;

namespace StoryTeller
{
    /// <summary>
    /// Means that the entire system under test is invalid and
    /// no more Specifications should be executed
    /// </summary>
#if NET46
    [Serializable]
#endif
    public class StorytellerCatastrophicException : Exception
    {
        public StorytellerCatastrophicException()
        {
        }

        public StorytellerCatastrophicException(string message) : base(message)
        {
        }

        public StorytellerCatastrophicException(string message, Exception innerException) : base(message, innerException)
        {
        }

#if NET46
        protected StorytellerCatastrophicException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
#endif
    }
}