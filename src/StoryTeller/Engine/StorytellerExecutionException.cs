using System;
using System.Runtime.Serialization;

namespace StoryTeller.Engine
{
#if NET46
    [Serializable]
#endif
    public class StorytellerExecutionException : Exception
    {
        public StorytellerExecutionException(Exception innerException)
            : base("A catastropic exception was thrown during execution and the engine is in an invalid state", innerException)
        {
        }

#if NET46
        protected StorytellerExecutionException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
#endif
    }
}