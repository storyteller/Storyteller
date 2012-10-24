using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;
using FubuCore;
using StoryTeller.Execution;

namespace StoryTeller.UserInterface.Controls
{
    /// <summary>
    /// Interaction logic for TestStatusBar.xaml
    /// </summary>
    public partial class TestStatusBar : UserControl, IListener<TestStatusMessage>
    {
        public TestStatusBar()
        {
            InitializeComponent();
        }

        public TestStatusBar(TestStatusMessage status)
            : this()
        {
            Handle(status);
        }

        public Grid ProgressArea { get { return progressArea; } }
        public ProgressBar ProgressBar { get { return progressBar; } }
        public TextBlock TestName { get { return testName; } }
        public Label Status { get { return status; } }

        #region IListener<TestStatusMessage> Members

        public void Handle(TestStatusMessage message)
        {
            if (message.IsRunning)
            {
                showRunningTest(message);
            }
            else
            {
                showCompletedTest(message);
            }
        }

        #endregion

        private void showRunningTest(TestStatusMessage message)
        {
            progressArea.Visibility = Visibility.Visible;
            progressBar.Maximum = message.TotalSteps;
            progressBar.Value = message.CompletedSteps;
            testName.Text = message.TestPath;

            status.Content = message.CurrentActivity;

            progressBar.ToolTip = "{0} / {1} ({2})".ToFormat(
                message.CompletedSteps,
                message.TotalSteps,
                message.Counts);

            progressBar.Foreground = new SolidColorBrush(message.GetColor());
        }

        private void showCompletedTest(TestStatusMessage message)
        {
            progressArea.Visibility = Visibility.Collapsed;

            if (message.WasCancelled)
            {
                status.Content = "{0} was cancelled".ToFormat(message.TestPath);
            }

            status.Content = message.Status.IsEmpty() ? string.Empty : "{0} {1}".ToFormat(message.TestPath, message.Status);
        }
    }

    public static class TestStatusMessageExtensions
    {
        public static Color GetColor(this TestStatusMessage message)
        {
            if (!message.Counts.HasResult()) return Colors.Silver;

            return message.Counts.WasSuccessful() ? Colors.LightGreen : Colors.LightPink;
        }
    }
}