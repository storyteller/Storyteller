using System;

namespace StoryTeller.UserInterface.Eventing
{
    public class FilteredListener<T> : IListener<T>
    {
        private readonly Action<T> _action;
        private readonly Func<T, bool> _filter;

        public FilteredListener(Func<T, bool> filter, Action<T> action)
        {
            _filter = filter;
            _action = action;
        }

        #region IListener<T> Members

        public void Handle(T message)
        {
            if (_filter(message)) _action(message);
        }

        #endregion
    }
}