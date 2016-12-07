using System;
using System.Collections.Concurrent;
using System.Threading.Tasks;
using StoryTeller.Engine.Stepthrough;
using StoryTeller.Messages;
using StoryTeller.Remotes.Messaging;
using StoryTeller.Results;

namespace StoryTeller.Engine.UserInterface
{
    public class UserInterfaceObserver : IUserInterfaceObserver, IDisposable
    {
        private readonly BlockingCollection<object> _messages =
            new BlockingCollection<object>(new ConcurrentQueue<object>());

        private Task _readingTask;

        public UserInterfaceObserver()
        {
            _readingTask = Task.Factory.StartNew(() =>
            {
                foreach (var message in _messages.GetConsumingEnumerable())
                {
                    var passthrough = new PassthroughMessage(message);
                    EventAggregator.SendMessage(passthrough);

                    if (message is UsedByUserInterface)
                    {
                        EventAggregator.SendMessage(message);
                    }
                }
            });
        }

        public void SendToClient(ClientMessage message)
        {
            _messages.Add(message);
        }

        public void SendNextStep(NextStep next)
        {
            NextStep = next;
            EventAggregator.SendMessage(next);
            _messages.Add(next);
        }

        public NextStep NextStep { get; private set; }

        public void SendToClient(object message)
        {
            _messages.Add(message);
        }

        public void Handle<T>(T message) where T : IResultMessage
        {
            SendToClient(message);
        }

        public void SendProgress(SpecProgress progress)
        {
            LastProgress = progress;
            SendToClient(progress);
        }

        public SpecProgress LastProgress { get; private set; }

        public void Dispose()
        {
            _messages.CompleteAdding();
            _messages.Dispose();
        }
    }
}