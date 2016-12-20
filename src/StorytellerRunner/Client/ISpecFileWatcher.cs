using System;

namespace ST.Client
{
    public interface ISpecFileWatcher : IDisposable
    {
        void WriteFiles(Action action);
        void StartWatching(string path, ISpecFileObserver observer);
    }
}