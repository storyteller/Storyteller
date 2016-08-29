using System;

namespace StoryTeller.Samples.Fixtures
{
    public class FailureFixture : Fixture
    {
        public FailureFixture()
        {
            throw new Exception("This fixture ctor blew up");
        }
    }
    
    public class GrammarErrorFixture : Fixture
    {
        public IGrammar Bad()
        {
            throw new DivideByZeroException();
        }
    }
}