using System;
using System.Collections.Concurrent;
using System.Threading.Tasks;
using Storyteller.Core.Grammars;
using Storyteller.Core.Messages;
using Storyteller.Core.Model.Persistence;
using Storyteller.Core.Remotes.Messaging;
using Storyteller.Core.Results;

namespace Storyteller.Core.Engine.UserInterface
{
    public class UserInterfaceObserver : IUserInterfaceObserver, IDisposable
    {
        private readonly BlockingCollection<object> _messages = new BlockingCollection<object>(new ConcurrentQueue<object>());
        private Task _readingTask;

        public UserInterfaceObserver()
        {
            _readingTask = Task.Factory.StartNew(() =>
            {
                foreach (var message in _messages.GetConsumingEnumerable())
                {
                    var passthrough = new PassthroughMessage(message);
                    EventAggregator.SendMessage(passthrough);
                }
            });
        }

        public void SendToClient(object message)
        {
            _messages.Add(message);
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

        public void Dispose()
        {
            _messages.CompleteAdding();
            _messages.Dispose();
        }
    }
}