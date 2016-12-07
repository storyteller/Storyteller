using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NSubstitute;
using StoryTeller.Engine;
using StoryTeller.Engine.Stepthrough;
using StoryTeller.Engine.UserInterface;
using StoryTeller.Messages;
using StoryTeller.Model;
using StoryTeller.Model.Persistence;
using StoryTeller.Results;
using StoryTeller.Samples;

namespace StoryTeller.Testing.Engine.Stepthrough
{
    public class StepthroughContext : IResultObserver, IUserInterfaceObserver, IDisposable
    {
        public readonly IList<ClientMessage> ClientMessages = new List<ClientMessage>();
        public readonly IList<IResultMessage> Results = new List<IResultMessage>();
        public Specification Specification { get; private set; }

        public StepthroughExecution Execution { get; set; }

        public NextStep LastNextStepMessageReceivedByClient => ClientMessages.OfType<NextStep>().LastOrDefault();

        public SpecResults TheFinalResults { get; set; }

        public SpecProgress LastProgress { get; set; }


        public void Dispose()
        {
            Execution.Cancel();
            Results.Clear();
            ClientMessages.Clear();
        }

        void IResultObserver.Handle<T>(T message)
        {
            Results.Add(message);
        }

        void IResultObserver.SpecExecutionFinished(Specification specification, SpecResults results)
        {
            TheFinalResults = results;
        }

        void IUserInterfaceObserver.SendProgress(SpecProgress progress)
        {
            LastProgress = progress;
        }

        void IUserInterfaceObserver.SendToClient(ClientMessage message)
        {
            ClientMessages.Add(message);
        }

        public void TheSpecIs(string text)
        {
            Specification = TextParser.Parse(text);

            var request = new SpecExecutionRequest(Specification, this);

            request.CreatePlan(TestingContext.Library);

            Execution = new StepthroughExecution(request, new StopConditions(), this, Substitute.For<IExecutionObserver>());
        }

        public void Start(ExecutionMode mode)
        {
            Execution.Request.Mode = mode;

            Finished = Task.Factory.StartNew(() =>
            {
                TheFinalResults = Execution.Execute(new GrammarSystem(), new Timings());
            });

            Execution.HasStarted.Wait();
        }

        public Task Finished { get; set; }
        public void SendNextStep(NextStep next)
        {
            NextStep = next;
        }

        public NextStep NextStep { get; private set; }
    }
}