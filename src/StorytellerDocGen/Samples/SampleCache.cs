using System.Collections.Concurrent;
using System.Collections.Generic;

namespace StorytellerDocGen.Samples
{
    public class SampleCache : ISampleCache
    {
        private readonly IDictionary<string, Sample> _snippets = new ConcurrentDictionary<string, Sample>();

        public void AddOrReplace(Sample sample)
        {
            if (_snippets.ContainsKey(sample.Name))
            {
                _snippets[sample.Name] = sample;
            }
            else
            {
                _snippets.Add(sample.Name, sample);
            }
        }

        public Sample Find(string name)
        {
            return _snippets.ContainsKey(name) ? _snippets[name] : null;
        }

        public IEnumerable<Sample> All()
        {
            return _snippets.Values;
        }
    }
}