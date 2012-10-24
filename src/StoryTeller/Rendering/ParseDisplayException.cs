using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using FubuCore;

namespace StoryTeller.Rendering
{
    [Serializable]
    public class ParseDisplayException : Exception
    {
        private readonly string _message;


        public ParseDisplayException()
        {
        }

        public ParseDisplayException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
        }

        public ParseDisplayException(string format, string[] missing, string[] extra)
        {
            _message = "Error parsing template <{0}>".ToFormat(format);
            if (missing.Length > 0)
            {
                _message += "  Missing: ({0})".ToFormat(missing.Join(", "));
            }

            if (extra.Length > 0)
            {
                _message += "  Extra:  ({0})".ToFormat(extra.Join(", "));
            }
        }

        public override string Message { get { return _message; } }
    }
}