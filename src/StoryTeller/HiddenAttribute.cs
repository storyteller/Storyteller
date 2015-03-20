using System;

namespace StoryTeller
{
    [AttributeUsage(AttributeTargets.Method | AttributeTargets.Class, AllowMultiple = false, Inherited = true)]
    public class HiddenAttribute : Attribute
    {
    }
}