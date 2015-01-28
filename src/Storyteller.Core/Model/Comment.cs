using Newtonsoft.Json;

namespace Storyteller.Core.Model
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