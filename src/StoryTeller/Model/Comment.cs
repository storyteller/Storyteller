using System;
using System.IO;
using Baseline;
using Newtonsoft.Json;

namespace StoryTeller.Model
{
#if NET46
    [Serializable]
#endif
    public class Comment : Node
    {
        public string type => "comment";

        private string _text;

        [JsonProperty("text")]
        public string Text
        {
            get { return _text?.Trim(); }
            set
            {
                _text = value?.Trim() ?? string.Empty;
            }
        }

        public void AddLine(string line)
        {
            if (_text.IsEmpty())
            {
                _text = line.Trim();
            }
            else
            {
                _text += Environment.NewLine + line.Trim();
            }
        }

        public void WriteText(int indention, TextWriter writer)
        {
            writer.WriteLine();
            foreach (var line in _text.ReadLines())
            {
                writer.WriteLine("".PadRight(indention) + line);
            }
            writer.WriteLine();
        }
    }
}