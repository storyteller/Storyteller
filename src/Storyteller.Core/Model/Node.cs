using System;
using FubuCore;
using Newtonsoft.Json;

namespace Storyteller.Core.Model
{
    public abstract class Node
    {
        private string _id;

        protected Node()
        {
            Id = Guid.NewGuid().ToString();
        }

        [JsonProperty("id")]
        public string Id
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