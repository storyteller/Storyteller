using System;
using System.Windows;
using System.Windows.Threading;
using StoryTeller;
using StoryTeller.UserInterface;
using StoryTeller.UserInterface.Projects;
using StoryTeller.Workspace;
using StructureMap;

namespace StoryTellerUI
{
    /// <summary>
    /// Interaction logic for App.xaml
    /// </summary>
    public partial class App : Application
    {


        protected override void OnStartup(StartupEventArgs e)
        {
            var application = Application.Current;
            Window window = Bootstrapper.BootstrapShell(true);
            window.Title = "StoryTeller";

            application.DispatcherUnhandledException += application_DispatcherUnhandledException;

            window.Show();

            if (e.Args.Length > 0)
            {
                var projectFile = e.Args[0];
                ObjectFactory.GetInstance<IProjectController>().LoadProject(new ProjectToken()
                {
                    Filename = projectFile
                });
            }

            //application.Run(window);
        }

        private static void application_DispatcherUnhandledException(object sender,
                                                                     DispatcherUnhandledExceptionEventArgs e)
        {
            ObjectFactory.GetInstance<IEventAggregator>().SendMessage(new ForceEnvironmentRecycle());

            var errorMessage = new ErrorMessage
            {
                ErrorText = e.Exception.ToString()
            };

            errorMessage.ShowDialog();

            e.Handled = true;
        }
    }
}
