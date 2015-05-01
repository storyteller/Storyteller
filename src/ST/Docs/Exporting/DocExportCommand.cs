using System;
using System.ComponentModel;
using System.IO;
using FubuCore.CommandLine;

namespace ST.Docs.Exporting
{
    [CommandDescription("Export a documentation project to static html", Name = "doc-export")]
    public class DocExportCommand : FubuCommand<DocExportInput>
    {
        public override bool Execute(DocExportInput input)
        {
            var settings = input.ToSettings();

            settings.UrlStyle = input.ExportMode == ExportStyle.FileDump ? UrlStyle.FileExport : UrlStyle.WebsiteExport;

            var project = new DocProject(settings);

            if (!Directory.Exists(input.Destination))
            {
                Console.WriteLine("Creating directory " + input.Destination);
                Directory.CreateDirectory(input.Destination);
            }

            project.ExportTo(input.Destination);

            return true;
        }
    }

    public enum ExportStyle
    {
        FileDump,
        Website
    }

    public class DocExportInput : DocInput
    {
        [Description("The destination folder where the docs should be exported to")]
        public string Destination { get; set; }

        [Description("Controls how the urls within the documentation topic pages are generated")]
        public ExportStyle ExportMode { get; set; }
    }
}