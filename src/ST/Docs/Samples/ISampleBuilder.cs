using System.Collections.Generic;
using System.Threading.Tasks;

namespace ST.Docs.Samples
{
    public interface ISampleBuilder
    {
        IEnumerable<Task> StartWatching(string folder);
        void EnableWatching();
    }
}