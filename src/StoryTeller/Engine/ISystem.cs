using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using StoryTeller.Conversion;

namespace StoryTeller.Engine
{
    public interface ISystem : IDisposable
    {
        IExecutionContext CreateContext();

        IEnumerable<IConversionProvider> ConversionProviders();

        Task Warmup();
        Task Recycle();
    }
}