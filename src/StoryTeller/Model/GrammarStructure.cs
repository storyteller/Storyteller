using System;
using System.Collections.Generic;
using StoryTeller.Domain;

namespace StoryTeller.Model
{
    public enum StepValidationStatus
    {
        Valid,
        Warning,
        Error
    }

    public interface IGrammarVisitor
    {
        void Sentence(Sentence sentence, IStep step);
        void Table(Table table, IStep step);
        void SetVerification(SetVerification setVerification, IStep step);
        void Paragraph(Paragraph paragraph, IStep step);
        void EmbeddedSection(EmbeddedSection section, IStep step);
        void DoGrammar(DoGrammarStructure grammar, IStep step);
    }

    [Serializable]
    public abstract class GrammarStructure : IFixtureNode
    {
        private readonly List<GrammarError> _errors = new List<GrammarError>();
        private string _name;

        protected GrammarStructure()
        {
            Name = Guid.NewGuid().ToString();
        }

        public FixtureStructure Parent { get; set; }
        public virtual string Label { get { return Name; } }

        #region IFixtureNode Members

        public string Name { get { return _name; } set { _name = value; } }

        public TPath GetPath()
        {
            var path = new TPath(Name);

            if (Parent != null)
            {
                path = path.Push(Parent.Name);
            }

            return path;
        }


        public IEnumerable<GrammarError> AllErrors()
        {
            return _errors;
        }

        public string Description { get; set; }

        #endregion

        protected void logError(GrammarError error)
        {
            _errors.Add(error);
        }

        public abstract void AcceptVisitor(IGrammarVisitor visitor, IStep step);

    }
}