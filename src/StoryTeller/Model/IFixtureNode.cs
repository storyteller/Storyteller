using System;
using System.Collections.Generic;
using FubuCore;
using StoryTeller.Domain;

namespace StoryTeller.Model
{
    [Serializable]
    public class GrammarError
    {
        public IFixtureNode Node { get; set; }
        public string Message { get; set; }
        public string ErrorText { get; set; }

        #region Overrides of Object

        public override string ToString()
        {
            return "{0}:  {1}".ToFormat(Node.Name, Message);
        }

        #endregion
    }

    public interface IFixtureNode
    {
        string Name { get; }
        string Label { get; }
        string Description { get; }

        IEnumerable<GrammarError> AllErrors();
    }
}