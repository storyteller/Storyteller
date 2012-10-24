using System;
using StoryTeller.Engine;

namespace StoryTeller.Samples.Grammars
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