using StoryTeller;

namespace Samples.Fixtures
{
    public class CheckboxFixture : Fixture
    {
        [FormatAs("{now} Should I go now?")]
        public void GoNow(bool now)
        {
            
        }
    }
}