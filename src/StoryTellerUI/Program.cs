using System;
using System.Windows;
using System.Windows.Threading;
using StoryTeller.UserInterface;

namespace StoryTellerUI
{
    public class Program
    {
        //[STAThread]
        //public static void Main(params string[] args)
        //{
        //    Window window = Bootstrapper.BootstrapShell();
        //    window.Title = "StoryTeller";



        //    var application = new Application();

        //    Uri resourceLocater = new Uri("/StoryTellerUI;component/ExpressionLight.xaml", UriKind.Relative);
        //    Application.LoadComponent(resourceLocater);


        //    application.DispatcherUnhandledException += application_DispatcherUnhandledException;

        //    application.Run(window);
        //}

        private static void application_DispatcherUnhandledException(object sender,
                                                                     DispatcherUnhandledExceptionEventArgs e)
        {
            var errorMessage = new ErrorMessage
            {
                ErrorText = e.Exception.ToString()
            };

            errorMessage.ShowDialog();
        }
    }
}