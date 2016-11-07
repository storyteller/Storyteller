using StoryTeller.Messages;

namespace ST.Client.Persistence
{
    public class RequestSpecDataCommand : Command<SpecDataRequested>
    {
        public override void HandleMessage(SpecDataRequested message, IApplication app)
        {
            var data = app.Persistence.LoadSpecification(message.id);

            app.Client.SendMessageToClient(data);
        }
    }
}