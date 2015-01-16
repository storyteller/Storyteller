using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using FubuCore;
using Storyteller.Core.Conversion;
using Storyteller.Core.Model;

namespace Storyteller.Core.Engine
{
    public class SpecRunner : IDisposable
    {
        /*
         * TODO -- this time, SpecRunner will also handle the execution queue duties as
         * well because it's more intertwined.
         * 
         * 
         * 
         */

        private readonly ISystem _system;
        private Task _library;

        public SpecRunner(ISystem system)
        {
            _system = system;
            _library = Task.Factory.StartNew(() => FixtureLibrary.CreateForAppDomain(Conversions.Basic()))
                .ContinueWith(t =>
                {
                    // TODO -- message out the fixture library
                });
        }

        public void Dispose()
        {
            throw new NotImplementedException();
        }
    }

    public interface ISystem : IDisposable
    {
        IExecutionContext CreateContext();

        IEnumerable<IConversionProvider> ConversionProviders();

        Task Recycle();
    }

    public interface IExecutionContext : IDisposable
    {
        IServiceLocator Services { get; }
    }

    public class NulloSystem : ISystem
    {
        public IExecutionContext CreateContext()
        {
            return new SimpleExecutionContext();
        }

        public Task Recycle()
        {
            return Task.FromResult("recycled");
        }

        public void Dispose()
        {
        }

        public IEnumerable<IConversionProvider> ConversionProviders()
        {
            return new IConversionProvider[0];
        }
    }

    public class SimpleExecutionContext : IExecutionContext
    {
        public SimpleExecutionContext()
        {
            Services = new InMemoryServiceLocator();


        }

        void IDisposable.Dispose()
        {

        }

        IServiceLocator IExecutionContext.Services { get { return Services; } }

        public InMemoryServiceLocator Services { get; private set; }
    }


}