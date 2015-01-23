using System;

namespace Storyteller.Core.Testing.Samples.Fixtures
{
    /* TODO -- bring back when you deal w/ bad Fixture classes
    public class FailureFixture : Fixture
    {
        public FailureFixture()
        {
            throw new NotImplementedException();
        }
    }
     */

    public class GrammarErrorFixture : Fixture
    {
        public IGrammar Bad()
        {
            throw new NotImplementedException();
        }
    }
}