using System.Collections.Generic;
using Baseline;

namespace ST.Docs.Samples
{
    public class SampleCache : ISampleCache
    {
        private readonly Cache<string, Sample> _snippets = new Cache<string, Sample>();

        public void AddOrReplace(Sample sample)
        {
            _snippets[sample.Name] = sample;
        }

        public Sample Find(string name)
        {
            return _snippets.Has(name) ? _snippets[name] : null;
        }

        public IEnumerable<Sample> All()
        {
            return _snippets;
        }
    }
}