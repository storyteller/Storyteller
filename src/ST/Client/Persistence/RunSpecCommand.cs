using System;
using System.Collections.Generic;
using StoryTeller.Commands;
using StoryTeller.Messages;
using StoryTeller.Remotes;

namespace ST.Client.Persistence
{
    public class RunSpecCommand : Command<RunSpec>
    {
        private readonly Lazy<IPersistenceController> _controller;
        private readonly SaveSpecBodyCommand _saveSpec;
        private readonly IRemoteController _engine;

        public RunSpecCommand(Lazy<IPersistenceController> controller, SaveSpecBodyCommand saveSpec, IRemoteController engine)
        {
            if (saveSpec == null) throw new ArgumentNullException("saveSpec");
            _controller = controller;
            _saveSpec = saveSpec;
            _engine = engine;
        }

        public override void HandleMessage(RunSpec message)
        {
            if (message.spec != null)
            {
                _saveSpec.HandleMessage(new SaveSpecBody
                {
                    id = message.id,
                    revision = Guid.NewGuid().ToString(), // TODO -- send the revision up
                    spec = message.spec
                });
            }
            else
            {
                message.spec = _controller.Value.LoadSpecification(message.spec.id).data;

                _engine.SendMessage(message);
            }
        }
    }

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
            // TODO -- will change for GH-306

            message.list.Each(x =>
            {
                var runSpec = new RunSpec
                {
                    id = x,
                    spec = _controller.Value.LoadSpecification(x).data
                };

                _engine.SendMessage(runSpec);
            });
        }
    }

}