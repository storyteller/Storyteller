using System;
using FubuCore.Logging;
using Storyteller.Core.Commands;
using Storyteller.Core.Messages;

namespace ST.Client.Persistence
{
    public class CloneSpecCommand : Command<CloneSpec>
    {
        private readonly ILogger _logger;
        private readonly Lazy<IPersistenceController> _controller;
        private readonly Lazy<IClientConnector> _client;

        public CloneSpecCommand(ILogger logger, Lazy<IPersistenceController> controller, Lazy<IClientConnector> client)
        {
            _logger = logger;
            _controller = controller;
            _client = client;
        }

        public override void HandleMessage(CloneSpec message)
        {
            try
            {
                var added =  _controller.Value.CloneSpecification(message.id, message.name);

                _client.Value.SendMessageToClient(new HierarchyLoaded
                {
                    hierarchy = _controller.Value.Hierarchy.Top
                });

                _client.Value.SendMessageToClient(added);
            }
            catch (Exception e)
            {
                _logger.Error("Error trying to clone spec " + message.id, e);
            }
        }
    }
}