using System.Collections.Generic;

namespace StorytellerDocGen.Samples
{
    public interface ISampleCache
    {
        void AddOrReplace(Sample sample);
        Sample Find(string name);

        IEnumerable<Sample> All();
    }
}