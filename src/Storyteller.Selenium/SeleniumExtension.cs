using System;
using System.Threading.Tasks;
using OpenQA.Selenium;

namespace StoryTeller.Selenium
{
    // SAMPLE: SeleniumExtension
    public class SeleniumExtension : IExtension
    {
        private readonly Func<IWebDriver> _source;
        private IWebDriver _driver;

        // You'd want the web driver construction done lazily
        // so that it can be parallelized with the system bootstrapping
        public SeleniumExtension(Func<IWebDriver> source)
        {
            _source = source;
        }

        // Clean up after your
        public void Dispose()
        {
            _driver?.Close();
            _driver?.Dispose();
        }

        // This is executed during the bootstrapping of the system
        // under test
        public Task Start()
        {
            return Task.Factory.StartNew(() =>
            {
                _driver = _source();
            });
        }

        // This gets executed right before each specification
        // run. In this case, it puts the current IWebDriver
        // where the related ScreenFixture can find it during
        // Specification runs
        public void BeforeEach(ISpecContext context)
        {
            context.State.Store(_driver);
        }

        public void AfterEach(ISpecContext context)
        {
            // Nothing
        }
    }
    // ENDSAMPLE
}