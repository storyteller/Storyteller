using System.Windows;
using System.Windows.Controls;
using StoryTeller.UserInterface.Controls;

namespace StoryTeller.UserInterface.Queue
{
    /// <summary>
    /// Interaction logic for QueueView.xaml
    /// </summary>
    public partial class QueueView : UserControl, IQueueView
    {
        public QueueView()
        {
            InitializeComponent();
        }

        public QueueView(TestStatusBar bar)
            : this()
        {
            executing.Children.Add(bar);
        }

        #region IQueueView Members

        public bool NoTestsAreQueued { set { noTests.Visibility = value ? Visibility.Visible : Visibility.Hidden; } }

        public void AddTestItem(object item)
        {
            if (mainPanel.Children.Contains(item.As<UIElement>())) return;
            mainPanel.Children.Add(item.As<UIElement>());
        }

        public void RemoveTestItem(object item)
        {
            mainPanel.Children.Remove(item.As<UIElement>());
        }

        public void HideCurrentTest()
        {
            executing.Visibility = Visibility.Collapsed;
        }

        public void DisplayCurrentTest()
        {
            executing.Visibility = Visibility.Visible;
        }

        public QueuePresenter Presenter
        {
            set
            {
                stop.Click += (x, y) => value.AbortCurrentTest();
            }
        }

        #endregion
    }
}