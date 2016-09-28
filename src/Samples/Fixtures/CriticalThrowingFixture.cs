using System;
using StoryTeller;

namespace Samples.Fixtures
{
    public class CriticalThrowingFixture : Fixture
    {
        public void ThrowNormal()
        {
            throw new NotImplementedException();
        }

        public void ThrowCritical()
        {
            throw new StorytellerCriticalException("No!");
        }

        public IGrammar SetupBlows()
        {
            return Embed<SetupBlowupFixture>("Blows up in Setup");
        }

    }

    public class SetupBlowupFixture : Fixture
    {
        public override void SetUp()
        {
            throw new StorytellerCriticalException("Stop!");
        }

        public void Go()
        {
            
        }
    }
}