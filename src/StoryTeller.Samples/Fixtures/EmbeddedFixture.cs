using System;
using System.Diagnostics;

namespace StoryTeller.Samples.Fixtures
{
    public class EmbeddedFixture : Fixture
    {
        private bool _throw;

        public EmbeddedFixture()
        {
            this["EmbeddedMath"] =
                Embed<MathFixture>("Do some Math").Before(c => { if (_throw) throw new NotImplementedException(); });
        }

        public override void SetUp()
        {
            Debug.WriteLine("EmbeddedFixture.Setup sent this debug message");
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