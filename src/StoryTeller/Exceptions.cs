using System;
using System.Runtime.Serialization;

namespace StoryTeller
{
    [Serializable]
    public class TestEngineFailureException : Exception
    {
        public TestEngineFailureException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
        }

        public TestEngineFailureException(string message, Exception innerException)
            : base(message, innerException)
        {
        }

        public TestEngineFailureException(string message)
            : base(message)
        {
        }

        public TestEngineFailureException()
        {
        }
    }




}