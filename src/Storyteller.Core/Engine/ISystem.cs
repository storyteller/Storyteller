using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Storyteller.Core.Conversion;

namespace Storyteller.Core.Engine
{
    public interface ISystem : IDisposable
    {
        IExecutionContext CreateContext();

        IEnumerable<IConversionProvider> ConversionProviders();

        Task Warmup();
        Task Recycle();
    }
}