using System;
using System.Collections.Generic;
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
            yield return this;

            foreach (var child in Descendents())
            {
                yield return child;
            }
        }

    }
}