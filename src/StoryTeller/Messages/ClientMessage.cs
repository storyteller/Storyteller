using System;
using Newtonsoft.Json;

namespace StoryTeller.Messages
{
    [Serializable]
    public abstract class ClientMessage
    {
        [JsonProperty("type")]
        public string Type { get; private set; }

        protected ClientMessage(string type)
        {
            Type = type;
        }
    }
}