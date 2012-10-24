using System;
using System.Runtime.Serialization;
using FubuCore;

namespace StoryTeller.Assertions
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

    public static class StoryTellerAssert
    {
        public static void Fail(string message)
        {
            throw new StorytellerAssertionException(message);
        }

        public static void Fail(Func<bool> condition, string message)
        {
            if (condition())
            {
                Fail(message);
            }
        }

        public static void Fail(Func<bool> condition, string message, params object[] args)
        {
            if (condition())
            {
                Fail(message.ToFormat(args));
            }
        }
            
        public static void Fail(bool condition, string message)
        {
            if (condition)
            {
                Fail(message);
            }
        }

        public static void Fail(bool condition, Func<string> message)
        {
            if (condition)
            {
                Fail(message());
            }
        }
    }
}