using System;

namespace StoryTeller.Engine
{
    // SAMPLE: ISystem
    public interface ISystem : IDisposable
    {
        IExecutionContext CreateContext();

        CellHandling Start();
    }
    // ENDSAMPLE
}