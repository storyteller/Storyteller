using System;
using FubuCore;
using Newtonsoft.Json;

namespace StoryTeller.Model
{
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