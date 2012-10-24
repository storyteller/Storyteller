using HtmlTags;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;

namespace StoryTeller.Testing.Engine
{
    [TestFixture]
    public class TableGrammarTestRunningTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            test =
                TestUtility.ReadTest(
                    @"
<Test name='a test'>
    <Adding>
        <AddNumbersTogether>
            <Rows>
                <AddNumbersTogether x='1' y='2' sum='3'/>
                <AddNumbersTogether x='3' y='2' sum='5'/>
                <AddNumbersTogether x='2' y='2' sum='4'/>
                <AddNumbersTogether x='5' y='2' sum='7'/>
                <AddNumbersTogether x='10' y='2' sum='12'/>
                <AddNumbersTogether x='1' y='2' sum='4'/>
                <AddNumbersTogether x='3' y='2' sum='3'/>
                <AddNumbersTogether x='1' y='2' sum='3'/>
                <AddNumbersTogether x='1' y='2' sum='3'/>
            </Rows>
        </AddNumbersTogether>
    </Adding>

</Test>
");


            test2 =
                TestUtility.ReadTest(
                    @"
<Test name='a test'>
    <Adding>
        <AddNumbersTable>
            <Rows>
                <AddNumbersTogether2 x='1' y='2' sum='3'/>
                <AddNumbersTogether2 x='3' y='2' sum='5'/>
                <AddNumbersTogether2 x='2' y='2' sum='4'/>
                <AddNumbersTogether2 x='5' y='2' sum='7'/>
                <AddNumbersTogether2 x='10' y='2' sum='12'/>
                <AddNumbersTogether2 x='1' y='2' sum='4'/>
                <AddNumbersTogether2 x='3' y='2' sum='3'/>
                <AddNumbersTogether2 x='1' y='2' sum='3'/>
                <AddNumbersTogether2 x='1' y='2' sum='3'/>
            </Rows>
        </AddNumbersTable>
    </Adding>

</Test>
");


            runner = new TestRunner();
        }

        #endregion

        private Test test;
        private ITestRunner runner;
        private Test test2;

        [Test]
        public void run_the_test_and_get_the_counts()
        {
            runner.RunTest(test);
            test.LastResult.Counts.ShouldEqual(7, 2, 0, 0);
        }

        [Test]
        public void run_the_test_and_get_the_counts_with_the_grammar_expressed_in_dsl()
        {
            runner.RunTest(test2);
            test2.LastResult.Counts.ShouldEqual(7, 2, 0, 0);
        }

        [Test]
        public void smoke_test_the_preview()
        {
            HtmlDocument preview = runner.WritePreview(test);
            string html = preview.ToString();
            html.ShouldContain("Add numbers");
        }

        [Test]
        public void smoke_test_the_results()
        {
            runner.RunTest(test);
            test.LastResult.Html.ToString().ShouldContain(new Counts
            {
                Rights = 7,
                Wrongs = 2
            }.ToString());
        }
    }

    public class AddingFixture : Fixture
    {
        public AddingFixture()
        {
            // This creates a TableGrammar using the AddNumbersTogether2() method
            this["AddNumbersTable"] =
                this["AddNumbersTogether2"].AsTable("Add some numbers together and see what happens");
        }

        [ExposeAsTable("Add numbers", "Rows")]
        [return: AliasAs("sum")]
        public int AddNumbersTogether(int x, int y)
        {
            return x + y;
        }

        [return: AliasAs("sum")]
        public int AddNumbersTogether2(int x, int y)
        {
            return x + y;
        }
    }
}