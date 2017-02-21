using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
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
            Driver = new ChromeDriver();
            RootUrl = "file://" + Project.CurrentProject.ProjectPath.Replace("\\", "/");
        }

        public override void TearDown()
        {
            Driver.Close();
        }
    }
}