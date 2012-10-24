using HtmlTags;
using StoryTeller.Domain;
using StoryTeller.Engine;

namespace StoryTeller.Html
{
    public class TestHolderTag : HtmlTag
    {
        private readonly HtmlTag _testName;
        private HtmlTag _suiteName;
        private readonly HtmlTag _container;

        public TestHolderTag()
            : base("div")
        {
            AddClass("main");
            _testName = Add("h2").AddClass(HtmlClasses.TEST_NAME);
            Id("testEditor");

            AddClass(HtmlClasses.TEST_EDITOR);

            _container = Add("div").AddClasses("container", HtmlClasses.SECTION, "test-editor");

        }

        public void WriteResults(Counts counts)
        {
            var countsTag = new HtmlTag("div").AddClass("results");
            if (counts.WasSuccessful())
            {
                countsTag.Text("Succeeded with " + counts.ToString());
                countsTag.AddClass("results-" + HtmlClasses.PASS);
            }
            else
            {
                countsTag.Text("Failed with " + counts.ToString());
                countsTag.AddClass("results-" + HtmlClasses.FAIL);
            }

            _suiteName.Next = countsTag;
        }

        public void WriteSuiteName(string suiteName)
        {
            _suiteName = new HtmlTag("h5").Text(suiteName);
            _testName.Next = _suiteName;
        }
        
        public HtmlTag TestName { get { return _testName; } }
        public HtmlTag Container { get { return _container; } }
    
        // The extra div is to be consistent w/ the test editor structure and CSS
        public HtmlTag CreateStepHolder()
        {
            return Container.Add("div").Add("div").AddClass(HtmlClasses.STEP_HOLDER);
        }
    }
}