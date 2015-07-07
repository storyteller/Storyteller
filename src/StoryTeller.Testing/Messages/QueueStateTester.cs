using NUnit.Framework;
using StoryTeller.Messages;

namespace StoryTeller.Testing.Messages
{
    [TestFixture]
    public class QueueStateTester
    {
        [Test]
        public void all_spec_ids_with_only_running()
        {
            new QueueState{running = "foo"}.AllSpecIds()
                .ShouldHaveTheSameElementsAs("foo");
        }

        [Test]
        public void all_spec_ids_with_only_queued()
        {
            new QueueState{queued = new []{"a", "b"}}.AllSpecIds()
                .ShouldHaveTheSameElementsAs("a", "b");

        }

        [Test]
        public void all_spec_ids_with_both_running_and_queued()
        {
            new QueueState{queued = new []{"foo", "bar"}, running = "baz"}.AllSpecIds()
                .ShouldHaveTheSameElementsAs("baz", "foo", "bar");
        }
    }
}