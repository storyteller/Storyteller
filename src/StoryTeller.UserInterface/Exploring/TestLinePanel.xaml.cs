using System.Windows;
using System.Windows.Controls;

namespace StoryTeller.UserInterface.Exploring
{
    /// <summary>
    /// Interaction logic for TestLine.xaml
    /// </summary>
    public partial class TestLinePanel : UserControl
    {
        public TestLinePanel()
        {
            InitializeComponent();
        }

        public TestLineControls CreateControls(Grid grid)
        {
            var controls = new TestLineControls
            {
                Icon = icon,
                Path = path,
                Run = run,
                Status = status
            };

            int rowIndex = grid.RowDefinitions.Count;
            grid.RowDefinitions.Add(new RowDefinition
            {
                Height = new GridLength(30)
            });


            mainPanel.Children.Remove(namePanel);
            grid.Add(namePanel, rowIndex, 0);

            mainPanel.Children.Remove(status);
            grid.Add(status, rowIndex, 1);

            return controls;
        }
    }
}