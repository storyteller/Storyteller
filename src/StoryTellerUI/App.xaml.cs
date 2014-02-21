using System;
using System.Collections;
using System.Collections.Generic;
using System.Windows;
using System.Windows.Threading;
using FubuCore.CommandLine;
using StoryTeller;
using StoryTeller.CommandLine;
using StoryTeller.ProjectUtils;
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
                var controller = ObjectFactory.GetInstance<IProjectController>();

                var args = ArgPreprocessor.Process(e.Args);
                var queue = new Queue<string>(args);
                var input = new RunCommand().Usages.BuildInput(queue).As<RunInput>();
                var project = ProjectLoader.Load(input.Path, input.CompileFlag, input.ProfileFlag);

                controller.StartNewProject(project);
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
