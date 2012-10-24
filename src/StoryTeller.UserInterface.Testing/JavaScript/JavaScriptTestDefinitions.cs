using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Samples.Grammars;
using StoryTeller.UserInterface.Editing.HTML;
using StoryTeller.UserInterface.Editing.HTML.Tables;
using StoryTeller.UserInterface.Testing.UI.Editing.HTML;
using StoryTeller.Workspace;
using SpecificationExtensions = StoryTeller.Testing.SpecificationExtensions;

namespace StoryTeller.UserInterface.Testing.JavaScript
{
    [TestFixture, Explicit]
    public class JavaScriptTestDefinitions
    {
        public IEnumerable<string> WriteAllFiles()
        {
            IEnumerable<JavaScriptTestFile> tests = createTests();
            tests.Each(x => x.WriteToFile());

            return tests.Select(x => x.FileName);
        }

        public void OpenAllTests()
        {
            createTests().Each(x => x.OpenInBrowser());
        }


        private IEnumerable<JavaScriptTestFile> createTests()
        {
            return GetType().GetMethods()
                .Where(m => m.ReturnType == typeof(JavaScriptTestFile))
                .Select(x => SpecificationExtensions.As<JavaScriptTestFile>(x.Invoke(this, null)));
        }

        public JavaScriptTestFile CommentEditor()
        {
            return new JavaScriptTestFile("Comment Editor Tester").TestFile("CommentEditorTester.js")
                .Html(x => x.Add(new CommentTag().Id("comment1")))
                .Html(x => x.Add(new CommentTag().Id("comment2")))
                .Html(x => x.Add(new CommentTag().Id("comment4")))
                .Html(x => x.Add(new CommentTag().Id("comment3")));
        }

        public JavaScriptTestFile TestEditor()
        {
            JavaScriptTestFile file = new JavaScriptTestFile("Test Editor Tester").TestFile("TestEditorTester.js")
                .Fixtures(FixtureGraph.Library);

            var testEditor =
                new TestEditorTag(FixtureGraph.Library);
            file.Html(x => x.Add("div").Append(testEditor));

            Project project = StoryTeller.Testing.DataMother.GrammarProject();
            project.LoadTests().GetAllTests().Each(test =>
            {
                string testName = test.Name.Replace(" ", "_");

                Debug.WriteLine(testName);

                file.AddTest(testName, test);
                file.Html(x => x.Add("br"));
                file.Html(
                    x => x.Add("a").Text(test.Name).AddClass("test-link").Attr("title", testName).Attr("href", "#"));
            });


            return file;
        }

        public JavaScriptTestFile SingleSelectionMode()
        {
            return new JavaScriptTestFile("Single Selection Mode Tester")
                .Fixtures(FixtureGraph.Library)
                .TestFile("SingleSelectionModeTester.js")
                .AddTest("singleTest", new Test("single", x => x.Add(new Section("SingleSelection"))))
                .Html(x =>
                {
                    var testEditor =
                        new TestEditorTag(FixtureGraph.Library);
                    x.Add("div").Append(testEditor);
                });
        }


        public JavaScriptTestFile OneOrMoreSelectionMode()
        {
            return new JavaScriptTestFile("One Or More Selection Mode Tester")
                .Fixtures(FixtureGraph.Library)
                .TestFile("OneOrMoreSelectionModeTester.js")
                .AddTest("singleTest", new Test("single", x => x.Add(new Section("OneOrMoreSelection"))))
                .Html(x =>
                {
                    var testEditor =
                        new TestEditorTag(FixtureGraph.Library);
                    x.Add("div").Append(testEditor);
                });
        }

        public JavaScriptTestFile MandatoryAutoSelect()
        {
            return new JavaScriptTestFile("Mandatory Auto Selection Behavior")
                .Fixtures(FixtureGraph.Library)
                .TestFile("MandatorySelectionTester.js")
                .AddTest("mandatoryTest", new Test("madatoryTest", x => x.Add(new Section("MandatorySelection"))))
                .Html(x =>
                {
                    var testEditor =
                        new TestEditorTag(FixtureGraph.Library);
                    x.Add("div").Append(testEditor);
                });

        }

        public JavaScriptTestFile Step()
        {
            return new JavaScriptTestFile("Step Tester").TestFile("StepTester.js");
        }

        public JavaScriptTestFile CellInput()
        {
            return new JavaScriptTestFile("Cell Input Tester")
                .Fixtures(FixtureGraph.Library)
                .TestFile("CellInputTester.js");
        }

        public JavaScriptTestFile Sentence()
        {
            return new JavaScriptTestFile("Sentence Tester")
                .Fixtures(FixtureGraph.Library)
                .TestFile("SentenceTester.js");
        }

        public JavaScriptTestFile SectionEditor()
        {
            return new JavaScriptTestFile("Section Editor Tester")
                .TestFile("SectionEditorTester.js")
                .AddTest("blank", new Test("blank"))
                .Html(x => {
                    FixtureLibrary library =
                        FixtureGraph.Library;
                    x.Add("div").Append(new TestEditorTag(library));

                    x.Add("Div").AddClass(GrammarConstants.SECTION).AddClass(GrammarConstants.EMBEDDED).Id("section1").
                        Add("div").AddClass(GrammarConstants.STEP_HOLDER);
                    x.Add("Div").AddClass(GrammarConstants.SECTION).AddClass(GrammarConstants.EMBEDDED).Id("section2").
                        Add("div").AddClass(GrammarConstants.STEP_HOLDER);
                    x.Add("Div").AddClass(GrammarConstants.SECTION).AddClass(GrammarConstants.EMBEDDED).Id("section3").
                        Add("div").AddClass(GrammarConstants.STEP_HOLDER);
                    x.Add("Div").AddClass(GrammarConstants.SECTION).AddClass(GrammarConstants.EMBEDDED).Id("section4").
                        Add("div").AddClass(GrammarConstants.STEP_HOLDER);
                    x.Add("Div").AddClass(GrammarConstants.SECTION).AddClass(GrammarConstants.EMBEDDED).Id("section5").
                        Add("div").AddClass(GrammarConstants.STEP_HOLDER);
                    x.Add("Div").AddClass(GrammarConstants.SECTION).AddClass(GrammarConstants.EMBEDDED).Id("section6").
                        Add("div").AddClass(GrammarConstants.STEP_HOLDER);
                    x.Add("Div").AddClass(GrammarConstants.SECTION).AddClass(GrammarConstants.EMBEDDED).Id("section7").
                        Add("div").AddClass(GrammarConstants.STEP_HOLDER);
                    x.Add("Div").AddClass(GrammarConstants.SECTION).AddClass(GrammarConstants.EMBEDDED).Id("section8").
                        Add("div").AddClass(GrammarConstants.STEP_HOLDER);
                })
                .Fixtures(FixtureGraph.Library);
        }

        public JavaScriptTestFile SelectorTester()
        {
            var mathTest = new Test("math");
            mathTest.Add(new Section("Math"));

            return new JavaScriptTestFile("Selector Tester")
                .TestFile("SelectorTester.js")
                .AddTest("math", mathTest)
                .Html(x =>
                {
                    FixtureLibrary library =
                        FixtureGraph.Library;
                    x.Add("div").Append(new TestEditorTag(library));

                    x.Add("Div").AddClass(GrammarConstants.EMBEDDED).Id("section1").Add("div").AddClass(
                        GrammarConstants.STEP_HOLDER).AddClass(GrammarConstants.SECTION);
                    x.Add("Div").AddClass(GrammarConstants.EMBEDDED).Id("section2").Add("div").AddClass(
                        GrammarConstants.STEP_HOLDER).AddClass(GrammarConstants.SECTION);
                    x.Add("Div").AddClass(GrammarConstants.EMBEDDED).Id("section3").Add("div").AddClass(
                        GrammarConstants.STEP_HOLDER).AddClass(GrammarConstants.SECTION);
                    x.Add("Div").AddClass(GrammarConstants.EMBEDDED).Id("section4").Add("div").AddClass(
                        GrammarConstants.STEP_HOLDER).AddClass(GrammarConstants.SECTION);
                    x.Add("Div").AddClass(GrammarConstants.EMBEDDED).Id("section5").Add("div").AddClass(
                        GrammarConstants.STEP_HOLDER).AddClass(GrammarConstants.SECTION);
                    x.Add("Div").AddClass(GrammarConstants.EMBEDDED).Id("section6").Add("div").AddClass(
                        GrammarConstants.STEP_HOLDER).AddClass(GrammarConstants.SECTION);
                    x.Add("Div").AddClass(GrammarConstants.EMBEDDED).Id("section7").Add("div").AddClass(
                        GrammarConstants.STEP_HOLDER).AddClass(GrammarConstants.SECTION);
                    x.Add("Div").AddClass(GrammarConstants.EMBEDDED).Id("section8").Add("div").AddClass(
                        GrammarConstants.STEP_HOLDER).AddClass(GrammarConstants.SECTION);
                })
                .Fixtures(FixtureGraph.Library);
        }

        public JavaScriptTestFile EmbeddedSectionTester()
        {
            return new JavaScriptTestFile("Embedded Section Tester")
                .Fixtures(FixtureGraph.Library)
                .Html(x =>
                {
                    x.Add("div").Id("section1").AddClass("embedded").Add("div").AddClass("step-holder");
                    x.Add("div").Id("section2").AddClass("embedded").Add("div").AddClass("step-holder");
                    x.Add("div").Id("section3").AddClass("embedded").Add("div").AddClass("step-holder");
                    x.Add("div").Id("section4").AddClass("embedded").Add("div").AddClass("step-holder");
                    x.Add("div").Id("section5").AddClass("embedded").Add("div").AddClass("step-holder");
                    x.Add("div").Id("section6").AddClass("embedded").Add("div").AddClass("step-holder");
                    x.Add("div").Id("test1").Add("div").AddClass("step-holder");
                    x.Add("div").Id("test2").Add("div").AddClass("step-holder");
                    x.Add("div").Id("test3").Add("div").AddClass("step-holder");
                })
                .TestFile("EmbeddedSectionTester.js");
        }

        public JavaScriptTestFile Paragraph()
        {
            return new JavaScriptTestFile("Paragraph Tester")
                .Fixtures(FixtureGraph.Library)
                .TestFile("ParagraphTester.js");
        }

        public JavaScriptTestFile TableEditor()
        {
            return new TableEditorTester();
        }

    }

    public class ParagraphGrammarFixture : Fixture
    {
        [Hidden, FormatAs("X is {x}")]
        public void X(int x)
        {
        }

        [Hidden, FormatAs("Y is {y}")]
        public void Y(int y)
        {
        }

        [Hidden, FormatAs("The sum should be {returnValue}")]
        public int Sum()
        {
            return 0;
        }

        public IGrammar Sum1()
        {
            return Paragraph("Add numbers 1", x =>
            {
                x += this["X"];
                x += this["Y"];
                x += this["Sum"];
            }).SetStyle(EmbedStyle.TitledAndIndented);
        }

        public IGrammar Sum2()
        {
            return Paragraph("Add numbers 2", x =>
            {
                x += this["X"];
                x += this["Y"];
                x += this["Sum"];
            }).SetStyle(EmbedStyle.Inline);
        }
    }

    public class SampleTableFixture : Fixture
    {
        [ExposeAsTable("some table", "rows")]
        public void Table1(
            string a,
            [Default("Jeremy")]string b,
            string c,
            [Default("Max")]string d,
            [Default("Max2")]string e,
            [Default("Max3")]string f)
        {

        }
    }

    public class TableEditorTester : JavaScriptTestFile
    {
        public TableEditorTester()
            : base("Table Editor Tester")
        {
            Fixtures(FixtureGraph.Library);
            TestFile("TableEditorTester.js");

            var library = FixtureGraph.Library;

            Add(new TestEditorTag(library).Id("testEditor1"));
            Add(new TestEditorTag(library).Id("testEditor2"));
            Add(new TestEditorTag(library).Id("testEditor3"));
            Add(new TestEditorTag(library).Id("testEditor4"));
            Add(new TestEditorTag(library).Id("testEditor5"));
            Add(new TestEditorTag(library).Id("testEditor6"));
            Add(new TestEditorTag(library).Id("testEditor7"));

            addTest("blank", leaf => { });

            addTest("test1", leaf =>
            {
                leaf.AddNewStep("a:1, b:2");
                leaf.AddNewStep("a:1, b:2");
                leaf.AddNewStep("a:1, b:2");
                leaf.AddNewStep("a:1, b:2, e:5");
            });

            addTest("data", leaf =>
            {
                leaf.AddNewStep("a:1, b:2, c:3");
            });

            Table table = (Table)library.FixtureFor("SampleTable").GrammarFor("Table1");
            Add(new TableTemplateTag(table, new CellBuilderLibrary()).Id("templateTable"));
        }

        private void addTest(string name, Action<StepLeaf> configure)
        {
            var test = new Test(name);
            var section = new Section(typeof(SampleTableFixture).GetFixtureAlias());
            test.Add(section);
            var step = new Step("Table1");
            section.Add(step);

            var leaf = step.LeafFor("rows");
            configure(leaf);

            AddTest(name, test);

        }
    }
}