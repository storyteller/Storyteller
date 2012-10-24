using System;
using StoryTeller.Engine;

namespace StoryTeller
{
    public static class GrammarExtensions
    {
        public static TableGrammar AsTable(this IGrammar inner, string title)
        {
            return new TableGrammar(inner.As<IGrammarWithCells>(), "Rows")
            {
                LabelName = title
            };
        }

        public static TableGrammar AsTable(this IGrammar inner, string title, string leafName)
        {
            return new TableGrammar(inner.As<IGrammarWithCells>(), leafName)
            {
                LabelName = title
            };
        }

        public static GrammarAction ToGrammarAction(this Action action)
        {
            return (c, s) => action();
        }
    }
}