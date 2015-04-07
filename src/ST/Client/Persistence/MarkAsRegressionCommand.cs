using System;
using StoryTeller.Commands;
using StoryTeller.Messages;
using StoryTeller.Model;

namespace ST.Client.Persistence
{
    public class MarkAsRegressionCommand : Command<MarkAsRegression>
    {
        private readonly Lazy<IPersistenceController> _controller;

        public MarkAsRegressionCommand(Lazy<IPersistenceController> controller)
        {
            _controller = controller;
        }

        public override void HandleMessage(MarkAsRegression message)
        {
            _controller.Value.ChangeLifecycle(message.list, Lifecycle.Regression);
        }
    }
}