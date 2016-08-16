using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using Baseline;

namespace ST.Docs.Topics
{
    public static class TopicLoader
    {
        public static readonly FileSystem FileSystem = new FileSystem();

        public static Topic LoadDirectory(string directory, bool isRoot = true)
        {
            // Needs to order based on an order.txt

            var topicFiles = FileSystem.FindFiles(directory, FileSet.Shallow("*.md")).ToArray();
            
            var topics = topicFiles.Select(x => LoadTopic(x, isRoot))
                .Union(LoadChildDirectories(directory))
                .ToArray();

            var index = topics.FirstOrDefault(x => x.IsIndex);
            if (index == null)
            {
                var splashPath = directory.AppendPath("splash.htm");
                if (File.Exists(splashPath))
                {
                    index = LoadTopic(splashPath, true);
                }
                else
                {
                    throw new Exception("Unable to find an index file for directory " + directory);
                }
            }

            var others = topics.Where(x => !x.IsIndex).ToArray();

            index.AddChildren(others);

            return index;
        }

        public static IEnumerable<Topic> LoadChildDirectories(string directory)
        {
            foreach (var childDirectory in Directory.GetDirectories(directory, "*", SearchOption.TopDirectoryOnly))
            {
                // TODO -- make this go away in later versions of FubuMVC 3
                if (childDirectory.Contains("fubu-content")) continue;
                if (Path.GetFileName(childDirectory).EqualsIgnoreCase("content")) continue;

                var topic = LoadDirectory(childDirectory, false);
                var key = Path.GetFileName(childDirectory);

                topic.UrlSegment = key;
                topic.PrependKey(key);

                yield return topic;
            }
        }



        public static Topic LoadTopic(string file, bool isRoot)
        {
            Debug.WriteLine("Loading topic file " + file.ToFullPath());
            if (!File.Exists(file))
            {
                throw new FileNotFoundException("No topic file", file);
            }

            var key = Path.GetFileNameWithoutExtension(file).EqualsIgnoreCase("splash") ? "index" : Path.GetFileNameWithoutExtension(file);

            var topic = new Topic(key.ToLower(), file);

            return topic;
        }




    }
}