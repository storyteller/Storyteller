using System;
using System.Linq.Expressions;
using FubuCore.Reflection;

namespace StoryTeller.Engine.Reflection
{
    public static class ExpressionsExtensions
    {
        public static Cell ToCell(this Accessor accessor)
        {
            return new Cell(accessor.Name, accessor.PropertyType);
        }

        public static string GetKey(this string elementName, string prefix)
        {
            string key = elementName;
            if (key.StartsWith(prefix))
            {
                key = elementName.Substring(prefix.Length, elementName.Length - prefix.Length);
            }

            return key;
        }
    }
}