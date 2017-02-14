using System.Threading.Tasks;
using StoryTeller;

namespace Storyteller.AspNetCore.Samples
{
    public class FakeFixture : AspNetCoreFixture
    {
        [FormatAs("The response text from {url} should be '{contents}'")]
        public async Task<string> TheContentsShouldBe(string url)
        {
            var result = await Scenario(_ =>
            {
                _.Get.Url(url);
            });

            return result.ResponseBody.ReadAsText().Trim();
        }
    }
}