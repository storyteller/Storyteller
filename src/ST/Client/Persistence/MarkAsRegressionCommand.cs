using System;
using System.Collections.Generic;
using Baseline;
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
            message.list.Each(id => _controller.Value.SetLifecycle(id, Lifecycle.Regression));
        }
    }
}