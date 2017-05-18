using OpenQA.Selenium.Chrome;
using StoryTeller.Engine;

namespace StoryTeller.Selenium.Samples
{
    public class Program
    {
        public static void Main(string[] args)
        {
            StorytellerAgent.Run(args, new SeleniumSystem());
        }
    }

    // SAMPLE: Adding-an-Extension
    public class SeleniumSystem : SimpleSystem
    {
        protected override void configureCellHandling(CellHandling handling)
        {
            handling.Extensions.Add(new SeleniumExtension(new ChromeDriver()));
        }
    }
    // ENDSAMPLE
}
