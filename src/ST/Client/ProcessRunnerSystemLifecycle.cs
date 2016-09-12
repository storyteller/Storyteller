using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Baseline;
using Oakton;
using StoryTeller;
using StoryTeller.Engine.Batching;
using StoryTeller.Engine.UserInterface;
using StoryTeller.Messages;
using StoryTeller.Remotes;

namespace ST.Client
{
    public class ProcessRunnerSystemLifecycle : ISystemLifecycle
    {
        private readonly Project _project;
        private Process _process;

        public ProcessRunnerSystemLifecycle(Project project)
        {
            _project = project;
        }

        public void AssertValid()
        {
            // Nothing
        }

        public void Teardown()
        {
            _process?.Kill();
        }

        public void Start()
        {
            var start = new ProcessStartInfo();
            start.UseShellExecute = true;
            start.CreateNoWindow = false;
            start.WorkingDirectory = _project.ProjectPath.ToFullPath();

            start.FileName = "dotnet";
            start.Arguments = $"run -- {_project.Port}";

            _process = Process.Start(start);

        }
    }








}