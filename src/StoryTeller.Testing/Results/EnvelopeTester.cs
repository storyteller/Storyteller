using NUnit.Framework;
using Shouldly;
using StoryTeller.Results;

namespace StoryTeller.Testing.Results
{
    [TestFixture]
    public class EnvelopeTester
    {
        [Test]
        public void derive_topic_name()
        {
            Envelope.ToTopic(typeof (TheFooMessage))
                .ShouldBe("the-foo-message");
        }

        [Test]
        public void create_envelope_from_message()
        {
            var envelope = new Envelope(new TheFooMessage());
            envelope.topic.ShouldBe("the-foo-message");
        }
    }

    public class TheFooMessage { }
}