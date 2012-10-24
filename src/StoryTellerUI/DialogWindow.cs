using System;
using System.Windows;
using StoryTeller.UserInterface;

namespace StoryTellerUI
{
    public class DialogWindow : Window
    {
        static DialogWindow()
        {
            WindowStyleProperty.OverrideMetadata(typeof (DialogWindow), new FrameworkPropertyMetadata(WindowStyle.None));
            ShowActivatedProperty.OverrideMetadata(typeof (DialogWindow), new FrameworkPropertyMetadata(false));
            ShowInTaskbarProperty.OverrideMetadata(typeof (DialogWindow), new FrameworkPropertyMetadata(false));
            ResizeModeProperty.OverrideMetadata(typeof (DialogWindow),
                                                new FrameworkPropertyMetadata(ResizeMode.NoResize));
        }

        public DialogWindow(FrameworkElement content, Window owner)
            : this(content, owner, calculateStartup(content, owner))
        {
        }

        public DialogWindow(FrameworkElement content, Window owner, Point position)
        {
            Owner = owner;
            Top = position.Y;
            Left = position.X;

            WindowStyle = WindowStyle.None;
            ResizeMode = ResizeMode.NoResize;
            SizeToContent = SizeToContent.WidthAndHeight;
            Content = content;
        }

        private static Point calculateStartup(FrameworkElement content, Window owner)
        {
            int top = Math.Floor(owner.Height/4).Zeroed();
            double left = Math.Floor(owner.Width/2) - content.Width.Zeroed();

            var relative = new Point(top, left);
            return relative;
            
            //return owner.PointToScreen(relative);
        }
    }
}