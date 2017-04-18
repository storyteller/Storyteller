using WebApp;

namespace StoryTeller.AspNetCore.Samples
{
    public class HelloWorldSystem : AspNetCoreSystem
    {
        public HelloWorldSystem()
        {
            UseStartup<Startup>();

            // No request should take longer than 250 milliseconds
            RequestPerformanceThresholdIs(250);
        }


    }
}