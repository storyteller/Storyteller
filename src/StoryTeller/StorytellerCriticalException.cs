using System;
using System.Runtime.Serialization;

namespace StoryTeller
{
    /// <summary>
    /// Means that the current spec fun is invalid and should be 
    /// stopped immediately
    /// </summary>
#if NET46
    [Serializable]
#endif
    public class StorytellerCriticalException : Exception
    {
        public StorytellerCriticalException()
        {
        }

        public StorytellerCriticalException(string message) : base(message)
        {
        }

        public StorytellerCriticalException(string message, Exception innerException) : base(message, innerException)
        {
        }

#if NET46
        protected StorytellerCriticalException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
#endif
    }
}