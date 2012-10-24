using System.Collections.Generic;

namespace StoryTeller.Rendering
{
    public class ParseErrors
    {
        private readonly List<string> _extra = new List<string>();
        private readonly string _format;
        private readonly List<string> _missing = new List<string>();


        public ParseErrors(string format)
        {
            _format = format;
        }

        public void MarkMissing(string missing)
        {
            _missing.Add(missing);
        }

        public void MarkExtra(string extra)
        {
            _extra.Add(extra);
        }

        public void ThrowIfErrors()
        {
            if (_missing.Count > 0 || _extra.Count > 0)
            {
                throw new ParseDisplayException(_format, _missing.ToArray(), _extra.ToArray());
            }
        }
    }
}