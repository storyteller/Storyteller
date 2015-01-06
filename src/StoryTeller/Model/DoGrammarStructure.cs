using System;
using StoryTeller.Domain;

namespace StoryTeller.Model
{
    [Serializable]
    public class DoGrammarStructure : GrammarStructure
    {
        public override void AcceptVisitor(IGrammarVisitor visitor, IStep step)
        {
            visitor.DoGrammar(this, step);
        }
    }
}