using System;

namespace StoryTeller.Engine
{
    [AttributeUsage(AttributeTargets.Method, AllowMultiple = false, Inherited = true)]
    public class FormatAsAttribute : Attribute
    {
        private readonly string _format;

        public FormatAsAttribute(string format)
        {
            _format = format;
        }

        public string Format { get { return _format; } }
    }
}