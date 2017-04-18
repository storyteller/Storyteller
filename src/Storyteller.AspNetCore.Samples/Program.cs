namespace StoryTeller.AspNetCore.Samples
{
    public class Program
    {
        public static void Main(string[] args)
        {
            StorytellerAgent.Run(args, new HelloWorldSystem());
        }
    }
}