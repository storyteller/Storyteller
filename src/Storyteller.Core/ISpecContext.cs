using System;
using System.Collections;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using System.Threading;
using Storyteller.Core.Results;

namespace Storyteller.Core
{


    public interface ISpecContext
    {
        CancellationToken Cancellation { get; }

        bool Wait(Func<bool> condition, TimeSpan timeout);

        void LogResults(IEnumerable<IResultMessage> results);
        void LogResult(IResultMessage result);

    }
}