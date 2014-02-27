using System;
using System.Collections.Generic;
using System.Diagnostics;
using FubuCore;
using FubuCore.CommandLine;
using StoryTeller.Execution;
using StoryTeller.ProjectUtils;

namespace StoryTeller.CommandLine
{
    [CommandDescription("Dumps the html preview for documentation efforts")]
    public class SpecsCommand : FubuCommand<SpecsInput>
    {
        public override bool Execute(SpecsInput input)
        {
            var fileSystem = new FileSystem();

            var project = ProjectLoader.Load(input.Path, input.CompileFlag, input.ProfileFlag);
            Console.WriteLine("Writing specifications for project {0} to {1}", project.Name, input.ResultsPath);

            fileSystem.DeleteDirectory(input.ResultsPath);
            fileSystem.CreateDirectory(input.ResultsPath);

            var runner = new ProjectTestRunner(project);

            var summary = new PreviewSummary(input.TitleFlag ?? project.Name);

            var tests = input.WorkspaceFlag.IsEmpty()
                ? runner.Hierarchy.GetAllTests()
                : runner.Hierarchy.FindSuite(input.WorkspaceFlag).GetAllTests();

            tests.Each(test => {
                var html = runner.WritePreview(test);
                var relativePath = test.LocatorPath() + ".htm";

                var specPath = input.ResultsPath.AppendPath(relativePath);
                Console.WriteLine("Writing " + specPath);

                fileSystem.WriteStringToFile(specPath, html);
                summary.AddTest(test, relativePath);
            });

            var indexPath = input.ResultsPath.AppendPath("index.htm");
            summary.WriteToFile(indexPath);
            Console.WriteLine("Index is at " + indexPath);

            if (input.OpenFlag)
            {
                Process.Start(indexPath);
            }

            return true;
        }
    }
}