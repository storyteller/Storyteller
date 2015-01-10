namespace Storyteller.Core.Model
{
    public class Table : GrammarModel
    {
        public Cell[] cells;
        public string collection;
        public string title;

        public Table() : base("table")
        {
        }
    }
}