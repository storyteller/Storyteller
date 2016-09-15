using System;
using System.Diagnostics;
using System.IO;
using System.Threading.Tasks;
using Baseline;
using Oakton;
using StoryTeller;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Remotes;
using StoryTeller.Remotes.Messaging;

namespace ST.Client
{
    public class ProcessRunnerSystemLauncher : ISystemLauncher, IListener<AgentReady>
    {
        private readonly Project _project;
        private Process _process;
        private IRemoteController _controller;
        private string _command;
        private bool _agentReady;
        private readonly object _readyLock = new object();

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
            if (_process == null) return;

            _controller.SendMessage(new Shutdown());

            _process.WaitForExit(5000);

            if (!_process.HasExited)
            {
                _process?.Kill();
            }
            
            ConsoleWriter.Write($"Shut down the spec running process at {_project.ProjectPath} with exit code {_process.ExitCode}");

            _process = null;
        }

        public void Start(IRemoteController remoteController)
        {
            _controller = remoteController;

            // Watch UseShellExecute.
            var start = new ProcessStartInfo
            {
                UseShellExecute = false,
                WorkingDirectory = _project.ProjectPath.ToFullPath(),
                FileName = "dotnet"
            };




#if NET46
            var framework = "NET46";
#else
            var framework = AppContext.TargetFrameworkName;
#endif


            // TODO -- need to lock this down somehow
            start.Arguments = $"run --framework {framework} -- {_project.Port}";

            _command = $"dotnet {start.Arguments}";

            _process = Process.Start(start);
            _process.Exited += _process_Exited;

            lock (_readyLock)
            {
                _agentReady = false;
            }

            Task.Delay(5.Seconds()).ContinueWith(t =>
            {
                lock (_readyLock)
                {
                    if (!_agentReady)
                    {
                        // TODO -- send a timeout message here.
                    }
                }

                if (_process.HasExited)
                {
                    sendFailedToStartMessage();
                }
            });

            if (_process.HasExited)
            {
                sendFailedToStartMessage();
            }
        }

        private void sendFailedToStartMessage()
        {
            var message = new SystemRecycled
            {
                success = false,
                fixtures = new FixtureModel[0],
                system_name = "Unknown",
                system_full_name = "Unknown",
                name = Path.GetFileName(AppContext.BaseDirectory),
                error = $"Unable to start process '{_command}'"
            };

            EventAggregator.SendMessage(message);
        }

        private void _process_Exited(object sender, EventArgs e)
        {
            if (_process.ExitCode != 0)
            {
                sendFailedToStartMessage();
            }
            
            

        }

        public void Receive(AgentReady message)
        {
            lock (_readyLock)
            {
                _agentReady = true;
            }

            ConsoleWriter.Write($"Agent ready at {_project.Port}.");
            _controller.SendMessage(new StartProject { Project = _project });

        }
    }
}