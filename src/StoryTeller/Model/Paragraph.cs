using System;
using System.Collections.Generic;
using StoryTeller.Domain;

namespace StoryTeller.Model
{
    public interface IEmbeddedGrammar
    {
        EmbedStyle Style { get; set; }
        string Label { get; }
    }

    public static class EmbeddedGrammarExtensions
    {
        public static bool ShouldBeIndented(this IEmbeddedGrammar grammar)
        {
            return grammar.Style == EmbedStyle.TitledAndIndented || grammar.Style == EmbedStyle.Indented;
        }
    }

    [Serializable]
    public class Paragraph : GrammarStructure, IEmbeddedGrammar
    {
        private readonly List<GrammarStructure> _children = new List<GrammarStructure>();
        private readonly string _label;

        public Paragraph()
        {
        }

        public Paragraph(string label, List<GrammarStructure> children)
        {
            _label = label;
            _children = children;
        }

        public List<GrammarStructure> Children { get { return _children; } }

        #region IEmbeddedGrammar Members

        public override string Label { get { return _label ?? Name; } }
        public EmbedStyle Style { get; set; }

        #endregion

        protected internal override void fillExample(IStep step)
        {
            _children.ForEach(x => x.fillExample(step));
        }

        public override void AcceptVisitor(IGrammarVisitor visitor, IStep step)
        {
            visitor.Paragraph(this, step);
        }

        public void AddStructure(GrammarStructure structure)
        {
            _children.Add(structure);
        }

        public void ForEachGrammar(Action<GrammarStructure> action)
        {
            foreach (GrammarStructure structure in _children)
            {
                action(structure);
            }
        }
    }
}