using System;
using Newtonsoft.Json;

namespace StoryTeller.Model
{
#if NET46
    [Serializable]
#endif
    public class Comment : Node
    {
        public string type => "comment";

        [JsonProperty("text")]
        public string Text;
    }
}