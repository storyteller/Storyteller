using System;
using Oakton;
using RunCommand = ST.CommandLine.RunCommand;

namespace ST
{
    internal class Program
    {
        public static int Main(string[] args)
        {
            var executor = CommandExecutor.For(_ =>
            {
                _.RegisterCommands(typeof(RunCommand).Assembly);
                _.RegisterCommands(typeof(Program).Assembly);
            });


            return executor.Execute(args);
        }
    }
}