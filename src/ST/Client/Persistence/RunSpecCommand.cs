using System;
using Baseline;
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
                if (message.revision.IsNotEmpty())
                {
                    _saveSpec.HandleMessage(new SaveSpecBody
                    {
                        id = message.id,
                        revision = message.revision,
                        spec = message.spec
                    });
                }
            }
            else
            {
                message.spec = _controller.Value.LoadSpecification(message.id).data;
            }

            _engine.SendMessage(message);
        }
    }
}