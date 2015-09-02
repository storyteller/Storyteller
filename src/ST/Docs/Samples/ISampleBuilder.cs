using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ST.Docs.Samples
{
    public interface ISampleBuilder : IDisposable
    {
        IEnumerable<Task> ScanFolder(string folder);
        void EnableWatching();
    }
}