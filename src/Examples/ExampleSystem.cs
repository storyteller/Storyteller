using System;
using FubuCore.Conversion;
using StoryTeller.Engine;
using StructureMap;

namespace Examples
{
    public class ExampleSystem : ISystem
    {
        public T Get<T>() where T : class
        {
            return null;
        }

        public IExecutionContext CreateContext()
        {
            throw new NotImplementedException();
        }

        public void Recycle()
        {
            throw new NotImplementedException();
        }

        public void Dispose()
        {
            throw new NotImplementedException();
        }
    }

    public interface IBrowserDriver
    {
        void OpenUrl(string url);
    }

    public class SeleniumBrowserDriver : IBrowserDriver
    {
        public void OpenUrl(string url)
        {
            // open the url
        }
    }
}