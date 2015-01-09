using System;

namespace Storyteller.Core
{
    [AttributeUsage(AttributeTargets.ReturnValue | AttributeTargets.Method, Inherited = false)]
    public class AliasAsAttribute : Attribute
    {
        private readonly string _alias;

        public AliasAsAttribute(string alias)
        {
            _alias = alias;
        }

        public string Alias { get { return _alias; } }
    }
}