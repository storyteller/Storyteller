using System;
using System.Windows;

namespace StoryTeller.UserInterface
{
    public class MainWindow : Window
    {
        public MainWindow(IApplicationShell shell)
        {
            Content = shell;

            CanClose = (() => true);
            Closing += (s, e) => e.Cancel = !CanClose();

            Closed += (s, e) => Application.Current.Shutdown();

            WindowStartupLocation = WindowStartupLocation.CenterOwner;
            WindowState = WindowState.Maximized;
            Height = 800;
            Width = 1200;
        }

        public Func<bool> CanClose { get; set; }
    }
}