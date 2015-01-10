using System;
using System.Collections.Generic;
using Storyteller.Core.Model;
using Storyteller.Core.Results;

namespace Storyteller.Core
{
    public interface ISpecContext
    {
        // TODO -- if the token is cancelled, if it's hit a critical exception, if the timeout is done
        // TODO -- if the stop conditions have been met (Later)
        bool IsCancelled { get; }
        bool Wait(Func<bool> condition, TimeSpan timeout);
        void LogResults(IEnumerable<CellResult> results);
        void LogResult<T>(T result) where T : IResultMessage;
        void LogException(Exception ex, Stage stage = Stage.body);
        void Push(Node node);
        void Pop();
    }
}