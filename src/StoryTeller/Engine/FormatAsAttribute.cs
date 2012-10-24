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

    [AttributeUsage(AttributeTargets.Method | AttributeTargets.Class, AllowMultiple = false, Inherited = true)]
    public class HiddenAttribute : Attribute
    {
    }

    [AttributeUsage(AttributeTargets.Method | AttributeTargets.Class, AllowMultiple = false, Inherited = true)]
    public class TagAttribute : Attribute
    {
        private readonly string[] _tags;

        public TagAttribute(params string[] tags)
        {
            _tags = tags;
        }

        public string[] Tags { get { return _tags; } }
    }
}