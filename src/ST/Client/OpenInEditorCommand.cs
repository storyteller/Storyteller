using System;
using System.Diagnostics;
using StoryTeller.Commands;
using StoryTeller.Messages;

namespace ST.Client
{
    public class OpenInEditorCommand : Command<OpenInEditor>
    {
        private readonly Lazy<IPersistenceController> _persistence;

        public OpenInEditorCommand(Lazy<IPersistenceController> persistence)
        {
            _persistence = persistence;
        }

        public override void HandleMessage(OpenInEditor message)
        {
            if (!_persistence.Value.Hierarchy.Specifications.Has(message.id)) return;

            var spec = _persistence.Value.Hierarchy.Specifications[message.id];
            var file = spec.Filename;

            Process.Start(file);
        }
    }
}