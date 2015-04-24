using StoryTeller;
using StoryTeller.Results;

namespace Specifications
{
    public class Harness
    {
        public void RunTransformations()
        {
            var runner = new SpecRunner<SpecificationSystem>();

            var results = runner.Run("transformation-rules");

            results.Counts.AssertSuccess();

            var document = runner.GenerateResultsDocument();

            document.OpenInBrowser();
        } 
    }
}