using System;
using Baseline;


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
        T RetrieveOrAdd<T>(Func<T> missing);


        T TryRetrieve<T>(string key);
        T TryRetrieve<T>();
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
            if (_byType.Has(typeof(T)))
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

        public T TryRetrieve<T>(string key)
        {
            if (!_byName.Has(typeof(T))) return default(T);

            var cache = _byName[typeof(T)];

            return cache.Has(key) ? cache[key].As<T>() : default(T);
        }

        public T TryRetrieve<T>()
        {
            return _byType.Has(typeof(T)) ? _byType[typeof(T)].As<T>() : default(T);
        }

        void IDisposable.Dispose()
        {
            _byType.Each(x => (x as IDisposable)?.Dispose());

            _byName.Each(cache =>
            {
                cache.Each(x => (x as IDisposable)?.Dispose());
            });

            _byName.ClearAll();
            _byType.ClearAll();
        }
    }
}
