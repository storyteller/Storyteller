using NUnit.Framework;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Editing;

namespace StoryTeller.UserInterface.Testing.UI.Editing
{
    [TestFixture]
    public class VersionHistoryTester
    {
        private VersionHistory history;

        [SetUp]
        public void SetUp()
        {
            history = new VersionHistory();
        }

        [Test]
        public void record_the_first_version()
        {
            history.Record("a");

            history.CanGoBack.ShouldBeFalse();
            history.CanGoForward.ShouldBeFalse();
            history.Current.ShouldEqual("a");
        }

        [Test]
        public void record_two_versions_and_check_state()
        {
            history.Record("a");
            history.Record("b");

            history.CanGoBack.ShouldBeTrue();
            history.CanGoForward.ShouldBeFalse();
            history.Current.ShouldEqual("b");
        }

        [Test]
        public void record_two_versions_and_go_back()
        {
            history.Record("a");
            history.Record("b");

            history.Revert();
            history.CanGoBack.ShouldBeFalse();
            history.CanGoForward.ShouldBeTrue();
        }

        [Test]
        public void record_four_versions_and_go_backward_and_forward()
        {
            history.Record("a");
            history.Record("b");
            history.Record("c");
            history.Record("d");

            history.Revert();
            history.Current.ShouldEqual("c");
            history.CanGoBack.ShouldBeTrue();
            history.CanGoForward.ShouldBeTrue();

            history.Forward();
            history.Current.ShouldEqual("d");
            history.CanGoBack.ShouldBeTrue();
            history.CanGoForward.ShouldBeFalse();
        }

        [Test]
        public void go_back_then_record_a_new_version_clears_forward()
        {
            history.Record("a");
            history.Record("b");
            history.Record("c");

            history.Revert();

            history.Record("d");

            history.CanGoForward.ShouldBeFalse();

            history.Revert();
            history.Current.ShouldEqual("b");
        }
    }
}