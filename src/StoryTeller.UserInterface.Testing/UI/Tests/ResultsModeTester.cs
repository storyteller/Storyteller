using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Tests;

namespace StoryTeller.UserInterface.Testing.UI.Tests
{
    [TestFixture]
    public class ResultsModeTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            mode = new ResultsMode(null, null);
        }

        #endregion

        private ResultsMode mode;

        [Test]
        public void is_enabled_when_the_test_has_a_last_result()
        {
            mode.IsEnabled(StoryTeller.Testing.DataMother.SuccessfulTest()).ShouldBeTrue();
        }

        [Test]
        public void is_enabled_when_the_test_has_no_result()
        {
            mode.IsEnabled(StoryTeller.Testing.DataMother.TestWithNoResults()).ShouldBeFalse();
        }
    }

    [TestFixture]
    public class ResultsMode_invalid_test_results_tester
    {
        private ResultsMode mode;
        private HtmlView view;
        private Test test;
        private TestResult result;

        [SetUp]
        public void SetUp()
        {
            view = new HtmlView();
            test = new Test("test");
            result = new TestResult();
            test.LastResult = result;
            mode = new ResultsMode(view, test);
        }

        [Test]
        public void should_handle_when_there_is_no_html_and_exception_is_present()
        {
            result.ExceptionText = "test exception text";
            mode.Refresh();
            view.Html.ShouldContain(result.ExceptionText);
        }

        [Test]
        public void should_handle_when_there_is_no_html_and_no_exception_is_present()
        {
            mode.Refresh();
            view.Html.ShouldContain("error details aren't available (LastResult.ExceptionText is null)");
        }
    }
}