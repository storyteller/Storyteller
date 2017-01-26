using StoryTeller;

namespace Storyteller.AspNetCore
{
    public class FakeFixture : AspNetCoreFixture
    {
        [FormatAs("The response text from {url} should be '{contents}'")]
        public string TheContentsShouldBe(string url, string contents)
        {
            var result = Scenario(_ =>
            {
                _.Get.Url(url);
            }).GetAwaiter().GetResult();

            return result.ResponseBody.ReadAsText().Trim();
        }
    }
}