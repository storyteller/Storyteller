using System;
using StoryTeller;

namespace Specifications
{
    public static class Program
    {
        public static void Main(string[] args)
        {
            StorytellerAgent.Run(args, new SpecificationSystem());
        }
    }
}