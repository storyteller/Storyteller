using NUnit.Framework;
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
                .ShouldEqual("the-foo-message");
        }

        [Test]
        public void create_envelope_from_message()
        {
            var envelope = new Envelope(new TheFooMessage());
            envelope.topic.ShouldEqual("the-foo-message");
        }
    }

    public class TheFooMessage { }
}