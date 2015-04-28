using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using FubuCore;
using ST.Docs.Topics;

namespace ST.Docs.Outline
{
    public static class OutlineWriter
    {
        public static readonly IFileSystem FileSystem = new FileSystem();

        public static void WriteToFiles(string directory, Topic topLevel)
        {
            if (!FileSystem.DirectoryExists(directory))
            {
                FileSystem.CreateDirectory(directory);
            }

            var file = directory.AppendPath("index.md");
            WriteTopicFile(file, topLevel);

            WriteOrderFile(directory, topLevel);

            topLevel.Children.Each(child =>
            {
                var key = child.KeyInsideParent();

                if (child.Children.Any())
                {
                    WriteToFiles(directory.AppendPath(key), child);
                }
                else
                {
                    var childFile = directory.AppendPath(key + ".md");
                    WriteTopicFile(childFile, child);
                }
            });
        }

        public static void WriteOrderFile(string directory, Topic parent)
        {
            FileSystem.AlterFlatFile(directory.AppendPath("order.txt"), list =>
            {
                list.Clear();

                parent.Children.Each(child =>
                {
                    var key = child.KeyInsideParent();
                    list.Add(key);
                });
            });
        }

        public static void WriteTopicFile(string file, Topic topic)
        {
            if (!File.Exists(file))
            {
                Console.WriteLine("Writing topic file " + file);
                new FileSystem().WriteToFlatFile(file, writer =>
                {
                    writer.WriteLine("<!--Title:{0}-->".ToFormat(topic.Title));
                    writer.WriteLine("<!--Url:{0}-->".ToFormat(topic.UrlSegment));
                });
            }
            else
            {
                Console.WriteLine("Found {0} and will not overwrite", file);
            }
        }
    }
}