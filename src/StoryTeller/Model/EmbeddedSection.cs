using System;
using FubuCore;
using StoryTeller.Domain;

namespace StoryTeller.Model
{
    [Serializable]
    public class EmbeddedSection : GrammarStructure, IEmbeddedGrammar
    {
        private readonly string _label;
        private FixtureStructure _fixture;
        private string _leafName;

        public EmbeddedSection()
        {
        }

        public EmbeddedSection(FixtureStructure fixture, string label, string leafName)
        {
            Name = label;
            _fixture = fixture;
            _label = label;
            if (_label.IsEmpty()) _label = fixture.Name;
            _leafName = leafName;
        }

        public string LeafName { get { return _leafName; } set { _leafName = value; } }

        public FixtureStructure Fixture { get { return _fixture; } set { _fixture = value; } }

        #region IEmbeddedGrammar Members

        public override string Label { get { return _label; } }
        public EmbedStyle Style { get; set; }

        #endregion

        public StepLeaf LeafFor(IStep step)
        {
            return step.LeafFor(_leafName);
        }

        protected internal override void fillExample(IStep step)
        {
            //Section section = _fixture.CreateExample();
            //LeafFor(step).AddParts(section.Parts);
        }

        public override IStep CreateNewStep()
        {
            var step = new Step(Name);
            step.Description = Description;
            LeafFor(step);


            return step;
        }

        public override void AcceptVisitor(IGrammarVisitor visitor, IStep step)
        {
            visitor.EmbeddedSection(this, step);
        }

        public bool Equals(EmbeddedSection obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            return Equals(obj._fixture, _fixture) && Equals(obj._label, _label) &&
                   Equals(obj._leafName, _leafName);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof (EmbeddedSection)) return false;
            return Equals((EmbeddedSection) obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                int result = (_fixture != null ? _fixture.GetHashCode() : 0);
                result = (result*397) ^ (_label != null ? _label.GetHashCode() : 0);
                result = (result*397) ^ (_leafName != null ? _leafName.GetHashCode() : 0);
                return result;
            }
        }

        public StepLeaf GetLeaf(IStep step)
        {
            return step.LeafFor(_leafName);
        }

        public bool IsTitled()
        {
            return Style == EmbedStyle.TitledAndIndented;
        }
    }
}