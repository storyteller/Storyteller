using System;

namespace Storyteller.Core.Testing.Samples.Fixtures
{
    public class EmbeddedFixture : Fixture
    {
        private bool _throw;

        // TODO -- bring this back
        /*
        public EmbeddedFixture()
        {
            this["EmbeddedMath"] =
                Embed<MathFixture>("Do some Math").Before(c => { if (_throw) throw new NotImplementedException(); });
        }
         * */

        public void ThrowAnExceptionOnTheNextEmbed()
        {
            _throw = true;
        }

        public void DoNotThrowAnExceptionOnTheNextEmbed()
        {
            _throw = false;
        }
    }
}