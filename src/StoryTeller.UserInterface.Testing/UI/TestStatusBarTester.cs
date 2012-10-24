using System.Windows;
using System.Windows.Media;
using FubuCore;
using NUnit.Framework;
using StoryTeller.Engine;
using StoryTeller.Execution;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Controls;

namespace StoryTeller.UserInterface.Testing.UI
{
    [TestFixture]
    public class when_presenting_a_status_for_an_executing_test_with_only_success : TestStatusBarContext
    {
        protected override void theStatusIs(TestStatusMessage message)
        {
            message.Counts = new Counts
            {
                Rights = 5
            };
            message.Counts.WasSuccessful().ShouldBeTrue();

            message.CompletedSteps = 5;
            message.TotalSteps = 15;
            message.TestPath = "the path of something";
            message.CurrentActivity = "the current activity";
            message.IsRunning = true;
        }


        [Test]
        public void the_progress_bar_foreground_should_be_light_green()
        {
            theBar.ProgressBar.Foreground.ShouldBeOfType<SolidColorBrush>().Color.ShouldEqual(Colors.LightGreen);
        }
    }

    [TestFixture]
    public class when_presenting_the_status_when_no_test_is_running_with_previous_results : TestStatusBarContext
    {
        protected override void theStatusIs(TestStatusMessage message)
        {
            message.IsRunning = false;
            message.TestPath = "Suite/Child/Test1";
            message.Status = "the last status";
        }

        [Test]
        public void the_progress_area_should_be_collapsed()
        {
            theBar.ProgressArea.Visibility.ShouldEqual(Visibility.Collapsed);
        }

        [Test]
        public void the_status_should_be_show_the_test_name_and_status()
        {
            theBar.Status.Content.ShouldEqual("{0} {1}".ToFormat(theStatus.TestPath, theStatus.Status));
        }
    }

    [TestFixture]
    public class when_presenting_the_status_when_no_test_is_running_and_no_test_status : TestStatusBarContext
    {
        protected override void theStatusIs(TestStatusMessage message)
        {
            message.IsRunning = false;
            message.TestPath = null;
        }

        [Test]
        public void the_progress_area_should_be_collapsed()
        {
            theBar.ProgressArea.Visibility.ShouldEqual(Visibility.Collapsed);
        }

        [Test]
        public void the_status_should_be_empty()
        {
            (theBar.Status.Content as string).ShouldBeEmpty();
        }
    }


    [TestFixture]
    public class when_presenting_a_status_for_an_executing_test_with_a_failure : TestStatusBarContext
    {
        protected override void theStatusIs(TestStatusMessage message)
        {
            message.Counts = new Counts
            {
                Wrongs = 5
            };
            message.CompletedSteps = 5;
            message.TotalSteps = 15;
            message.TestPath = "the path of something";
            message.CurrentActivity = "the current activity";
            message.IsRunning = true;
        }

        [Test]
        public void the_activity_should_be_displayed()
        {
            theBar.Status.Visibility.ShouldEqual(Visibility.Visible);
            theBar.Status.Content.ShouldEqual(theStatus.CurrentActivity);
        }

        [Test]
        public void the_progress_area_should_be_visible()
        {
            theBar.ProgressArea.Visibility.ShouldEqual(Visibility.Visible);
        }

        [Test]
        public void the_progress_bar_foreground_should_be_light_pink()
        {
            theBar.ProgressBar.Foreground.ShouldBeOfType<SolidColorBrush>().Color.ShouldEqual(Colors.LightPink);
        }

        [Test]
        public void the_test_name_should_be_the_path_from_the_status()
        {
            theBar.TestName.Text.ShouldEqual(theStatus.TestPath);
        }

        [Test]
        public void the_tool_tip_of_the_progress_bar()
        {
            string expected = "{0} / {1} ({2})".ToFormat(theStatus.CompletedSteps, theStatus.TotalSteps,
                                                         theStatus.Counts);


            theBar.ProgressBar.ToolTip.ShouldEqual(expected);
        }

        [Test]
        public void the_total_of_the_progress_bar_is_the_total_steps_from_the_message()
        {
            theBar.ProgressBar.Maximum.ShouldEqual(theStatus.TotalSteps);
        }

        [Test]
        public void the_value_of_the_progress_bar_is_the_completed_steps_from_the_message()
        {
            theBar.ProgressBar.Value.ShouldEqual(theStatus.CompletedSteps);
        }
    }

    [TestFixture]
    public class when_presenting_a_status_for_an_executing_test_with_no_rights_wrongs_or_exceptions :
        TestStatusBarContext
    {
        protected override void theStatusIs(TestStatusMessage message)
        {
            message.Counts = new Counts();
            message.CompletedSteps = 5;
            message.TotalSteps = 15;
            message.TestPath = "the path of something";
            message.CurrentActivity = "the current activity";
            message.IsRunning = true;
        }

        [Test]
        public void the_activity_should_be_displayed()
        {
            theBar.Status.Visibility.ShouldEqual(Visibility.Visible);
            theBar.Status.Content.ShouldEqual(theStatus.CurrentActivity);
        }

        [Test]
        public void the_progress_area_should_be_visible()
        {
            theBar.ProgressArea.Visibility.ShouldEqual(Visibility.Visible);
        }

        [Test]
        public void the_progress_bar_foreground_should_be_silver()
        {
            theBar.ProgressBar.Foreground.ShouldBeOfType<SolidColorBrush>().Color.ShouldEqual(Colors.Silver);
        }

        [Test]
        public void the_test_name_should_be_the_path_from_the_status()
        {
            theBar.TestName.Text.ShouldEqual(theStatus.TestPath);
        }

        [Test]
        public void the_tool_tip_of_the_progress_bar()
        {
            string expected = "{0} / {1} ({2})".ToFormat(theStatus.CompletedSteps, theStatus.TotalSteps,
                                                         theStatus.Counts);


            theBar.ProgressBar.ToolTip.ShouldEqual(expected);
        }

        [Test]
        public void the_total_of_the_progress_bar_is_the_total_steps_from_the_message()
        {
            theBar.ProgressBar.Maximum.ShouldEqual(theStatus.TotalSteps);
        }

        [Test]
        public void the_value_of_the_progress_bar_is_the_completed_steps_from_the_message()
        {
            theBar.ProgressBar.Value.ShouldEqual(theStatus.CompletedSteps);
        }
    }


    public abstract class TestStatusBarContext
    {
        protected TestStatusBar theBar;
        protected TestStatusMessage theStatus;

        [SetUp]
        public void SetUp()
        {
            theStatus = new TestStatusMessage();
            theStatusIs(theStatus);

            theBar = new TestStatusBar(theStatus);
        }

        protected abstract void theStatusIs(TestStatusMessage message);
    }
}