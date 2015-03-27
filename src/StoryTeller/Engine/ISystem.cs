using System;
using System.Threading.Tasks;

namespace StoryTeller.Engine
{
    public interface ISystem : IDisposable
    {
        IExecutionContext CreateContext();

        CellHandling CreateCellHandling();

        Task Warmup();
        Task Recycle();
    }
}