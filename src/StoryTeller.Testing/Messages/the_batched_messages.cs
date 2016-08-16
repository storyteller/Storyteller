using FubuCore;
using Xunit;
using StoryTeller.Grammars.Sets;
using StoryTeller.Messages;
using StoryTeller.Results;

namespace StoryTeller.Testing.Messages
{
    
    public class the_batched_messages
    {
        [Fact]
        public void these_types_should_be_batched()
        {
            typeof (StepResult).CanBeCastTo<IBatchedMessage>();
            typeof (SetVerificationResult).CanBeCastTo<IBatchedMessage>();
            typeof (SpecProgress).CanBeCastTo<IBatchedMessage>();
        }
    }
}