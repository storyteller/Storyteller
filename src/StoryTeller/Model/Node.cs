using System;
using FubuCore;

namespace StoryTeller.Model
{
    [Serializable]
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
    }
}