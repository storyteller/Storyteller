using System;

namespace StoryTeller
{
    [AttributeUsage(AttributeTargets.Method, AllowMultiple = false, Inherited = true)]
    public class ExposeAsTableAttribute : Attribute
    {
        private readonly string _label;
        private readonly string _leafName;

        public ExposeAsTableAttribute(string label, string leafName)
        {
            _label = label;
            _leafName = leafName;
        }

        public ExposeAsTableAttribute(string label)
            : this(label, "table")
        {
        }

        public string Label { get { return _label; } }

        public string LeafName { get { return _leafName; } }
    }
}