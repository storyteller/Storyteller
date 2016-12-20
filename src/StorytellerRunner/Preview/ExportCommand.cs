using System;
using Oakton;
using StoryTeller;
using StoryTeller.Model.Persistence;
using ST.CommandLine;

namespace ST.Preview
{
    [Description("Exports a visualization of all of the specifications to disk")]
    public class ExportCommand : OaktonCommand<ExportInput>
    {
        public ExportCommand()
        {
            Usage("Export the project in the current directory").Arguments();
            Usage("Export the project in a named directory").Arguments(x => x.Path);
        }

        public override bool Execute(ExportInput input)
        {
            var top = HierarchyLoader.ReadHierarchy(input.SpecPath);

            using (var controller = input.BuildEngine())
            {
                var fixtures = DumpFixturesCommand.BuildCombinedFixtureLibrary(input, controller);

                var doc = ExportWriter.Build(top, fixtures, input.TitleFlag);

                Console.WriteLine("Exporting the specifications to " + input.FileFlag);
                doc.WriteToFile(input.FileFlag);
            }

            if (input.OpenFlag)
            {
                Console.WriteLine("Trying to open the file " + input.FileFlag);
                ProcessLauncher.OpenFile(input.FileFlag);
            }

            return true;
        }
    }
}