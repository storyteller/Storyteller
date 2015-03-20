using System.Threading;
using FubuCore;

namespace StoryTeller.Samples.Fixtures
{
    public class SometimesSlowFixture : Fixture
    {
        public void Slow()
        {
            if (Project.CurrentProfile == "slow")
            {
                Thread.Sleep(1.Minutes());
            }
        } 
    }
}