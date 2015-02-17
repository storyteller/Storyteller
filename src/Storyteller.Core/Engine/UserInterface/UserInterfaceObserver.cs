using Storyteller.Core.Grammars;
using Storyteller.Core.Messages;
using Storyteller.Core.Model.Persistence;
using Storyteller.Core.Remotes.Messaging;
using Storyteller.Core.Results;

namespace Storyteller.Core.Engine.UserInterface
{
    // TODO -- do *something* to take the publishing off of the main thread
    public class UserInterfaceObserver : IUserInterfaceObserver
    {
        public void SendToClient(object o)
        {
            var passthrough = new PassthroughMessage(o);
            EventAggregator.SendMessage(passthrough);
        }

        public void Handle<T>(T message) where T : IResultMessage
        {
            SendToClient(message);
        }

        public void SpecQueued(SpecNode node)
        {
            SendToClient(new SpecQueued(node.id));
        }

        public void SendProgress(SpecProgress progress)
        {
            SendToClient(progress);
        }

        public void SpecStarted(SpecificationPlan plan)
        {
            SendToClient(new SpecRunning(plan.Specification.Id));
        }
    }
}