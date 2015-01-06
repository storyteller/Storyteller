using System;

namespace StoryTeller.Engine
{
    [AttributeUsage(AttributeTargets.Method | AttributeTargets.Class, AllowMultiple = false, Inherited = true)]
    public class HiddenAttribute : Attribute
    {
    }
}