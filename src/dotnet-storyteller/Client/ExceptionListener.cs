using System;
using Oakton;
using StoryTeller.Messages;
using StoryTeller.Remotes.Messaging;

namespace ST.Client
{
    public static class Logger
    {
        public static void Error(string message, Exception ex)
        {
            ConsoleWriter.Write(ConsoleColor.Yellow, message);
            ConsoleWriter.Write(ConsoleColor.Red, ex.ToString());

            EventAggregator.SendMessage(new PassthroughMessage(new RuntimeError(ex)));
        }
    }

}