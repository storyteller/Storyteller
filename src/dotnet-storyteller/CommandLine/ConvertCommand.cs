using System;
using System.Collections.Generic;
using System.IO;
using Baseline;
using Oakton;
using StoryTeller.Model.Persistence;
using StoryTeller.Model.Persistence.Markdown;

namespace ST.CommandLine
{

    public class ConvertInput
    {
        [Description("Directory of the Storyteller specification project")]
        public string Path { get; set; } = Directory.GetCurrentDirectory();

        [Description("Optional. Override the spec directory")]
        public string SpecsFlag { get; set; }

        public string SpecPath => SpecsFlag.IsNotEmpty() ? Path.ToFullPath().AppendPath(SpecsFlag) : HierarchyLoader.SelectSpecPath(Path.ToFullPath());
    }

    [Description("Converts the persisted specifications from the 1.0-3.0 Xml format to the 4.0 markdown format")]
    public class ConvertCommand : OaktonCommand<ConvertInput>
    {
        public ConvertCommand()
        {
            Usage("Convert this Directory").Arguments();
            Usage("Convert a specific Directory").Arguments(x => x.Path);
        }

        public override bool Execute(ConvertInput input)
        {
            var files = new FileSystem().FindFiles(input.SpecPath, FileSet.Deep("*.xml"));
            foreach (var file in files)
            {
                var mdFilename = Path.GetFileNameWithoutExtension(file) + ".md";
                var mdFile = file.ParentDirectory().AppendPath(mdFilename);

                var spec = XmlReader.ReadFromFile(file);

                MarkdownWriter.WriteToFile(spec, mdFile);

                Console.WriteLine($"{file} -> {mdFile}");

                File.Delete(file);
            }

            return true;
        }
    }
}