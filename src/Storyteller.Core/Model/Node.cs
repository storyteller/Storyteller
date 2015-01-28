using System;
using Newtonsoft.Json;

namespace Storyteller.Core.Model
{
    public abstract class Node
    {
        protected Node()
        {
            Id = Guid.NewGuid().ToString();
        }

        [JsonProperty("id")]
        public string Id { get; set; }
    }
}