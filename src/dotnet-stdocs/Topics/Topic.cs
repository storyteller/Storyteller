using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Baseline;

namespace StorytellerDocGen.Topics
{
    public class Topic
    {
        private const string regex = @"<!--(.*?)-->";
        public readonly LightweightCache<string, string> Substitutions = new LightweightCache<string, string>();

        private readonly IList<Topic> _children = new List<Topic>();
        private string _urlSegment;

        public Topic(string key, string file)
        {
            Key = key;
            File = file;
        }

        public Topic Parent { get; set; }

        public void AddChildren(IEnumerable<Topic> children)
        {
            _children.AddRange(children);
            _children.Each(x => x.Parent = this);
        }

        public IList<Topic> Children => _children;

        // derived from the position
        public string Key { get; private set; }

        public string KeyWithinParent => Key.Split('/').Last();


        public string Title { get; set; }

        public bool IsRoot => Parent == null;

        public string UrlSegment
        {
            get
            {
                if (_urlSegment.IsNotEmpty()) return _urlSegment;

                if (IsRoot) return "";
                
                if (IsIndex)
                {
                    return Path.GetFileNameWithoutExtension(File.ParentDirectory());
                }

                return KeyWithinParent;


            }
            set
            {
                _urlSegment = value;
            }
        }


        public string Url
        {
            get
            {
                if (IsRoot) return "";

                var url = UrlSegment;
                var topic = this.Parent;
                while (topic != null && !topic.IsRoot)
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

        public Topic FirstChild => Children.FirstOrDefault();

        public Topic LastChild => Children.LastOrDefault();

        public override string ToString()
        {
            return $"Topic: {Title}";
        }

        public Topic FindNext()
        {
            if (FirstChild != null) return FirstChild;

            return findNextTopicNotChild();
        }

        private Topic findNextTopicNotChild()
        {
            if (NextSibling != null) return NextSibling;

            return Parent?.findNextTopicNotChild();
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

        public bool IsIndex => Key.EqualsIgnoreCase("index");

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

        public void PrependKey(string key)
        {
            if (IsIndex)
            {
                Key = key;
                if (Title == "Index")
                {
                    Title = KeyWithinParent.Capitalize();
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

            return Parent.Url.AppendUrl(KeyWithinParent + ".htm").TrimStart('/');
        }

        public string WebsiteExportPath()
        {
            return Url.AppendUrl("index.html").TrimStart('/');
        }

        public bool IsSplashPage()
        {
            return Path.GetFileName(File).EqualsIgnoreCase("splash.htm");
        }

        public void ParseFile()
        {
            Debug.WriteLine("Parsing topic file " + File.ToFullPath());


            var comments = findComments(File).ToArray();

            applyExplicitTitle(comments, this);
            applyExplicitUrlSegment(comments, this);

            if (UrlSegment == null)
            {
                UrlSegment = determineUrlSegmentFromFile(File, IsIndex, IsRoot);
            }

            if (Title.IsEmpty())
            {
                Title = KeyWithinParent.Capitalize().SplitPascalCase();
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

        internal void OrderChildren()
        {
            var others = _children.ToArray();
            _children.Clear();

            var directory = File.ParentDirectory();
            var orderFile = directory.AppendPath("order.txt");
            if (System.IO.File.Exists(orderFile))
            {
                new FileSystem().ReadTextFile(orderFile, line =>
                {
                    var topic = others.FirstOrDefault(x => x.KeyWithinParent.EqualsIgnoreCase(line));
                    if (topic != null)
                    {
                        _children.Add(topic);
                    }
                });

                var missing = others.Where(x => !_children.Contains(x)).OrderBy(x => x.Title);
                _children.AddRange(missing);

            }
            else
            {
                _children.AddRange(others.OrderBy(x => x.Title).ToArray());
            }


            var tasks = _children.Select(x => Task.Factory.StartNew(x.OrderChildren));

            Task.WaitAll(tasks.ToArray());
        }

        public Task ParseAndOrder()
        {
            var all = AllTopicsInOrder().Select(t => Task.Factory.StartNew(t.ParseFile)).ToArray();

            return Task.WhenAll(all).ContinueWith(t => OrderChildren());
        }

        public bool HasExplicitUrl()
        {
            return _urlSegment.IsNotEmpty();
        }
    }
}