using System;
using System.Linq;
using System.Threading;
using Baseline;
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
            Console.WriteLine($"AGENT: Running the StorytellerAgent at port {port} with system {system.GetType().Name}");

            EventAggregator.Messaging.AddListener(this);

            _engine = new EngineAgent(port, system);

            
        }

        public static void LogFailure(Exception ex)
        {
            try
            {
                new FileSystem().WriteStringToFile("storyteller.log", ex.ToString());
                Console.WriteLine("Wrote startup failure to " + "storyteller.log".ToFullPath());
            }
            catch (Exception e)
            {
                Console.WriteLine("Unable to write to the storyteller.log file");
            }
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

        public static void Run(string[] args)
        {
            Run(args, new NulloSystem());
        }

        public static void Run(string[] args, ISystem system)
        {
            if (args.FirstOrDefault() == "test")
            {
                tryToStart(system);


                return;
            }

            var agent = new StorytellerAgent(int.Parse(args[0]), system);
            agent._completion.WaitOne();
        }

        private static void tryToStart(ISystem system)
        {
            try
            {
                system.Start();
                var warmup = system.Warmup();

                warmup.GetAwaiter().GetResult();

                if (warmup.IsFaulted)
                {
                    throw warmup.Exception.Flatten().InnerException;
                }

                ConsoleWriter.Write(ConsoleColor.Green, "StorytellerAgent started without any exceptions");
            }
            catch (Exception e)
            {
                LogFailure(e);

                ConsoleWriter.Write(ConsoleColor.Red, "StorytellerAgent startup failed!");
                ConsoleWriter.Write(ConsoleColor.Yellow, e.ToString());
            }
        }
    }

    public class Shutdown : ClientMessage
    {
        public Shutdown() : base("shutdown")
        {
        }
    }
}