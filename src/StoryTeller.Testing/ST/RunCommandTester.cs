using System;
using System.IO;
using FubuCore;
using Xunit;
using Shouldly;
using ST.CommandLine;

namespace StoryTeller.Testing.ST
{
    
    public class RunCommandTester
    {
        public readonly string Path = ".".ToFullPath().ParentDirectory().ParentDirectory().ParentDirectory()
               .AppendPath("Storyteller.Samples");

        [Fact]
        public void write_csv_results()
        {
            var file = "perf-" + Guid.NewGuid().ToString() + ".csv";

            var input = new RunInput
            {
                Path = Path,
                CsvFlag = file
            };

            new RunCommand().Execute(input);

            File.Exists(file).ShouldBe(true);
        }

        [Fact]
        public void write_json_results()
        {
            var file = "perf-" + Guid.NewGuid().ToString() + ".csv";

            var input = new RunInput
            {
                Path = Path,
                JsonFlag = file
            };

            new RunCommand().Execute(input);

            File.Exists(file).ShouldBe(true);
        }

        [Fact]
        public void exits_with_failure_if_workspace_does_not_exist()
        {
            var input = new RunInput
            {
                Path = Path,
                WorkspaceFlag = "Does-Not-Exist"
            };

            new RunCommand().Execute(input).ShouldBe(false);
        }
    }
}
