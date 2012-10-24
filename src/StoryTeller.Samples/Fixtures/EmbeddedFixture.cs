using System;
using StoryTeller.Engine;

namespace StoryTeller.Samples.Grammars
{
    public class EmbeddedFixture : Fixture
    {
        private bool _throw;

        public EmbeddedFixture()
        {
            this["EmbeddedMath"] =
                Embed<MathFixture>("Do some Math").Before(() => { if (_throw) throw new NotImplementedException(); });
        }

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