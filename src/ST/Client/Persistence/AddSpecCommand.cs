using System;
using FubuCore.Logging;
using StoryTeller.Commands;
using StoryTeller.Messages;

namespace ST.Client.Persistence
{
    public class AddSpecCommand : Command<AddSpec>
    {
        private readonly ILogger _logger;
        private readonly Lazy<IPersistenceController> _controller;
        private readonly Lazy<IClientConnector> _connector;

        public AddSpecCommand(ILogger logger, Lazy<IPersistenceController> controller, Lazy<IClientConnector> connector)
        {
            _logger = logger;
            _controller = controller;
            _connector = connector;
        }

        public override void HandleMessage(AddSpec message)
        {
            var added = _controller.Value.AddSpec(message.parent, message.name);
            try
            {
                _connector.Value.SendMessageToClient(added);
            }
            catch (Exception e)
            {
                _logger.Error("Error trying to add a spec named " + message.name, e);
            }
        }
    }
}