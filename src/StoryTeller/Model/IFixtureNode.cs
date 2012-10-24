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
            return "{0}:  {1}".ToFormat(Node.GetPath().Locator, Message);
        }

        #endregion
    }

    public interface IFixtureNode : INamedItem
    {
        string Label { get; }
        string Description { get; }

        void ModifyExampleTest(Test example);

        IEnumerable<GrammarError> AllErrors();
    }
}