using System;
using System.Runtime.Serialization;
using StoryTeller.Results;

namespace StoryTeller
{
    /// <summary>
    /// Base class for custom Storyteller failure message exceptions
    /// </summary>
    public abstract class StorytellerFailureException : Exception
    {
#if NET46
        protected StorytellerFailureException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
        }
#endif

        protected StorytellerFailureException(ErrorDisplay display = ErrorDisplay.markdown)
        {
            ErrorDisplay = display;
        }

        protected StorytellerFailureException(string message, ErrorDisplay display = ErrorDisplay.markdown) : base(message)
        {
            ErrorDisplay = display;
        }

        protected StorytellerFailureException(string message, Exception innerException, ErrorDisplay display = ErrorDisplay.markdown) : base(message, innerException)
        {
            ErrorDisplay = display;
        }

        public ErrorDisplay ErrorDisplay { get; }

        public virtual string FormattedMessage()
        {
            return ToString();
        }
    }
}