using System;
using System.IO;
using Baseline;
using Oakton;
using ST.Docs.Outline;

namespace ST.Docs
{
    [Description("Seeds a topic file structure from an outline.txt file", Name = "doc-seed")]
    public class DocSeedCommand : OaktonCommand<DocInput>
    {
        public override bool Execute(DocInput input)
        {
            var file = input.DirectoryFlag.AppendPath("outline.txt");
            if (!Directory.Exists(input.DirectoryFlag))
            {
                Console.WriteLine("Creating the documentation folder at " + input.DirectoryFlag);
                Directory.CreateDirectory(input.DirectoryFlag);

                Console.WriteLine("Creating an empty outline file at " + file);
                File.Create(file);
                return true;
            }

            
            if (!File.Exists(file))
            {
                ConsoleWriter.Write(ConsoleColor.Yellow, "Could not find the expected file " + file);
                return true;
            }

            var top = new OutlineReader(file).ReadFile();
            OutlineWriter.WriteToFiles(input.DirectoryFlag, top);

            return true;
        }
    }
}