using System.Collections.Generic;
using System.Linq;
using FubuCore;

namespace ST.Docs.Topics
{
    public class Topic
    {
        private readonly IList<Topic> _children = new List<Topic>();
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
        public string Key { get; set; }
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
    }
}