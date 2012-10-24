using System.Collections.Generic;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Engine.Sets;
using System.Linq;
using StoryTeller.Html;
using StoryTeller.Model;
using StoryTeller.Persistence;
using TestContext = StoryTeller.Engine.TestContext;

namespace StoryTeller.Testing.Engine.Sets
{
    [TestFixture]
    public class StringComparerTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            comparer = new StringSetComparer();
        }

        #endregion

        private StringSetComparer comparer;

        [Test]
        public void returns_itself_as_the_only_property()
        {
            comparer.Columns.Count().ShouldEqual(1);
            comparer.Columns.First().ShouldBeTheSameAs(comparer);
        }

        [Test]
        public void get_cells_gets_one_cell_with_string_and_step_name_looking_for_expected()
        {
            comparer.Cell.ShouldEqual(Cell.For<string>(StringSetComparer.EXPECTED));
        }

        [Test]
        public void when_creating_the_expected_row()
        {
            var step = new Step("something");
            step.Set(StringSetComparer.EXPECTED, "some text");

            var row = new SetRow();

            comparer.ReadExpected(new TestContext(), step, row);

            row.Values[StringSetComparer.EXPECTED].ShouldEqual("some text");
        }

        [Test]
        public void when_creating_the_actual_row()
        {
            var row = new SetRow();

            comparer.ReadActual("some text", row);

            row.Values[StringSetComparer.EXPECTED].ShouldEqual("some text");
        }

        [Test]
        public void run_integrated_fail_with_extra_data()
        {
            Test test =
                TestUtility.RunTest(
                    @"
<Test name='a test'>
    <StringCompare>
    <CheckList>
      <Rows>
        <Row expected='a' />
        <Row expected='b' />
      </Rows>
    </CheckList>

    </StringCompare>

</Test>

");

            test.LastResult.Counts.ShouldEqual(2, 1, 0, 0);
        }

        [Test]
        public void run_integrated_fail_with_missing_data()
        {
            Test test =
                TestUtility.RunTest(
                    @"
<Test name='a test'>
    <StringCompare>
    <CheckList>
      <Rows>
        <Row expected='a' />
        <Row expected='b' />
        <Row expected='c' />
        <Row expected='d' />
      </Rows>
    </CheckList>

    </StringCompare>

</Test>

");
            test.LastResult.Counts.ShouldEqual(3, 1, 0, 0);
        }

        [Test]
        public void run_integrated_success()
        {
            Test test =
                TestUtility.RunTest(
                    @"
<Test name='a test'>
    <StringCompare>
    <CheckList>
      <Rows>
        <Row expected='a' />
        <Row expected='b' />
        <Row expected='c' />
      </Rows>
    </CheckList>

    </StringCompare>

</Test>

");
            test.LastResult.Counts.ShouldEqual(3, 0, 0, 0);
        }


    }

    public class StringCompareFixture : Fixture
    {
        public StringCompareFixture()
        {
            this["CheckList"] = VerifyStringList(LoadList1).Titled("The strings").Grammar();
        }

        public string[] LoadList1(ITestContext context)
        {
            return new[] { "a", "b", "c" };
        }
    }

    public static class StepExtensions
    {
        public static IEnumerable<IStep> ToEnumerable(this IStep step)
        {
            return new[] { step };
        }
    }
}