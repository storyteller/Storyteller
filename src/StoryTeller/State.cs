using System;
using Baseline;


namespace StoryTeller
{
    // SAMPLE: IState
    public interface IState
    {
        void Store<T>(T value);
        void Store<T>(string key, T value);
        T Retrieve<T>();
        T Retrieve<T>(string key);
    }
    // ENDSAMPLE

    public class State : IDisposable, IState
    {
        private readonly LightweightCache<Type, object> _byType = new LightweightCache<Type, object>();
        private readonly LightweightCache<Type, LightweightCache<string, object>> _byName = new LightweightCache<Type, LightweightCache<string, object>>(t => new LightweightCache<string, object>()); 

        public void Store<T>(T value)
        {
            _byType[typeof (T)] = value;
        }

        public void Store<T>(string key, T value)
        {
            _byName[typeof (T)][key] = value;
        }

        public T Retrieve<T>()
        {
            return (T) _byType[typeof (T)];
        }

        public T Retrieve<T>(string key)
        {
            return (T) _byName[typeof (T)][key];
        }

        public object CurrentObject;

        void IDisposable.Dispose()
        {
            _byName.ClearAll();
            _byType.ClearAll();
        }
    }
}