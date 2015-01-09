using System;

namespace Storyteller.Core
{
    [AttributeUsage(AttributeTargets.Method | AttributeTargets.Class, AllowMultiple = false, Inherited = true)]
    public class HiddenAttribute : Attribute
    {
    }
}