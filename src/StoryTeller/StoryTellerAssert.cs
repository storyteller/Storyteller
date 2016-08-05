using System;
using Baseline;

namespace StoryTeller
{
    public static class StoryTellerAssert
    {
        public static string ToDisplayMessage(this Exception ex)
        {
            if (ex is StorytellerAssertionException) return ex.Message;

            return ex.ToString();
        }

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