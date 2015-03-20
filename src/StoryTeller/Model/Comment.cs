using Newtonsoft.Json;

namespace StoryTeller.Model
{
    public class Comment : Node
    {
        public string type
        {
            get { return "comment"; }
        }

        [JsonProperty("text")]
        public string Text;
    }
}