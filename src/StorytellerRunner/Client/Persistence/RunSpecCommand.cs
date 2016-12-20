using Baseline;
using StoryTeller.Messages;

namespace ST.Client.Persistence
{
    public class RunSpecCommand : Command<RunSpec>
    {
        public override void HandleMessage(RunSpec message, IApplication app)
        {
            if (message.spec != null)
            {
                if (message.revision.IsNotEmpty())
                    new SaveSpecBodyCommand().HandleMessage(new SaveSpecBody
                    {
                        id = message.id,
                        revision = message.revision,
                        spec = message.spec
                    }, app);
            }
            else
            {
                message.spec = app.Persistence.LoadSpecification(message.id).data;
            }

            app.Engine.SendMessage(message);
        }
    }
}