using System.Threading.Tasks;
using WebApp.Controllers;

namespace StoryTeller.AspNetCore.Samples
{
    
    public class FakeFixture : AspNetCoreFixture
    {
        public FakeFixture()
        {
            Title = "Hello World ASP.Net Core Application";
        }

        public override void SetUp()
        {
            TextController.WaitTime = 0;
        }

        // This is just to fake slow http requests for demonstration purposes
        [FormatAs("If the request takes at least {duration} milliseconds")]
        public void RequestTakes(int duration)
        {
            TextController.WaitTime = duration;
        }

        // SAMPLE: async-grammar-sample
        [FormatAs("The response text from {url} should be '{contents}'")]
        public async Task<string> TheContentsShouldBe(string url)
        {
            var result = await Scenario(_ =>
            {
                _.Get.Url(url);
            });

            return result.ResponseBody.ReadAsText().Trim();
        }
        // ENDSAMPLE
    }

}
