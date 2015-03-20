using System;

namespace StoryTeller.Samples.Fixtures
{
    public class FailureFixture : Fixture
    {
        public FailureFixture()
        {
            throw new NotImplementedException();
        }
    }

    public class GrammarErrorFixture : Fixture
    {
        public IGrammar Bad()
        {
            throw new NotImplementedException();
        }
    }
}