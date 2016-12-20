using System.Linq;
using StoryTeller.Messages;

namespace ST.Client.Persistence
{
    public class RunSpecsCommand : Command<RunSpecs>
    {
        public override void HandleMessage(RunSpecs message, IApplication app)
        {
            if (message.list == null) return;

            message.specs = message.list.Select(x => app.Persistence.LoadSpecification(x).data).ToArray();
            app.Engine.SendMessage(message);
        }
    }
}