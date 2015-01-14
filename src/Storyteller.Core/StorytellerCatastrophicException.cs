using System;
using System.Runtime.Serialization;

namespace Storyteller.Core
{
    /// <summary>
    /// Means that the entire system under test is invalid and
    /// no more specs should be executed
    /// </summary>
    [Serializable]
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

        protected StorytellerCatastrophicException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}