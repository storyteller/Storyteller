using StoryTeller.Grammars.Paragraphs;

namespace StoryTeller.Grammars.Tables
{
    public static class GrammarExtensions
    {
        public static TableGrammar AsTable(this IGrammar inner, string title)
        {
            return new TableGrammar(inner).Titled(title).LeafName("Rows");
        }
    }
}