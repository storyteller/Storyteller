using System;
using Baseline;

namespace StoryTeller
{
    public static class StoryTellerAssert
    {
        /// <summary>
        /// Fail this step with a message
        /// </summary>
        /// <param name="message">Supports markdown</param>
        public static void Fail(string message)
        {
            throw new StorytellerAssertionException(message);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="condition"></param>
        /// <param name="message">Supports markdown</param>
        public static void Fail(Func<bool> condition, string message)
        {
            if (condition())
            {
                Fail(message);
            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="condition"></param>
        /// <param name="message">Supports markdown</param>
        /// <param name="args"></param>
        public static void Fail(Func<bool> condition, string message, params object[] args)
        {
            if (condition())
            {
                Fail(message.ToFormat(args));
            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="condition"></param>
        /// <param name="message">Supports markdown</param>
        public static void Fail(bool condition, string message)
        {
            if (condition)
            {
                Fail(message);
            }
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="condition"></param>
        /// <param name="message">Supports markdown</param>
        public static void Fail(bool condition, Func<string> message)
        {
            if (condition)
            {
                Fail(message());
            }
        }
    }
}