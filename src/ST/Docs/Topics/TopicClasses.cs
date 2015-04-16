using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using FubuCore;

namespace ST.Docs.Topics
{
    public class Topic
    {
        public readonly IList<Topic> Children = new List<Topic>();
        public Topic Parent { get; set; }

        public Topic()
        {
            
        }

        // derived from the position
        public string Key { get; set; }
        public string Title { get; set; }
        public string UrlSegment { get; set; }

        public string Url
        {
            get
            {
                throw new NotImplementedException();
            }
        }

        public Topic NextSibling
        {
            get
            {
                throw new NotImplementedException("Calculate this");
            }
        }

        public Topic PreviousSibling
        {
            get
            {
                throw new NotImplementedException("Calculate this");
            }
        }

        public Topic FirstChild
        {
            get
            {
                throw new NotImplementedException("Calculate this");
            }
        }

        public Topic LastChild
        {
            get
            {
                throw new NotImplementedException("Calculate this");
            }
        }

        public string FullUrl
        {
            get
            {
                throw new NotImplementedException("Calculate this");
            }
        }



        public override string ToString()
        {
            return string.Format("Topic: {0}", Title);
        }

        public Topic FindNext()
        {
            if (FirstChild != null) return FirstChild;

            return findNextTopicNotChild();
        }

        private Topic findNextTopicNotChild()
        {
            if (NextSibling != null) return NextSibling;

            if (Parent == null) return null;

            return Parent.findNextTopicNotChild();
        }

        public Topic FindPrevious()
        {
            if (PreviousSibling != null) return PreviousSibling;

            return Parent;
        }


        public IEnumerable<Topic> Descendents()
        {
            foreach (Topic childNode in Children)
            {
                yield return childNode;

                foreach (Topic descendent in childNode.Descendents())
                {
                    yield return descendent;
                }
            }
        }

        public bool IsIndex
        {
            get { return Key.EqualsIgnoreCase("index"); }
        }

        public Topic FindIndex()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Topic> AllTopicsInOrder()
        {
            throw new NotImplementedException();
        }
    }

    public static class TopicLoader
    {
        private static readonly FileSystem FileSystem = new FileSystem();
        private const string regex = @"<!--(.*?)-->";

        public static Topic LoadDirectory(string directory)
        {
            // Needs to order based on an order.txt

            throw new NotImplementedException();
        }

        public static Topic LoadTopic(string file)
        {
            var topic = new Topic();
            topic.UrlSegment = topic.Title = topic.Key = Path.GetFileNameWithoutExtension(file);

            if (FileSystem.FileExists(file))
            {
                Func<string, bool> filter = x => x.StartsWith("Title:", StringComparison.OrdinalIgnoreCase);
                IEnumerable<string> comments = findComments(file).ToArray();
                var rawTitle = comments.FirstOrDefault(filter);
                if (rawTitle != null)
                {
                    var title = rawTitle.Split(':').Last().Trim();
                    topic.Title = title;
                }

                if (!topic.IsIndex)
                {
                    var rawUrl = comments.FirstOrDefault(x => x.StartsWith("Url:", StringComparison.OrdinalIgnoreCase));
                    if (rawUrl.IsNotEmpty())
                    {
                        var segment = rawUrl.Split(':').Last().Trim();
                        topic.UrlSegment = topic.UrlSegment.ParentUrl().AppendUrl(segment);
                    }
                }
            }

            if (topic.Title.IsEmpty())
            {
                topic.Title = topic.Key.Capitalize().SplitPascalCase();
            }

            return topic;
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