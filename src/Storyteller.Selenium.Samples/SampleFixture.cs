using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;

namespace StoryTeller.Selenium.Samples
{
    public class SampleFixture : ScreenFixture
    {
        public SampleFixture()
        {
            // This is just a little bit of trickery to
            // use human readable aliases for elements on
            // the page. The Selenium By class identifies
            // how Selenium should "find" the element
            Element("the Show button", By.Id("button1"));
            Element("the Hide button", By.Id("button2"));
            Element("the div", By.Id("div1"));
            Element("the textbox", By.Id("text1"));
        }

        protected override void beforeRunning()
        {
            // Launching Chrome and opening the browser to a sample
            // HTML page. In real life, you'd need to be smarter about this
            // and reuse the Driver across specifications for better
            // performance
            RootUrl = "file://" + Project.CurrentProject.ProjectPath.Replace("\\", "/");
        }
    }
}
