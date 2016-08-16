using System;
using System.Collections.Generic;
using System.IO;
using Baseline;
using ST.Docs.Html;
using ST.Docs.Topics;
using ST.Docs.Transformation;

namespace ST.Docs.Exporting
{
    public class Exporter
    {
        private readonly DocSettings _settings;
        private readonly IHtmlGenerator _generator;

        public Exporter(DocSettings settings, IHtmlGenerator generator)
        {
            _settings = settings;
            _generator = generator;
        }

        public void CleanTarget(string directory)
        {
            var fileSystem = new FileSystem();
        
            foreach (var child in Directory.GetDirectories(directory))
            {
                if (child.Contains(".git")) continue;
                
                fileSystem.DeleteDirectory(child);
            }

            fileSystem.FindFiles(directory, FileSet.Shallow("*.htm"))
                .Each(fileSystem.DeleteFile);
        }

        public void ExportTo(string directory, Topic root, Func<Topic, string> pathing)
        {
            var fileSystem = new FileSystem();

            string sourceContent = _settings.Root.AppendPath("content");
            if (fileSystem.DirectoryExists(sourceContent))
            {
                fileSystem.CopyToDirectory(sourceContent, directory.AppendPath("content"));
            }

            root.AllTopicsInOrder().Each(topic =>
            {
                var path = pathing(topic);
                var parentDirectory = path.ParentUrl();

                if (parentDirectory.IsNotEmpty())
                {
                    fileSystem.CreateDirectory(directory.AppendPath(parentDirectory));
                }
                

                var text = _generator.Generate(topic);

                // Hoakum
                topic.Substitutions.Each((key, value) =>
                {
                    text = text.Replace(key, value);
                });

                fileSystem.WriteStringToFile(directory.AppendPath(path), text);
            });
        }
    }
}