using System;
using Baseline;

namespace StoryTeller.Samples
{
    // SAMPLE: Program.Main.CustomSystem
    public static class Program
    {
        public static void Main(string[] args)
        {
            // GrammarSystem is a custom ISystem
            // that "knows" how to bootstrap and
            // gracefully shut down the system under test
            StorytellerAgent.Run(args, new GrammarSystem());
        }
    }
    // ENDSAMPLE
}
