using StoryTeller.Messages;

namespace ST.Client.Persistence
{
    public class DeleteSpecCommand : Command<DeleteSpec>
    {
        public override void HandleMessage(DeleteSpec message, IApplication app)
        {
            app.Persistence.DeleteSpec(message.id);
        }
    }
}