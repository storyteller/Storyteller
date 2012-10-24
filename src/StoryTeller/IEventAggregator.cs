using System;
using System.Diagnostics;
using System.Threading;

namespace StoryTeller
{
    public interface IListener
    {
    }

    public interface IListener<T>
    {
        void Handle(T message);
    }

    public interface IEventPublisher
    {
        void Publish(object message);
    }

    public class NulloEventPublisher : MarshalByRefObject,IEventPublisher
    {
        public void Publish(object message)
        {
            // Do nothing
        }

        public override object InitializeLifetimeService()
        {
            return null;
        }
    }

    public static class EventPublisherExtensions
    {
        public static void Publish<T>(this IEventPublisher publisher) where T : new()
        {
            publisher.Publish(new T());
        }
    }

    public class EventPublisher : MarshalByRefObject, IEventPublisher
    {
        private readonly IEventAggregator _aggregator;

        public EventPublisher(IEventAggregator aggregator)
        {
            _aggregator = aggregator;
        }

        public void Publish(object message)
        {
            if (message == null) return;

            ThreadPool.QueueUserWorkItem(o =>
            {
                var callerType = typeof(Caller<>).MakeGenericType(message.GetType());
                Activator.CreateInstance(callerType, message, _aggregator);
            });
        }

        public override object InitializeLifetimeService()
        {
            return null;
        }

        public class Caller<T>
        {
            public Caller(T message, IEventAggregator events)
            {

                events.SendMessage(message);
            }
        }
    }

    public interface IEventAggregator
    {
        // Sending messages
        void SendMessage<T>(T message);
        void SendMessage<T>() where T : new();

        // This method sounded cool, but has been somewhat awkward
        // in real usage
        void SendMessage<T>(Action<T> action) where T : class;

        // Explicit registration
        void AddListener(object listener);
        void RemoveListener(object listener);

        // Filtered registration, experimental
        If<T> If<T>(Func<T, bool> filter);
    }

    public interface If<T>
    {
        object PublishTo(Action<T> action);
    }
}