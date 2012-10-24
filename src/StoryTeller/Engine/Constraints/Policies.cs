using System;
using System.Collections.Generic;
using FubuCore.Util;
using StoryTeller.Domain;

namespace StoryTeller.Engine.Constraints
{
    public interface IPolicies
    {
        bool IsPrivate { get; set; }
        string AddGrammarText { get; set; }
        SelectionMode SelectionMode { get; set; }
        string AutoSelectGrammarKey { get; set; }
        string SentenceConcatenator { get; set; }

        bool NoRepeatSteps { get; set; }
        bool CanChooseGrammar(string grammarKey, IEnumerable<IStep> preceeding);
        bool CanChooseFixture(Test test);

        bool IsHidden(string grammarKey);
        void Tag(string tag);
        void Tag(string grammarKey, string tag);
        IEnumerable<string> Tags();
        IEnumerable<string> Tags(string grammarKey);
    }


    [Serializable]
    public class Policies : IPolicies
    {
        private const string MAIN = "MAIN_TAGS";

        private readonly List<string> _hiddenKeys = new List<string>();
        private readonly Cache<string, List<string>> _tags = new Cache<string, List<string>>(x => new List<string>());

        private bool _isPrivate;

        public Policies()
        {
            AddGrammarText = "add step";
            SelectionMode = SelectionMode.Any;
        }

        #region IPolicies Members

        public string AutoSelectGrammarKey { get; set; }
        public SelectionMode SelectionMode { get; set; }

        public bool CanChooseGrammar(string grammarKey, IEnumerable<IStep> preceeding)
        {
            if (IsHidden(grammarKey)) return false;

            return true;
        }

        public bool IsHidden(string grammarKey)
        {
            return _hiddenKeys.Contains(grammarKey);
        }

        public bool IsPrivate { get { return _isPrivate; } set { _isPrivate = value; } }

        public bool CanChooseFixture(Test test)
        {
            return !IsPrivate;
        }

        public string AddGrammarText { get; set; }
        public bool NoRepeatSteps { get; set; }

        public void Tag(string tag)
        {
            Tag(MAIN, tag);
        }

        public void Tag(string grammarKey, string tag)
        {
            _tags[grammarKey].Fill(tag);
        }

        public IEnumerable<string> Tags()
        {
            return Tags(MAIN);
        }

        public IEnumerable<string> Tags(string grammarKey)
        {
            return _tags[grammarKey];
        }

        public string SentenceConcatenator { get; set; }

        #endregion

        public void HideGrammar(string grammarKey)
        {
            _hiddenKeys.Add(grammarKey);
        }
    }

    public interface IGrammarConstraint
    {
        bool CanChoose(IEnumerable<IStep> preceeding);
    }
}