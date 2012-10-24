using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;

namespace StoryTeller.UserInterface.Dialogs
{
    public class Dialog : Window
    {
        public Dialog(Window top, ICommandDialog child)
        {
            //This is necessary because on startup we won't have shown the parent window yet.  Just set the parent to null.
            Owner = top.IsVisible ? top : null;

            ResizeMode = ResizeMode.CanResizeWithGrip;
            SizeToContent = SizeToContent.WidthAndHeight;
            //WindowStartupLocation = Owner == null ? System.Windows.WindowStartupLocation.CenterScreen : WindowStartupLocation.CenterOwner;
            WindowStartupLocation = WindowStartupLocation.Manual;
            
            SetResourceReference(BackgroundProperty, "WindowBackgroundBrush");
            ShowInTaskbar = false;

            Title = child.Title;
            Content = child;

            this.SetValue(Panel.ZIndexProperty, 1000);

            Closed += new System.EventHandler(Dialog_Closed);
        }

        void Dialog_Closed(object sender, System.EventArgs e)
        {
            Content = null;
        }
    }
}