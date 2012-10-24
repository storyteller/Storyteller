using System.Windows;

namespace StoryTeller.UserInterface.Recycling
{
    /// <summary>
    /// Interaction logic for BinaryRecyclingDialog.xaml
    /// </summary>
    public partial class BinaryRecyclingDialog : Window, IBinaryRecyclingDialog
    {
        public BinaryRecyclingDialog()
        {
            InitializeComponent();
            Hide();
        }

        public void Start()
        {
            Topmost = true;
            Show();
            ShowProgress(100, 0, "Starting to read fixtures");
        }

        public void ShowMessage(string text)
        {
            progressText.Text = text;
        }

        public void ShowProgress(int total, int index, string fixtureName)
        {
            progressBar.Maximum = total;
            progressBar.Value = index;
            progressText.Text = fixtureName;
        }
    }
}