using System;
using StoryTeller;

namespace Specifications
{
    public static class Program
    {
        // SAMPLE: StorytellerRunner-with-custom-ISystem
        public static void Debug()
        {
            using (var runner = StorytellerRunner.For<SpecificationSystem>())
            {
                runner.Run("path to the spec");
            }
        }
        // ENDSAMPLE

        public static void Main(string[] args)
        {
            StorytellerAgent.Run(args, new SpecificationSystem());
        }
    }
}