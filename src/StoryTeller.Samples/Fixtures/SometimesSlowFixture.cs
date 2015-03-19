using System.Threading;
using FubuCore;
using Storyteller.Core;

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