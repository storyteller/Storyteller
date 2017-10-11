using System;
using System.Threading;
using Oakton;
using StoryTeller.Engine;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Commands
{
    [Description("Used by dotnet storyteller to remote control the Storyteller specification engine")]
    public class AgentCommand : OaktonCommand<AgentInput>, IListener<StartProject>, IListener<Shutdown>
    {
        private EngineAgent _engine;
        private readonly ManualResetEvent _completion = new ManualResetEvent(false);
        
        public override bool Execute(AgentInput input)
        {
            Console.WriteLine($"AGENT: Running the StorytellerAgent at port {input.Port} with system {input.System.GetType().Name}");

            EventAggregator.Messaging.AddListener(this);

            _engine = new EngineAgent(input.Port, input.System);

            _completion.WaitOne();

            return true;
        }

        public void Receive(StartProject message)
        {
            _engine.Start(message.Project);
        }

        public void Receive(Shutdown message)
        {
            Console.WriteLine("Shutdown requested...");

            try
            {
                _engine.Dispose();

                Console.WriteLine("Shut down gracefully.");
            }
            catch (Exception e)
            {
                ConsoleWriter.Write(ConsoleColor.Red, e.ToString());
                throw;
            }
            finally
            {
                _completion.Set();
            }
        }
    }
}
