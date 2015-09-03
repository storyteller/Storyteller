using System;
using System.Threading.Tasks;

namespace ST.Docs.Samples
{
    public interface ISampleBuilder : IDisposable
    {
        Task ScanFolder(string folder);
    }
}