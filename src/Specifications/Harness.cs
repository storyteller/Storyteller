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

            

            var document = runner.GenerateResultsDocument();

            document.OpenInBrowser();

            results.Counts.AssertSuccess();
        } 
    }
}