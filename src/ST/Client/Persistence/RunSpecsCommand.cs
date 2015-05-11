using System;
using System.Linq;
using StoryTeller.Commands;
using StoryTeller.Messages;
using StoryTeller.Remotes;

namespace ST.Client.Persistence
{
    public class RunSpecsCommand : Command<RunSpecs>
    {
        private readonly Lazy<IPersistenceController> _controller;
        private readonly IRemoteController _engine;

        public RunSpecsCommand(Lazy<IPersistenceController> controller, IRemoteController engine)
        {
            _controller = controller;
            _engine = engine;
        }

        public override void HandleMessage(RunSpecs message)
        {
            if (message.list == null) return;

            message.specs = message.list.Select(x => _controller.Value.LoadSpecification(x).data).ToArray();
            _engine.SendMessage(message);

        }
    }
}