using System;
using Baseline;
using StoryTeller;

namespace Specifications
{
    public class Debugger
    {
        public void DoStuff()
        {
            using (var runner = StorytellerRunner.For<SpecificationSystem>())
            {
                //runner.RunAll(5.Minutes());

                runner.Run("Docs / Advanced LinkTo Transformations");

                runner.OpenResultsInBrowser();
            }
        }
    }
}