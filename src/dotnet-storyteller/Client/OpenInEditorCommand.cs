using System.Diagnostics;
using StoryTeller;
using StoryTeller.Messages;

namespace ST.Client
{
    public class OpenInEditorCommand : Command<OpenInEditor>
    {
        public override void HandleMessage(OpenInEditor message, IApplication app)
        {
            if (!app.Persistence.Hierarchy.Specifications.Has(message.id)) return;

            var spec = app.Persistence.Hierarchy.Specifications[message.id];
            var file = spec.Filename;

            ProcessLauncher.OpenFile(file);
        }
    }
}