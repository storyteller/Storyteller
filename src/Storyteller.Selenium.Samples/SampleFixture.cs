using OpenQA.Selenium;
using StoryTeller;

namespace Storyteller.Selenium.Samples
{
    public class SampleFixture : ScreenFixture
    {
        public SampleFixture()
        {
            Element("the Show button", By.Id("button1"));
            Element("the Hide button", By.Id("button2"));
            Element("the div", By.Id("div1"));
            Element("the textbox", By.Id("text1"));
        }

        protected override void beforeRunning()
        {
            var path = "file://" + Project.CurrentProject.ProjectPath.Replace("\\", "/");
            Context.State.Store(RootUrl, path);
        }


    }
}