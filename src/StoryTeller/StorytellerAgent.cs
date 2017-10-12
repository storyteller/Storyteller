using System;
using System.Linq;
using System.Threading;
using Baseline;
using Baseline.Dates;
using Oakton;
using StoryTeller.Commands;
using StoryTeller.Engine;
using StoryTeller.Remotes;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller
{
    /// <summary>
    /// Connects your system under test to the command line and the dotnet storyteller editor tool
    /// </summary>
    public static class StorytellerAgent 
    {
        internal static void LogFailure(Exception ex)
        {
            try
            {
                new FileSystem().WriteStringToFile("storyteller.log", ex.ToString());
                Console.WriteLine("Wrote startup failure to " + "storyteller.log".ToFullPath());
            }
            catch (Exception)
            {
                Console.WriteLine("Unable to write to the storyteller.log file");
            }
        }


        /// <summary>
        /// Use a basic system
        /// </summary>
        /// <param name="args"></param>
        /// <returns></returns>
        public static int Run(string[] args)
        {
            return Run(args, new NulloSystem());
        }

        /// <summary>
        /// Use a custom built system
        /// </summary>
        /// <param name="args"></param>
        /// <param name="system"></param>
        /// <returns></returns>
        public static int Run(string[] args, ISystem system)
        {
            var executor = CommandExecutor.For(_ =>
            {
                _.DefaultCommand = typeof(AgentCommand);
                
                _.RegisterCommand<AgentCommand>();
                _.RegisterCommand<TestCommand>();
                _.RegisterCommand<RunCommand>();
                _.ConfigureRun = run => run.Input.As<StorytellerInput>().System = system;
               
            });

            executor.OptionsFile = "storyteller.opts";

            return executor.Execute(args);
        }

        /// <summary>
        /// Use a custom built system
        /// </summary>
        /// <param name="args"></param>
        /// <typeparam name="T"></typeparam>
        /// <returns></returns>
        public static int Run<T>(string[] args) where T : ISystem, new()
        {
            return Run(args, new T());
        }

    }
}