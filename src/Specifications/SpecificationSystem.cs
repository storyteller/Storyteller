using System;
using FubuCore;
using OpenQA.Selenium;
using ST.Client;
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
            return new NulloSystem.SimpleExecutionContext(new InMemoryServiceLocator());
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
}