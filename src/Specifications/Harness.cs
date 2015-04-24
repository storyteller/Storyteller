using StoryTeller;

namespace Specifications
{
    public class Harness
    {
        public void RunTransformations()
        {
            var runner = new SpecRunner<SpecificationSystem>();

            var results = runner.Run("transformation-rules");

            results.Counts.AssertSuccess();
        } 
    }
}