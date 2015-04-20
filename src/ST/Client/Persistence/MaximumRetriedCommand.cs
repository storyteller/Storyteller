using System;
using StoryTeller.Commands;
using StoryTeller.Messages;

namespace ST.Client.Persistence
{
    public class MaximumRetriedCommand : Command<MaximumRetries>
    {
        private readonly Lazy<IPersistenceController> _controller;

        // This pattern is reocurring way too often. Pull out a PersistenceCommand<T>
        public MaximumRetriedCommand(Lazy<IPersistenceController> controller)
        {
            _controller = controller;
        }

        public override void HandleMessage(MaximumRetries message)
        {
            _controller.Value.UpdateMaximumRetries(message.id, message.number);
        }
    }
}