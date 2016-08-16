using System.Threading;
using Baseline;

namespace StoryTeller.Samples.Fixtures
{
    // SAMPLE: using-project-current-profile
    public class SometimesSlowFixture : Fixture
    {
        public void Slow()
        {
            if (Project.CurrentProfile == "slow")
            {
                Thread.Sleep(1.Minutes());
            }
        }


        public void ReadText([Editor("big-text")]string text)
        {
            
        }
    }
    // ENDSAMPLE
}