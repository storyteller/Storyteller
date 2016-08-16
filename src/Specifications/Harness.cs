using Baseline;
using StoryTeller;
using StoryTeller.Results;

namespace Specifications
{
    public class Harness
    {
        public void RunTransformations()
        {
            var runner = new SpecRunner<SpecificationSystem>();
            //runner.RunAll(1.Minutes());
            //var results = runner.Run("Docs/Parsing a Single Topic File");
            //var results = runner.Run("Docs/Navigation structure with nested folders and implicit ordering");
            runner.RunAll(1.Minutes());

            runner.OpenResultsInBrowser();

            //results.Counts.AssertSuccess();
        } 
    }
}