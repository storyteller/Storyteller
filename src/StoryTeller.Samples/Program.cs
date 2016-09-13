namespace StoryTeller.Samples
{
    public static class Program
    {
        public static void Main(string[] args)
        {
            StorytellerAgent.Run(args, new GrammarSystem());
        }
    }
}