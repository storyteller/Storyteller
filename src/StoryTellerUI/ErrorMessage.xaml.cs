using System.Windows;

namespace StoryTellerUI
{
    /// <summary>
    /// Interaction logic for ErrorMessage.xaml
    /// </summary>
    public partial class ErrorMessage : Window
    {
        public ErrorMessage()
        {
            InitializeComponent();
        }

        public string ErrorText { get { return errorText.Text; } set { errorText.Text = value; } }
    }
}