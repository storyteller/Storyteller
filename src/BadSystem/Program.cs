using StoryTeller;

namespace BadSystem
{
    public static class Program
    {
        public static void Main(string[] args)
        {
            StorytellerAgent.Run(args, new BadSystem());
        }
    }
}