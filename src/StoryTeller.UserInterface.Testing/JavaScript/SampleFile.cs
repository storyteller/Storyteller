using System.Collections.Generic;
using HtmlTags;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Execution;
using StoryTeller.Model;
using StoryTeller.Samples.Grammars;
using StoryTeller.UserInterface.Editing.HTML;
using StoryTeller.Workspace;

namespace StoryTeller.UserInterface.Testing.JavaScript
{
    public class SampleFile : JavaScriptTestFile
    {
        public SampleFile()
            : base("Sample Test Editor")
        {
            TestFile("SampleTestEditor.js");

            Fixtures(FixtureGraph.Library);
        }

        public void Open()
        {
            OpenInBrowser();
        }

        protected override void referenceFiles()
        {
        }

        protected override void addChildren(string title)
        {
            var select = Add("h2").Text("Test:  ").Add<SelectTag>();
            select.Id("testName");


            Project project = StoryTeller.Testing.DataMother.GrammarProject();

            AddTest("Blank", new Test("Blank"));
            select.Option("Blank", "Blank");

            project.LoadTests().GetAllTests().Each(test =>
            {
                string testName = test.Name.Replace(" ", "_");

                select.Option(test.Name, testName);

                AddTest(testName, test);
            });

            Add("hr");

            FixtureLibrary library = FixtureGraph.Library;
            Add("div").Append(new TestEditorTag(library));
        }
    }



    // STOP RIGHT THERE!
    // THIS IS STRICTLY FOR JEREMY's TESTING AND 100% LIKELY TO FAIL ON YOUR BOX!
    public class BlueTestFile : JavaScriptTestFile
    {
        private readonly ProjectTestRunner _runner = new ProjectTestRunner(@"C:\\svn\\blue\\RuleTests.xml");

        public BlueTestFile()
            : base("Blue Files")
        {
            TestFile("SampleTestEditor.js");

            
            Fixtures(_runner.GetLibary());
        }

        public void Open()
        {
            OpenInBrowser();
        }

        protected override void referenceFiles()
        {
        }

        protected override void addChildren(string title)
        {
            HtmlTag header = Add("h2").Text("Test:  ");
            var select = header.Add<SelectTag>();
            select.Id("testName");


            IProject project = _runner.Project;

            AddTest("Blank", new Test("Blank"));
            select.Option("Blank", "Blank");

            project.LoadTests().GetAllTests().Each(test =>
            {
                string testName = test.Name.Replace(" ", "_");

                select.Option(test.LocatorPath(), testName);

                AddTest(testName, test);
            });

            header.Add("button").Text("Next").Id("nextButton");

            Add("hr");

            FixtureLibrary library = _runner.GetLibary();
            Add("div").Append(new TestEditorTag(library));
        }
    }

}