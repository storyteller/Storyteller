using FubuCore;
using NUnit.Framework;
using StoryTeller.Grammars.Sets;
using StoryTeller.Messages;
using StoryTeller.Results;

namespace StoryTeller.Testing.Messages
{
    [TestFixture]
    public class the_batched_messages
    {
        [Test]
        public void these_types_should_be_batched()
        {
            typeof (StepResult).CanBeCastTo<IBatchedMessage>();
            typeof (SetVerificationResult).CanBeCastTo<IBatchedMessage>();
            typeof (SpecProgress).CanBeCastTo<IBatchedMessage>();
        }
    }
}