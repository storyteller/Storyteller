using System;
using System.Reflection;
using StoryTeller.Engine.Reflection;

namespace StoryTeller.Engine
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
    public class DescriptionAttribute : Attribute
    {
        private readonly string _text;

        public DescriptionAttribute(string text)
        {
            _text = text;
        }

        public string Text { get { return _text; } }

        public static string GetDescription(ICustomAttributeProvider thing)
        {
            string description = string.Empty;
            thing.ForAttribute<DescriptionAttribute>(att => description = att.Text);

            return description;
        }
    }
}