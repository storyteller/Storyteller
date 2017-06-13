using System;
using Baseline;
using Microsoft.Extensions.DependencyModel;

namespace StoryTeller.Samples
{
    // SAMPLE: Program.Main.CustomSystem
    public static class Program
    {
        public static void Main(string[] args)
        {
            DateTime time = DateTime.MinValue;
            DateTime.TryParse("anything", out time);
            Console.WriteLine(time);

            DependencyContext.Default.RuntimeLibraries.Each(x =>
            {
                Console.WriteLine($"{x.Name}: {x.Version}");
            });


            // GrammarSystem is a custom ISystem
            // that "knows" how to bootstrap and
            // gracefully shut down the system under test
            StorytellerAgent.Run(args, new GrammarSystem());
        }
    }
    // ENDSAMPLE
}