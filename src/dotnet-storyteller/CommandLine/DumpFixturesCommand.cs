using System;
using System.ComponentModel;
using System.IO;
using System.Threading.Tasks;
using Baseline;
using Oakton;
using StoryTeller.Model;
using StoryTeller.Model.Persistence.DSL;
using StoryTeller.Remotes;
using ST.Client;

namespace ST.CommandLine
{
    public class DumpFixturesInput : ProjectInput
    {
        public DumpFixturesInput() : base(EngineMode.ExportOnly)
        {
        }
    }

    [Oakton.Description("Exports all of the Fixture definitions to markdown for review or using within the headless mode", Name = "dump-fixtures")]
    public class DumpFixturesCommand : OaktonCommand<DumpFixturesInput>
    {
        public override bool Execute(DumpFixturesInput input)
        {
            if (!Directory.Exists(input.FixturePath))
            {
                Console.WriteLine("Creating directory " + input.FixturePath);
                Directory.CreateDirectory(input.FixturePath);
            }

            using (var controller = input.BuildEngine())
            {
                var combined = BuildCombinedFixtureLibrary(input, controller);

                foreach (var fixture in combined.Models)
                {
                    var file = input.FixturePath.AppendPath(fixture.key + ".md");
                    try
                    {
                        FixtureWriter.Write(fixture, file);
                    }
                    catch (Exception e)
                    {
                        ConsoleWriter.Write(ConsoleColor.Red, $"Could not export fixture {fixture.key}");
                        ConsoleWriter.Write(ConsoleColor.Yellow, e.ToString());
                    }
                }
            }

            return true;
        }

        public static FixtureLibrary BuildCombinedFixtureLibrary(ProjectInput input, EngineController controller)
        {
            var loading = controller.Start();

            var reading = Task.Factory.StartNew(() => FixtureLoader.LoadFromPath(input.FixturePath));

            Task.WaitAll(loading, reading);

            var combined = FixtureLibrary.From(loading.Result.fixtures)
                .ApplyOverrides(reading.Result);
            return combined;
        }
    }
}