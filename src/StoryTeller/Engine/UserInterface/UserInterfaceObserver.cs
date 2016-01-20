using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using FubuCore;
using StoryTeller.Messages;
using StoryTeller.Remotes.Messaging;
using StoryTeller.Results;
using Timer = System.Timers.Timer;

namespace StoryTeller.Engine.UserInterface
{
    public class UserInterfaceObserver : IUserInterfaceObserver, IDisposable
    {
        private readonly BlockingCollection<ClientMessage> _messages =
            new BlockingCollection<ClientMessage>(new ConcurrentQueue<ClientMessage>());

        private Batch _batch = new Batch();
        private readonly ReaderWriterLockSlim _lock = new ReaderWriterLockSlim(); 

        private Task _readingTask;

        private readonly Timer _timer = new Timer(250);
        

        public UserInterfaceObserver()
        {
            _timer.AutoReset = true;
            _timer.Elapsed += (sender, args) =>
            {
                if (_batch.messages.Any())
                {
                    Batch batch = null;
                    _lock.Write(() =>
                    {
                        batch = _batch;
                        _batch = new Batch();
                    });

                    var passthrough = new PassthroughMessage(batch);
                    EventAggregator.SendMessage(passthrough);
                }

            };

            _timer.Enabled = true;
            _timer.Start();

            _readingTask = Task.Factory.StartNew(() =>
            {
                foreach (var message in _messages.GetConsumingEnumerable())
                {
                    if (message is IBatchedMessage)
                    {
                        // Just want this to have a lower priority
                        _lock.Read(() =>
                        {
                            _batch.Add(message);
                            return string.Empty;
                        });
                    }
                    else
                    {
                        var passthrough = new PassthroughMessage(message);
                        EventAggregator.SendMessage(passthrough);

                        // TODO -- really, really don't like this
                        if (message is SpecExecutionCompleted)
                        {
                            EventAggregator.SendMessage(message);
                        }
                    }
                }
            });
        }

        public void SendToClient(ClientMessage message)
        {
            _messages.Add(message);
        }

        public void Handle<T>(T message) where T : IResultMessage
        {
            SendToClient(message.As<ClientMessage>());
        }

        public void SendProgress(SpecProgress progress)
        {
            SendToClient(progress);
        }

        public void Dispose()
        {
            _timer.Dispose();

            _messages.Dispose();

            _messages.CompleteAdding();
            _messages.Dispose();
        }
    }
}