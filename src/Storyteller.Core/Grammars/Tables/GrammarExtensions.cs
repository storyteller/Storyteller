namespace Storyteller.Core.Grammars.Tables
{
    public static class GrammarExtensions
    {
        public static TableGrammar AsTable(this IGrammar inner, string title)
        {
            return new TableGrammar(inner).Titled(title).LeafName("Rows");
        }
    }
}