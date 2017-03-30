using StoryTeller;
using StoryTeller.Json;

namespace Samples.Fixtures
{
    public class SampleJsonFixture : JsonComparisonFixture
    {
        public SampleJsonFixture()
        {
            Title = "Verifying Json Data";
        }

        [FormatAs("The json is {json}")]
        public void JsonIs(string json)
        {
            Context.State.StoreJson(json);
        }

        public IGrammar CheckOrder()
        {
            return CheckValue<int>("$.order", "The order should be {order}");
        }
    }
}