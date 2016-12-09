using System.Reflection;
using Oakton;

namespace StorytellerDocGen
{
    public class Program
    {
        public static int Main(string[] args)
        {
            var executor = CommandExecutor.For(_ =>
            {
                _.RegisterCommands(typeof(Program).GetTypeInfo().Assembly);
            });


            return executor.Execute(args);
        }
    }
}