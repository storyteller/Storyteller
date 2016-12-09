using System;
using System.Threading.Tasks;

namespace StorytellerDocGen.Samples
{
    public interface ISampleBuilder : IDisposable
    {
        Task ScanFolder(string folder);
    }
}