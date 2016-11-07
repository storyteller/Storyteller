using System;
using StoryTeller.Messages;

namespace ST.Client.Persistence
{
    public class AddSpecCommand : Command<AddSpec>
    {
        public override void HandleMessage(AddSpec message, IApplication app)
        {
            var added = app.Persistence.AddSpec(message.parent, message.name);
            try
            {
                app.Client.SendMessageToClient(added);
            }
            catch (Exception e)
            {
                Logger.Error("Error trying to add a spec named " + message.name, e);
            }
        }
    }
}