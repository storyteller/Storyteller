using System;
using StoryTeller.Domain;

namespace StoryTeller.Model
{
    [Serializable]
    public class DoGrammarStructure : GrammarStructure
    {
        protected internal override void fillExample(IStep step)
        {
            // no - op;
        }

        public override void AcceptVisitor(IGrammarVisitor visitor, IStep step)
        {
            visitor.DoGrammar(this, step);
        }
    }
}