using System.Windows.Controls;
using StoryTeller.Domain;
using StoryTeller.UserInterface.Running;

namespace StoryTeller.UserInterface.Queue
{
    /// <summary>
    /// Interaction logic for QueuedTestItem.xaml
    /// </summary>
    public partial class QueuedTestItem : UserControl
    {
        public QueuedTestItem()
        {
            InitializeComponent();
        }

        public QueuedTestItem(Test test, IExecutionQueue queue, IScreenConductor shell)
            : this()
        {
            linkText.Content = test.LocatorPath();
            link.Click += (x, y) => shell.OpenScreen(test);
            stop.Click += (x, y) => queue.Cancel(test);
        }
    }
}