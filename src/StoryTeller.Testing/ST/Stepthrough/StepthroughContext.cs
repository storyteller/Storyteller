using System;
using System.Collections.Generic;
using System.Linq;
using Xunit;
using StoryTeller.Engine.UserInterface;
using StoryTeller.Messages;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using StoryTeller.Results;
using StoryTeller.Samples;
using ST.Client.Stepthrough;

namespace StoryTeller.Testing.ST.Stepthrough
{
    public class StepthroughContext : IResultObserver, IUserInterfaceObserver, IDisposable
    {
        public readonly IList<IResultMessage> Results = new List<IResultMessage>();
        public readonly IList<ClientMessage> ClientMessages = new List<ClientMessage>();
        public Specification Specification { get; private set; }

        public StepthroughExecutor Executor { get; private set; }

        public void Dispose()
        {
            Executor.Cancel();
            Results.Clear();
            ClientMessages.Clear();
        }


        public void TheSpecIs(string text)
        {
            Specification = TextParser.Parse(text);



            Executor = StepthroughExecutor.Start(new GrammarSystem(), Specification, this, this, TestingContext.Library);
            
        }

        public NextStep LastNextStepMessageReceivedByClient => ClientMessages.OfType<NextStep>().LastOrDefault();

        void IResultObserver.Handle<T>(T message)
        {
            Results.Add(message);
        }

        void IResultObserver.SpecExecutionFinished(Specification specification, SpecResults results)
        {
            TheFinalResults = results;
        }

        public SpecResults TheFinalResults { get; set; }

        void IUserInterfaceObserver.SendProgress(SpecProgress progress)
        {
            LastProgress = progress;
        }

        public SpecProgress LastProgress { get; set; }

        void IUserInterfaceObserver.SendToClient(ClientMessage message)
        {
            ClientMessages.Add(message);
        }
    }
}