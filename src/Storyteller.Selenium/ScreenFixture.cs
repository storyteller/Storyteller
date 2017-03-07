using System;
using System.Collections.Generic;
using System.Linq;
using Baseline;
using OpenQA.Selenium;
using StoryTeller;

namespace Storyteller.Selenium
{
    public class ScreenFixture : Fixture
    {
        public const string ElementsListName = "Elements";
        public const string ROOT_URL = "RootUrl";
        private readonly Stack<ISearchContext> _searchContexts = new Stack<ISearchContext>();

        protected ISearchContext SearchContext => _searchContexts.Count == 0 ? Driver : _searchContexts.Peek();

        protected IWebDriver Driver
        {
            get
            {
                return Context?.State.Retrieve<IWebDriver>();
            }
            set
            {
                Context?.State.Store(value);
            }
        }

        public sealed override void SetUp()
        {
            _searchContexts.Clear();

            beforeRunning();
        }

        protected virtual void beforeRunning()
        {
        }

        protected void PushElementContext(ISearchContext context)
        {
            _searchContexts.Push(context);
        }

        protected void PushElementContext(By selector)
        {
            var element = SearchContext.FindElement(selector);
            StoryTellerAssert.Fail(element == null, () => "Unable to find element with " + selector);

            PushElementContext(element);
        }

        protected void PopElementContext()
        {
            if (_searchContexts.Any()) _searchContexts.Pop();
        }

        protected string RootUrl
        {
            get
            {
                return Context?.State.Retrieve<string>(ROOT_URL);
            }
            set
            {
                Context?.State.Store(ROOT_URL, value);
            }
        }

        protected readonly LightweightCache<string, By> Elements = new LightweightCache<string, By>();

        protected void Element(string name, By by)
        {
            AddSelectionValues(ElementsListName, name);
            Elements[name] = by;
        }

        [FormatAs("Open the browser to {url}")]
        public void OpenUrl(string url)
        {
            var corrected = correctUrl(url);

            using (Context.Timings.Record("Navigation", url))
            {
                Driver.Navigate().GoToUrl(corrected);
            }            
        }
    

        private string correctUrl(string url)
        {
            if (Uri.IsWellFormedUriString(url, UriKind.Absolute)) return url;

            if (url.StartsWith("~/"))
            {
                url = url.TrimStart('~');
            }

            return RootUrl.AppendUrl(url);
        }

        // TODO -- things we need
        /*
         * 1. Click
         * 2. GetValue
         * 3. SetValue
         * 4. 
         * 
         */

        protected IWebElement forElement(NamedElement element)
        {
            var search = Elements[element.Name];
            return SearchContext.FindElement(search);
        }

        [FormatAs("Click {element}")]
        public void Click(NamedElement element)
        {
            forElement(element).Click();
        }

        [FormatAs("Type {text} into {element}")]
        public void Type(NamedElement element, string text)
        {
            forElement(element).SendKeys(text);
        }

        [FormatAs("The text of {element} should be {text}")]
        public string TextShouldBe(NamedElement element)
        {
            return forElement(element).Text;
        }

        [FormatAs("{element} should be visible")]
        public bool IsVisible(NamedElement element)
        {
            return forElement(element).Displayed;
        }

        [FormatAs("{element} should be hidden")]
        public bool IsHidden(NamedElement element)
        {
            return !forElement(element).Displayed;
        }
    }
}