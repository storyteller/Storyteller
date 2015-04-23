using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using FubuCore;

namespace ST.Docs.Topics
{
    public static class TopicLoader
    {
        private static readonly FileSystem FileSystem = new FileSystem();
        private const string regex = @"<!--(.*?)-->";

        public static Topic LoadDirectory(string directory)
        {
            // Needs to order based on an order.txt

            var topicFiles = FileSystem.FindFiles(directory, FileSet.Shallow("*.md")).ToArray();
            
            var topics = topicFiles.Select(x => LoadTopic(x, true))
                .Union(LoadChildDirectories(directory))
                .ToArray();

            var index = topics.FirstOrDefault(x => x.IsIndex);

            var others = topics.Where(x => !x.IsIndex).ToArray();

            var ordered = OrderTopics(directory, others);
            index.AddChildren(ordered);

            return index;
        }

        public static IEnumerable<Topic> LoadChildDirectories(string directory)
        {
            foreach (var childDirectory in Directory.GetDirectories(directory, "*", SearchOption.TopDirectoryOnly))
            {
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

            var topic = new Topic
            {
                Key = Path.GetFileNameWithoutExtension(file).ToLower(),
                
            };

            var isIndex = Path.GetFileNameWithoutExtension(file).EqualsIgnoreCase("index");
            topic.UrlSegment = isIndex ? string.Empty : topic.Key.ToLower();

            Debug.WriteLine("Parsing topic file " + file.ToFullPath());


            var comments = findComments(file).ToArray();

            applyExplicitTitle(comments, topic);
            applyExplicitUrlSegment(comments, topic);

            if (topic.UrlSegment == null)
            {
                topic.UrlSegment = determineUrlSegmentFromFile(file, isIndex, isRoot);
            }

            if (topic.Title.IsEmpty())
            {
                topic.Title = topic.Key.Capitalize().SplitPascalCase();
            }

            return topic;
        }

        private static string determineUrlSegmentFromFile(string file, bool isIndex, bool isRoot)
        {
            if (isRoot) return string.Empty;

            if (isIndex) return Path.GetFileName(file.ParentDirectory());

            return Path.GetFileNameWithoutExtension(file);
        }

        private static void applyExplicitUrlSegment(IEnumerable<string> comments, Topic topic)
        {
            var rawUrl = comments.FirstOrDefault(x => x.StartsWith("Url:", StringComparison.OrdinalIgnoreCase));
            if (rawUrl.IsNotEmpty())
            {
                topic.UrlSegment = rawUrl.Split(':').Last().Trim();
            }
        }

        private static void applyExplicitTitle(IEnumerable<string> comments, Topic topic)
        {
            var rawTitle = comments.FirstOrDefault(x => x.StartsWith("Title:", StringComparison.OrdinalIgnoreCase));
            if (rawTitle != null)
            {
                var title = rawTitle.Split(':').Last().Trim();
                topic.Title = title;
            }
        }

        public static string FindTitle(string filePath)
        {
            Func<string, bool> filter = x => x.StartsWith("Title:", StringComparison.OrdinalIgnoreCase);
            IEnumerable<string> comments = findComments(filePath).ToArray();
            var rawTitle = comments.FirstOrDefault(filter);
            if (rawTitle != null)
            {
                var title = rawTitle.Split(':').Last().Trim();
                return title;
            }

            return null;
        }


        private static IEnumerable<string> findComments(string file)
        {
            var text = FileSystem.ReadStringFromFile(file);

            return FindComments(text);
        }

        public static IEnumerable<string> FindComments(string text)
        {
            var matches = Regex.Matches(text, regex);
            return from Match match in matches select match.Groups[1].Value.Trim();
        }
    }
}