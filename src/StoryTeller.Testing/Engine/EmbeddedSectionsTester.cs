using HtmlTags;
using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Model;

namespace StoryTeller.Testing.Engine
{

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