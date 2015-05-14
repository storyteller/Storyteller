using System;
using System.IO;
using FubuCore;
using OpenQA.Selenium;
using ST.Client;
using ST.Docs;
using StoryTeller;
using StoryTeller.Engine;

namespace Specifications
{
    public class SpecificationSystem : ISystem
    {
        public static readonly string Path;

        private readonly IWebDriver _webDriver;
        private readonly WebApplicationRunner _runner;

        public IExecutionContext CreateContext()
        {
            return new SpecificationContext();
        }

        public CellHandling Start()
        {
            return CellHandling.Basic();
        }

        public void Dispose()
        {
            //_webDriver.Dispose();
            //_runner.Dispose();
        }
    }

    public class SpecificationContext : IExecutionContext
    {
        private readonly InMemoryServiceLocator _services;
        private readonly DocSettings _docSettings;

        public SpecificationContext()
        {
            _services = new InMemoryServiceLocator();
            _docSettings = DocSettings.ForTesting();
            _services.Add(_docSettings);
        }

        public void Dispose()
        {
            new FileSystem().DeleteDirectory(_docSettings.Root);
        }

        public T GetService<T>()
        {
            return _services.GetInstance<T>();
        }

        public void AfterExecution(ISpecContext context)
        {
            // Nothing
        }
    }
}