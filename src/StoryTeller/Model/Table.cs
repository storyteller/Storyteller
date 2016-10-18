using System.Linq;
using Baseline;

namespace StoryTeller.Model
{
    public class Table : GrammarModel
    {
        public Cell[] cells;
        public string collection;
        public string title;

        public Table() : base("table")
        {
        }

        public override GrammarModel Copy()
        {
            var table = new Table();
            table.title = title;
            table.collection = collection;
            table.cells = cells?.Select(x => x.Copy()).ToArray();
            return table;
        }

        public override void ApplyOverrides(GrammarModel grammar)
        {
            var table = grammar as Table;
            if (table == null) return;

            title = table.title;
            cells.Each(c =>
            {
                var match = table.cells.FirstOrDefault(x => x.Key == c.Key);
                match?.ApplyOverrides(c);
            });
        }
    }
}
