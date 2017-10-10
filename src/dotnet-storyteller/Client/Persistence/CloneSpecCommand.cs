using System;
using StoryTeller.Messages;

namespace ST.Client.Persistence
{
    public class CloneSpecCommand : Command<CloneSpec>
    {
        public override void HandleMessage(CloneSpec message, IApplication app)
        {
            try
            {
                var added =  app.Persistence.CloneSpecification(message.id, message.name);

                app.Client.SendMessageToClient(added);
            }
            catch (Exception e)
            {
                Logger.Error("Error trying to clone spec " + message.id, e);
            }
        }
    }
}