using HtmlTags;
using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Model;

namespace StoryTeller.Testing.Engine
{
    [TestFixture]
    public class when_embedded_section_accepts_visitor
    {
        [Test]
        public void should_call_the_embedded_section_method()
        {
            var visitor = MockRepository.GenerateMock<IGrammarVisitor>();
            var step = new Step();
            var section = new EmbeddedSection();

            section.AcceptVisitor(visitor, step);

            visitor.AssertWasCalled(x => x.EmbeddedSection(section, step));
        }
    }

    [TestFixture]
    public class EmbeddedSectionsTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            test =
                TestUtility.ReadTest(
                    @"
<Test name='some test'>
    <EmbeddedSection>
        <Grammar1 />
        <DoSomeArithmetic>
            <Arithmetic>
                <StartWith starting='100' />
                <MultiplyBy multiplier='2' />
                <TheValueShouldBe expected='200' />
                <Subtract operand='50' />
                <TheValueShouldBe expected='150' />
                <Throw />
                <TheValueShouldBe expected='1' />
            </Arithmetic>
        </DoSomeArithmetic>
        <Grammar2 />
    </EmbeddedSection>

</Test>


");

            runner = new TestRunner();
                
        }

        #endregion

        private ITestRunner runner;
        private Test test;

        [Test]
        public void run_test()
        {
            runner.RunTest(test);
            test.LastResult.Counts.ShouldEqual(2, 1, 1, 0);
        }

        [Test]
        public void smoke_test_writing_preview()
        {
            string html = runner.WritePreview(test).ToString();
            html.ShouldContain("Do some Arithmetic");
        }

        [Test]
        public void smoke_test_writing_the_results()
        {
            runner.RunTest(test);
            test.LastResult.Html.ShouldContain(new Counts
            {
                Rights = 2,
                Exceptions = 1,
                Wrongs = 1
            }.ToString());
        }
    }

    public class EmbeddedSectionFixture : Fixture
    {
        public EmbeddedSectionFixture()
        {
            this["DoSomeArithmetic"] = Embed<ArithmeticFixture>("Do some Arithmetic");
        }

        public void Grammar1()
        {
        }

        public void Grammar2()
        {
        }
    }
}