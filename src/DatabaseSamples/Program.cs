using System.Collections.Generic;
using System.Linq;
using StoryTeller;

namespace DatabaseSamples
{
    internal class Program
    {
        public static void Main(string[] args)
        {
            StorytellerAgent.Run(args, new DatabaseSystem());
        }
    }
}
