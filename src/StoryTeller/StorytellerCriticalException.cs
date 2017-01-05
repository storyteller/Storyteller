using System;
using System.Runtime.Serialization;
using StoryTeller.Results;

namespace StoryTeller
{
    /// <summary>
    /// Means that the current spec fun is invalid and should be 
    /// stopped immediately
    /// </summary>
#if NET46
    [Serializable]
#endif
    public class StorytellerCriticalException : StorytellerFailureException
    {
        public StorytellerCriticalException()
        {
        }

        public StorytellerCriticalException(string message) : base(message, ErrorDisplay.text)
        {
        }

        public StorytellerCriticalException(string message, Exception innerException) : base(message, innerException, ErrorDisplay.text)
        {
        }

#if NET46
        protected StorytellerCriticalException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
#endif
    }
}