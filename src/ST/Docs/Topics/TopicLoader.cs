using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using FubuCore;

namespace ST.Docs.Topics
{
    public static class TopicLoader
    {
        public static readonly FileSystem FileSystem = new FileSystem();

        public static Topic LoadDirectory(string directory)
        {
            // Needs to order based on an order.txt

            var topicFiles = FileSystem.FindFiles(directory, FileSet.Shallow("*.md")).ToArray();
            
            var topics = topicFiles.Select(x => LoadTopic(x, true))
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

            var ordered = OrderTopics(directory, others);
            index.AddChildren(ordered);

            return index;
        }

        public static IEnumerable<Topic> LoadChildDirectories(string directory)
        {
            foreach (var childDirectory in Directory.GetDirectories(directory, "*", SearchOption.TopDirectoryOnly))
            {
                // TODO -- make this go away in later versions of FubuMVC 3
                if (childDirectory.Contains("fubu-content")) continue;
                if (Path.GetFileName(childDirectory).EqualsIgnoreCase("content")) continue;

                var topic = LoadDirectory(childDirectory);
                var key = Path.GetFileName(childDirectory);

                topic.UrlSegment = key;
                topic.PrependKey(key);

                yield return topic;
            }
        }

        public static IEnumerable<Topic> OrderTopics(string directory, IEnumerable<Topic> others)
        {
            var orderFile = directory.AppendPath("order.txt");
            if (File.Exists(orderFile))
            {
                var list = new List<Topic>();

                new FileSystem().ReadTextFile(orderFile, line =>
                {
                    var topic = others.FirstOrDefault(x => x.Key.EqualsIgnoreCase(line));
                    if (topic != null)
                    {
                        list.Add(topic);
                    }
                });

                var missing = others.Where(x => !list.Contains(x)).OrderBy(x => x.Title);
                list.AddRange(missing);

                return list;
            }
            else
            {
                return others.OrderBy(x => x.Title).ToArray();
            }
        }

        public static Topic LoadTopic(string file, bool isRoot)
        {
            Debug.WriteLine("Loading topic file " + file.ToFullPath());
            if (!File.Exists(file))
            {
                throw new FileNotFoundException("No topic file", file);
            }

            var topic = new Topic(Path.GetFileNameWithoutExtension(file).ToLower(), file);
            topic.UrlSegment = topic.IsIndex ? string.Empty : topic.Key.ToLower();

            Topic.ParseTopic(file, isRoot, topic);

            return topic;
        }




    }
}