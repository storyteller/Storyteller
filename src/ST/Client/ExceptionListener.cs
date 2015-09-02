using System;
using FubuCore.CommandLine;
using FubuCore.Logging;
using FubuMVC.Core.Services.Messaging;
using StoryTeller.Messages;

namespace ST.Client
{
    public class ExceptionListener : ILogListener
    {
        public bool ListensFor(Type type)
        {
            return true;
        }

        public void DebugMessage(object message)
        {
        }

        public void InfoMessage(object message)
        {
        }

        public void Debug(string message)
        {
        }

        public void Info(string message)
        {
        }

        public void Error(string message, Exception ex)
        {
            ConsoleWriter.Write(ConsoleColor.Yellow, message);
            ConsoleWriter.Write(ConsoleColor.Red, ex.ToString());

            EventAggregator.SendMessage(new PassthroughMessage(new RuntimeError(ex)));
        }

        public void Error(object correlationId, string message, Exception ex)
        {
            Error(message, ex);
        }

        public bool IsDebugEnabled
        {
            get { return false; }
        }

        public bool IsInfoEnabled
        {
            get { return false; }
        }
    }
}