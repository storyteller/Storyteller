using System;
using StoryTeller.Messages;

namespace ST.Client.Persistence
{
    public class SaveSpecBodyCommand : Command<SaveSpecBody>
    {
        // TODO -- dunno, maybe a failure message back to the client maybe?
        public override void HandleMessage(SaveSpecBody message, IApplication app)
        {
            app.Persistence.SaveSpecification(message.id, message.spec);

            app.Client.SendMessageToClient(new SpecSaved
            {
                spec = app.Persistence.LoadSpecificationById(message.spec.id)
            });
        }
    }
}
