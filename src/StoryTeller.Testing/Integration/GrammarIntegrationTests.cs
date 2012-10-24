using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Html;
using StoryTeller.Persistence;
using StoryTeller.Samples;
using StoryTeller.Samples.Grammars;
using System.Linq;

namespace StoryTeller.Testing.Integration
{
    [TestFixture]
    public class GrammarIntegrationTests
    {
        private ITestRunner runner;
        private Hierarchy hierarchy;

        [TestFixtureSetUp]
        public void SetUp()
        {
            runner = new TestRunner();
            hierarchy = DataMother.GrammarProject().LoadTests();
        }

        private Counts running(string name)
        {
            Test test = hierarchy.GetAllTests().FirstOrDefault(x => x.Name == name);
            test.ShouldNotBeNull();
            test.LastResult = runner.RunTest(test);

            var library = runner.Library;
            var writer = new HtmlWriter(library);
            //writer.WritePreview(test).OpenInBrowser();
            //test.OpenResultsInBrowser();

            return test.LastResult.Counts;
        }

        [Test]
        public void Cannot_find_fixture()
        {
            running("Test with Missing Fixture Name").ShouldEqual(0, 0, 0, 1);
        }

        [Test]
        public void boolean_results_in_set_verification()
        {
            running("Boolean Results in a Table").ShouldEqual(2, 0, 0, 0);
        }

        [Test]
        public void cannot_find_grammar()
        {
            running("Test with Bad Grammar Name").ShouldEqual(0, 0, 3, 0);
        }

        [Test]
        public void Composite_with_errors()
        {
            running("Composite with Errors").ShouldEqual(2, 3, 1, 2);
        }

        [Test]
        public void decision_tables()
        {
            running("Decision Table").ShouldEqual(2, 2, 0, 0);
        }

        [Test]
        public void embeds()
        {
            running("Embeds").ShouldEqual(2, 1, 2, 1);
        }

        [Test]
        public void Facts()
        {
            running("Facts").ShouldEqual(2, 2, 1, 0);
        }

        [Test]
        public void Ordered_set()
        {
            running("Ordered Set").ShouldEqual(10, 7, 0, 1);
        }

        [Test]
        public void Ordered_string_set_failure()
        {
            running("Unsuccessful Ordering").ShouldEqual(4, 5, 0, 0);
        }

        [Test]
        public void Ordered_string_set_success()
        {
            running("Successful OrderedStrings").ShouldEqual(10, 0, 0, 0);
        }

        [Test]
        public void Sentences()
        {
            running("Sentences").ShouldEqual(2, 2, 1, 1);
        }

        [Test]
        public void Currying()
        {
            running("Currying").ShouldEqual(1, 1, 0, 0);
        }

        [Test]
        public void importing_and_currying()
        {
            running("Importing and Currying").ShouldEqual(1, 1, 0, 0);
        }

        [Test]
        public void Set_with_Error()
        {
            running("Set with Error").ShouldEqual(0, 3, 1, 0);
        }

        [Test]
        public void Simple_Composite()
        {
            running("Simple Composite").ShouldEqual(2, 3, 0, 0);
        }

        [Test]
        public void Table_with_Errors()
        {
            running("Tables with Errors").ShouldEqual(0, 0, 2, 0);
        }

        [Test]
        public void Tables()
        {
            running("Tables").ShouldEqual(2, 2, 0, 5);
        }

        [Test]
        public void Unordered_Set()
        {
            running("Unordered Set").ShouldEqual(1, 3, 0, 1);
        }

        [Test]
        public void check_properties()
        {
            running("Check properties").ShouldEqual(3, 3, 0, 0);
        }

        [Test]
        public void service_grammars()
        {
            running("Services").ShouldEqual(1, 1, 0, 1);
        }

        [Test]
        public void successful_data_table_comparison()
        {
            running("Data Table Verification Happy Path").ShouldEqual(3, 0, 0, 0);
        }

        [Test]
        public void sad_path_data_table_comparison()
        {
            running("Data Table Verification Sad Path").ShouldEqual(2, 2, 0, 0);
        }

        [Test]
        public void data_table_comparison_with_overriden_matcher()
        {
            running("Data Table Verification with Overridden Matchers").ShouldEqual(2, 2, 0, 0);
        }
    }


    [TestFixture]
    public class JSonGrammarIntegrationTests
    {
        private ITestRunner runner;
        private Hierarchy hierarchy;

        [TestFixtureSetUp]
        public void SetUp()
        {
            runner = new TestRunner();
            hierarchy = DataMother.GrammarProject().LoadTests();
        }

        private Counts running(string name)
        {
            Test test = hierarchy.GetAllTests().FirstOrDefault(x => x.Name == name);

            string json = new TestWriter().WriteToJson(test);
            Test test2 = new TestReader().ReadFromJson(json);

            test2.ShouldNotBeNull();
            test2.LastResult = runner.RunTest(test2);

            //runner.WriteResults(test).OpenInBrowser();

            return test2.LastResult.Counts;
        }

        [Test]
        public void Cannot_find_fixture()
        {
            running("Test with Missing Fixture Name").ShouldEqual(0, 0, 0, 1);
        }

        [Test]
        public void cannot_find_grammar()
        {
            running("Test with Bad Grammar Name").ShouldEqual(0, 0, 3, 0);
        }

        [Test]
        public void Composite_with_errors()
        {
            running("Composite with Errors").ShouldEqual(2, 3, 1, 2);
        }

        [Test]
        public void decision_tables()
        {
            running("Decision Table").ShouldEqual(2, 2, 0, 0);
        }

        [Test]
        public void embeds()
        {
            running("Embeds").ShouldEqual(2, 1, 2, 1);
        }

        [Test]
        public void Facts()
        {
            running("Facts").ShouldEqual(2, 2, 1, 0);
        }

        [Test]
        public void Ordered_set()
        {
            running("Ordered Set").ShouldEqual(10, 7, 0, 1);
        }

        [Test]
        public void Ordered_string_set_failure()
        {
            running("Unsuccessful Ordering").ShouldEqual(4, 5, 0, 0);
        }

        [Test]
        public void Ordered_string_set_success()
        {
            running("Successful OrderedStrings").ShouldEqual(10, 0, 0, 0);
        }

        [Test]
        public void Sentences()
        {
            running("Sentences").ShouldEqual(2, 2, 1, 1);
        }

        [Test]
        public void Set_with_Error()
        {
            running("Set with Error").ShouldEqual(0, 3, 1, 0);
        }

        [Test]
        public void Simple_Composite()
        {
            running("Simple Composite").ShouldEqual(2, 3, 0, 0);
        }

        [Test]
        public void Table_with_Errors()
        {
            running("Tables with Errors").ShouldEqual(0, 0, 2, 0);
        }

        [Test]
        public void Tables()
        {
            running("Tables").ShouldEqual(2, 2, 0, 5);
        }

        [Test]
        public void Unordered_Set()
        {
            running("Unordered Set").ShouldEqual(1, 3, 0, 1);
        }
    }
}