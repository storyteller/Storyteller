using System;

namespace ST.Client
{
    public interface ISpecFileWatcher : IDisposable
    {
        IDisposable LatchFile(string file);
        void StartWatching(string path, ISpecFileObserver observer);
    }
}