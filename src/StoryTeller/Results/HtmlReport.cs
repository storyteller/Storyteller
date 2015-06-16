using Newtonsoft.Json;

namespace StoryTeller.Results
{
    public class HtmlReport
    {
        public string html;
        public string title;
        public int count;

        private string _shortTitle;

        [JsonProperty("short_title")]
        public string ShortTitle
        {
            get { return _shortTitle ?? title; }
            set { _shortTitle = value; }
        }
    }
}