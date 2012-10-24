using System;

namespace StoryTeller.Execution
{
    public class NulloEventAggregator : IEventAggregator
    {
        public object LastMessage;

        #region IEventAggregator Members

        public void SendMessage<T>(Action<T> action) where T : class
        {
        }

        public void SendMessage<T>(T message)
        {
            LastMessage = message;
        }

        public void SendMessage<T>() where T : new()
        {
            throw new NotImplementedException();
        }

        public void AddListener(object listener)
        {
        }

        public void RemoveListener(object listener)
        {
        }

        public If<T> If<T>(Func<T, bool> filter)
        {
            throw new NotImplementedException();
        }

        #endregion
    }
}