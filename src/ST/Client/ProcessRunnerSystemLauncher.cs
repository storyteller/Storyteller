using System;
using System.Diagnostics;
using System.Threading.Tasks;
using Baseline;
using Oakton;
using StoryTeller;
using StoryTeller.Engine;
using StoryTeller.Remotes.Messaging;

namespace ST.Client
{
    public class ProcessRunnerSystemLauncher : ISystemLauncher, IListener<AgentReady>
    {
        private readonly Project _project;
        private Process _process;
        private IRemoteController _controller;

        public ProcessRunnerSystemLauncher(Project project)
        {
            _project = project;

            EventAggregator.Messaging.AddListener(this);
        }

        public void AssertValid()
        {
            // Nothing
        }

        public void Teardown()
        {
            _controller.SendMessage(new Shutdown());

            _process.WaitForExit(5000);

            ConsoleWriter.Write("Shut down the spec running process at " + _project.ProjectPath);
        }

        public void Start(IRemoteController remoteController)
        {
            _controller = remoteController;

            var start = new ProcessStartInfo();
            start.UseShellExecute = true;
            start.CreateNoWindow = false;
            start.WorkingDirectory = _project.ProjectPath.ToFullPath();

            start.FileName = "dotnet";

#if NET46
            var framework = "NET46";
#else
            var framework = AppContext.TargetFrameworkName;
#endif


            // TODO -- need to lock this down somehow
            start.Arguments = $"run --framework {framework} -- {_project.Port}";

            _process = Process.Start(start);
        }

        public void Receive(AgentReady message)
        {
            ConsoleWriter.Write(ConsoleColor.Cyan, $"Agent ready at {_project.Port}.");
            _controller.SendMessage(new StartProject { Project = _project });

        }
    }
}