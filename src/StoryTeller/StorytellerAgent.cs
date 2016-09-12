using System;
using System.Threading;
using StoryTeller.Engine;
using StoryTeller.Messages;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller
{
    /// <summary>
    /// Runs inside a remote process
    /// </summary>
    public class StorytellerAgent : IListener<StartProject>, IListener<Shutdown>
    {
        private readonly EngineAgent _engine;
        private readonly ManualResetEvent _completion = new ManualResetEvent(false);

        public StorytellerAgent(int port, ISystem system)
        {
            EventAggregator.Messaging.AddListener(this);

            _engine = new EngineAgent(port, system);
        }

        public void Receive(StartProject message)
        {
            _engine.Start(message.Project);
        }

        public void Receive(Shutdown message)
        {
            try
            {
                _engine.Dispose();
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

        public static void Run(string[] args)
        {
            Run(args, new NulloSystem());
        }

        public static void Run(string[] args, ISystem system)
        {
            var agent = new StorytellerAgent(int.Parse(args[0]), new NulloSystem());
            agent._completion.WaitOne();
        }
    }

    public class Shutdown : ClientMessage
    {
        public Shutdown() : base("shutdown")
        {
        }
    }
}