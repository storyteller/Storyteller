using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using FubuCore;
using FubuCore.Util;

namespace ST.Docs.Topics
{
    public class Topic
    {
        private const string regex = @"<!--(.*?)-->";
        public readonly Cache<string, string> Substitutions = new Cache<string, string>();

        private readonly IList<Topic> _children = new List<Topic>();

        public Topic(string key, string file)
        {
            Key = key;
            File = file;

            if (Path.GetFileNameWithoutExtension(File).EqualsIgnoreCase("splash"))
            {
                Key = "index";
                UrlSegment = String.Empty;
            }   
        }

        public Topic Parent { get; set; }

        public void AddChildren(IEnumerable<Topic> children)
        {
            _children.AddRange(children);
            _children.Each(x => x.Parent = this);
        }

        public IList<Topic> Children
        {
            get { return _children; }
        }

        // derived from the position
        public string Key { get; private set; }
        public string Title { get; set; }
        public string UrlSegment { get; set; }


        public string Url
        {
            get
            {
                var url = UrlSegment;
                var topic = this.Parent;
                while (topic != null)
                {
                    url = topic.UrlSegment.AppendUrl(url);
                    topic = topic.Parent;
                }
                

                return url.TrimStart('/');
            }
        }

        public Topic NextSibling
        {
            get
            {
                if (Parent == null) return null;

                if (ReferenceEquals(Parent.Children.Last(), this)) return null;

                var index = Parent.Children.IndexOf(this);

                return Parent.Children[index + 1];
            }
        }

        public Topic PreviousSibling
        {
            get
            {
                if (Parent == null) return null;

                if (ReferenceEquals(Parent.Children.First(), this)) return null;

                var index = Parent.Children.IndexOf(this);

                return Parent.Children[index - 1];
            }
        }

        public Topic FirstChild
        {
            get { return Children.FirstOrDefault(); }
        }

        public Topic LastChild
        {
            get { return Children.LastOrDefault(); }
        }

        public override string ToString()
        {
            return String.Format("Topic: {0}", Title);
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

        public IEnumerable<Topic> Ancestors()
        {
            return anscestors().Reverse().ToArray();
        }

        private IEnumerable<Topic> anscestors()
        {
            var topic = this;
            while (topic.Parent != null)
            {
                yield return topic.Parent;
                topic = topic.Parent;
            }
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

        public string File { get; private set; }

        public Topic FindTop()
        {
            var topic = this;
            while (topic.Parent != null)
            {
                topic = topic.Parent;
            }

            return topic;
        }

        public IEnumerable<Topic> AllTopicsInOrder()
        {
            yield return this;

            var child = FindNext();
            while (child != null)
            {
                yield return child;
                child = child.FindNext();
            }
        }

        public string KeyInsideParent()
        {
            return Key.Split('/').Last();
        }

        public void PrependKey(string key)
        {
            if (IsIndex)
            {
                Key = key;
                if (Title == "Index")
                {
                    Title = key.Capitalize();
                }
            }
            else
            {
                Key = key + "/" + Key;
            }

            _children.Each(x => x.PrependKey(key));
        }

        public Topic FindByKey(string key)
        {
            return AllTopicsInOrder().FirstOrDefault(x => x.Key == key);
        }

        public void AddChild(Topic topic)
        {
            topic.Parent = this;
            _children.Add(topic);

            if (!IsIndex)
            {
                topic.PrependKey(Key);
            }
            
        }

        public string FileExportPath()
        {
            if (Parent == null) return "index.htm";
            
            if (Children.Any())
            {
                return Url.AppendUrl("index.htm");
            }

            return Parent.Url.AppendUrl(KeyInsideParent() + ".htm").TrimStart('/');
        }

        public string WebsiteExportPath()
        {
            return Url.AppendUrl("index.html").TrimStart('/');
        }

        public bool IsSplashPage()
        {
            return Path.GetFileName(File).EqualsIgnoreCase("splash.htm");
        }

        public static void ParseTopic(string file, bool isRoot, Topic topic)
        {
            Debug.WriteLine("Parsing topic file " + file.ToFullPath());


            var comments = findComments(file).ToArray();

            applyExplicitTitle(comments, topic);
            applyExplicitUrlSegment(comments, topic);

            if (topic.UrlSegment == null)
            {
                topic.UrlSegment = determineUrlSegmentFromFile(file, topic.IsIndex, isRoot);
            }

            if (topic.Title.IsEmpty())
            {
                topic.Title = topic.Key.Capitalize().SplitPascalCase();
            }
        }

        private static string determineUrlSegmentFromFile(string file, bool isIndex, bool isRoot)
        {
            if (isRoot) return String.Empty;

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

        private static IEnumerable<string> findComments(string file)
        {
            var text = TopicLoader.FileSystem.ReadStringFromFile(file);

            return FindComments(text);
        }

        public static IEnumerable<string> FindComments(string text)
        {
            var matches = Regex.Matches(text, regex);
            return from Match match in matches select match.Groups[1].Value.Trim();
        }
    }
}