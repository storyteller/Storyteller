using System;
using StoryTeller.Commands;
using StoryTeller.Messages;

namespace ST.Client.Persistence
{
    public class CloneSpecCommand : Command<CloneSpec>
    {
        private readonly Lazy<IPersistenceController> _controller;
        private readonly Lazy<IClientConnector> _client;

        public CloneSpecCommand(Lazy<IPersistenceController> controller, Lazy<IClientConnector> client)
        {
            _controller = controller;
            _client = client;
        }

        public override void HandleMessage(CloneSpec message)
        {
            try
            {
                var added =  _controller.Value.CloneSpecification(message.id, message.name);

                _client.Value.SendMessageToClient(added);
            }
            catch (Exception e)
            {
                Logger.Error("Error trying to clone spec " + message.id, e);
            }
        }
    }
}