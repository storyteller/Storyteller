using System;
using Newtonsoft.Json;

namespace StoryTeller.Messages
{
#if NET46
    [Serializable]
#endif
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