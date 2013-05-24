using System;
using System.Windows.Controls;
using System.Windows.Media;
using FubuCore;
using StoryTeller.Execution;
using StoryTeller.UserInterface.Projects;
using StoryTeller.UserInterface.Screens;
using StructureMap.Attributes;

namespace StoryTeller.UserInterface.Controls
{
    /// <summary>
    /// Interaction logic for StatusBar.xaml
    /// </summary>
    public partial class StoryTellerStatusBar : UserControl, IStatusView
    {
        private StatusPresenter _presenter;

        public StoryTellerStatusBar()
        {
            InitializeComponent();

            syntaxErrorsLink.Click += (o, e) => _presenter.SyntaxErrorSelected();
            queuedLink.Click += (o, e) => _presenter.ShowQueue();
            failureLink.WireUp("Fixture Recycle Failed!", () => new OpenBinaryFailureDialog());
        }

        [SetterProperty]
        public TestStatusBar TestStatus
        {
            set
            {
                if (value.Parent != null) return;
                testStatusHolder.Content = value;
            }
        }

        #region IStatusView Members

        public void SyntaxErrorCount(int count)
        {
            if (count == 0)
            {
                statusBar.Background = Brushes.DefaultColor;
                syntaxErrors.Text = "No syntax errors";
            }
            else
            {
                statusBar.Background = Brushes.NegativeColor;
                syntaxErrors.Text = "{0} syntax error(s)".ToFormat(count);
            }
        }

        public StatusPresenter Presenter { set { _presenter = value; } }

        public string QueueMessage { set { queued.Text = value; } }

        public void MarkCycleTime(DateTime time, bool success)
        {
            cycleItem.Show();
            cycleTime.Text = "Recycled at " + time.ToLongTimeString();

            failureItem.Visibility = success ? System.Windows.Visibility.Collapsed : System.Windows.Visibility.Visible;
        }

        public void ShowRecycleStarted()
        {
            cycleItem.Hide();
        }


        #endregion
    }
}