using System.Windows;
using System.Windows.Controls;
using StoryTeller.UserInterface.Tests.Outline;

namespace StoryTeller.UserInterface.Tests
{
    /// <summary>
    /// Interaction logic for TestView.xaml
    /// </summary>
    public partial class TestView : UserControl, ITestView
    {
        public TestView()
        {
            InitializeComponent();
        }

        public void PlaceInMainPane(object view)
        {
            content.Content = view;
            view.As<UIElement>().Visibility = Visibility.Visible;
        }

        public void MarkAsExecuting()
        {
            IsEnabled = false;
        }

        public void MarkNotExecuting()
        {
            IsEnabled = true;
        }

        public ITestHeaderView Header { get { return header; } }
    }
}