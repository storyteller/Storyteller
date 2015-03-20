using System;
using System.Collections.Concurrent;
using System.Threading.Tasks;
using StoryTeller.Grammars;
using StoryTeller.Messages;
using StoryTeller.Model.Persistence;
using StoryTeller.Remotes.Messaging;
using StoryTeller.Results;

namespace StoryTeller.Engine.UserInterface
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

                    // TODO -- really, really don't like this
                    if (message is SpecExecutionCompleted)
                    {
                        EventAggregator.SendMessage(message);
                    }
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