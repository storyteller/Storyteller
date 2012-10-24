using System.Windows;
using System.Windows.Controls;
using StoryTeller.UserInterface.Dialogs;

namespace StoryTeller.UserInterface.Projects
{
    /// <summary>
    /// Interaction logic for BinaryFailure.xaml
    /// </summary>
    public partial class BinaryFailure : UserControl, ICommandDialog<IBinaryFailureHandler>
    {
        public BinaryFailure()
        {
            InitializeComponent();
        }

        public BinaryFailure(IBinaryFailureHandler handler)
            : this()
        {
            errorText.Text = handler.ErrorText;


            retry.Click += (x, y) =>
            {
                handler.Retry();
                Parent.As<Window>().Close();
            };

            close.Click += (x, y) => Parent.As<Window>().Close();
        }

        #region ICommandDialog<IBinaryFailureHandler> Members

        public string Title { get { return "Binary Recycle Failure!"; } }

        #endregion
    }
}