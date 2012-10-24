using System.Collections.Generic;
using FubuCore.Util;

namespace StoryTeller.Engine.Sets
{
    public class SimpleDictionary
    {
        private readonly Cache<string, object> _values = new Cache<string, object>(key => null);

        public object this[string key]
        {
            get
            {
                return _values[key];
            }
            set
            {
                _values[key] = value;
            }
        }

        public bool Has(string key)
        {
            return _values.Has(key);
        }

        public IEnumerable<string> Keys
        {
            get
            {
                return _values.GetAllKeys();
            }
        }
    }
}