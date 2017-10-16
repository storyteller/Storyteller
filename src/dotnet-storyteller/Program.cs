using Oakton;
using ST.Client;

namespace StorytellerRunner
{
    public class Program
    {
        public static int Main(string[] args)
        {
            return CommandExecutor.ExecuteCommand<OpenCommand>(args);
        }
    }
}