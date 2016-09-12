using System;
using Baseline;
using StoryTeller.Commands;
using StoryTeller.Messages;
using StoryTeller.Remotes;

namespace ST.Client.Persistence
{
    public class RunSpecCommand : Command<RunSpec>
    {
        private readonly Lazy<IPersistenceController> _persistence;
        private readonly SaveSpecBodyCommand _saveSpec;
        private readonly IRemoteController _remote;

        public RunSpecCommand(Lazy<IPersistenceController> persistence, SaveSpecBodyCommand saveSpec, IRemoteController remote)
        {
            if (saveSpec == null) throw new ArgumentNullException(nameof(saveSpec));
            _persistence = persistence;
            _saveSpec = saveSpec;
            _remote = remote;
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
                message.spec = _persistence.Value.LoadSpecification(message.id).data;
            }

            _remote.SendMessage(message);
        }
    }
}