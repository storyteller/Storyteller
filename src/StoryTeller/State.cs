using System;
using System.Linq;
using Baseline;
using StoryTeller.Results;


namespace StoryTeller
{
    public class MissingStateException : StorytellerFailureException
    {
        public MissingStateException(Type type) : base($"No known State value for type *{type.FullName}*")
        {
        }

        public MissingStateException(Type type, string key) : base($"No known State value for type *{type.FullName}* and key *{key}*")
        {
        }


    }

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
        private readonly LightweightCache<Type, object> _byType = new LightweightCache<Type, object>(type =>
        {
            throw new MissingStateException(type);
        });
        
        private readonly LightweightCache<Type, LightweightCache<string, object>> _byName = new LightweightCache<Type, LightweightCache<string, object>>(t => new LightweightCache<string, object>(
            key =>
            {
                throw new MissingStateException(t, key);
            })); 

        public void Store<T>(T value)
        {
            _byType[typeof (T)] = value;
        }

        public void Store<T>(string key, T value)
        {
            _byName[typeof (T)][key] = value;
        }

        public T RetrieveOrAdd<T>(Func<T> missing)
        {
            if (_byType.Contains(typeof(T)))
            {
                return Retrieve<T>();
            }

            var value = missing();
            _byType[typeof(T)] = value;

            return value;
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