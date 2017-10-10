using System.Reflection;
using Oakton;
using RunCommand = ST.CommandLine.RunCommand;

namespace StorytellerRunner
{
    public class Program
    {
        public static int Main(string[] args)
        {
            var executor = CommandExecutor.For(_ =>
            {
                _.RegisterCommands(typeof(RunCommand).GetTypeInfo().Assembly);
                _.RegisterCommands(typeof(Program).GetTypeInfo().Assembly);
            });


            return executor.Execute(args);
        }
    }
}