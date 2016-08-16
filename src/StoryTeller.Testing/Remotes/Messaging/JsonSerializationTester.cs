using Xunit;
using Shouldly;
using StoryTeller.Messages;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Testing.Remotes.Messaging
{
    
    public class JsonSerializationTester
    {
        [Fact]
        public void can_pick_up_the_type_of_a_client_message_from_the_json_bodyy()
        {
            var message = new RunSpec {id = "embeds"};
            var json = JsonSerialization.ToCleanJson(message);

            var deserialized = JsonSerialization.DeserializeMessage(json)
                .ShouldBeOfType<RunSpec>();

            deserialized.id.ShouldBe("embeds");
            deserialized.ShouldNotBeTheSameAs(message);
        }
    }
}