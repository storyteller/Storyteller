using Microsoft.AspNetCore.Hosting;
using WebApp;

namespace StoryTeller.AspNetCore.Samples
{
    // SAMPLE: HelloWorldAspNetCoreSystem
    public class HelloWorldSystem : AspNetCoreSystem
    {
        public HelloWorldSystem() : base(new WebHostBuilder().UseStartup<Startup>())
        {
            // No request should take longer than 250 milliseconds
            RequestPerformanceThresholdIs(250);

            // You can directly configure the CellHandling property to add lists,
            // custom conversions, or extensions
            CellHandling
                .AddSystemLevelList("states", new []{"Texas", "Missouri", "Arkansas"});
        }
    }
    // ENDSAMPLE
}