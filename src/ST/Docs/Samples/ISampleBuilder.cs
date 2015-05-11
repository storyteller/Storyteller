using System.Collections.Generic;
using System.Threading.Tasks;

namespace ST.Docs.Samples
{
    public interface ISampleBuilder
    {
        IEnumerable<Task> ScanFolder(string folder);
        void EnableWatching();
    }
}