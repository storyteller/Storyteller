using System.Collections.Generic;

namespace ST.Docs.Samples
{
    public interface ISampleCache
    {
        void AddOrReplace(Sample sample);
        Sample Find(string name);

        IEnumerable<Sample> All();
    }
}