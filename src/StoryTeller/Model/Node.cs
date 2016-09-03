using System;
using System.Collections.Generic;
using Baseline;

namespace StoryTeller.Model
{
#if NET46
    [Serializable]
#endif
    public abstract class Node
    {
        private string _id;

        protected Node()
        {
            id = Guid.NewGuid().ToString();
        }

        public string id
        {
            get { return _id; }
            set
            {
                _id = value;
                if (_id.IsEmpty())
                {
                    _id = Guid.NewGuid().ToString();
                }
            }
        }

        internal IEnumerable<Node> AllDescendents()
        {
            var holder = this as INodeHolder;
            if (holder == null) yield break;

            foreach (var child in holder.Children)
            {
                yield return child;

                foreach (var descendent in child.AllDescendents())
                {
                    yield return descendent;
                }
            }
        } 
    }
}