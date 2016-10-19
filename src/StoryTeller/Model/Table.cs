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

        public override GrammarModel ApplyOverrides(GrammarModel grammar)
        {
            var table = new Table();
            table.key = key;

            var over = grammar as Table;
            if (over == null)
            {
                table.title = title;
                table.collection = collection;
                table.cells = cells?.Select(c => c.ApplyOverrides(null)).ToArray();
                return table;
            }

            table.title = over.title.IsNotEmpty() ? over.title : title;
            table.collection = over.collection.IsNotEmpty() ? over.collection : collection;
            table.cells = cells?.Select(c =>
            {
                var match = over.cells.FirstOrDefault(x => x.Key == c.Key);
                return c.ApplyOverrides(match);
            }).ToArray();

            return table;
        }
    }
}
