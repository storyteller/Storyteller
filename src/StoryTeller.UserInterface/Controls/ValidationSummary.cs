using System.Windows.Controls;
using System.Windows.Media;
using ShadeTree.Validation;
using StoryTeller.Workspace;

namespace StoryTeller.UserInterface.Controls
{
    public class ValidationSummary : StackPanel
    {
        public ValidationSummary()
        {
            Background = new SolidColorBrush(Colors.White);
        }

        public void ShowMessages(ProjectValidationMessages notification)
        {
            Children.Clear();

            foreach (string message in notification.Messages)
            {

                Children.Add(new Label
                {
                    Content = message,
                    Foreground = new SolidColorBrush(Colors.Red)
                });
            }
        }
    }
}