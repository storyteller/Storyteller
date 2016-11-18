using System.Collections.Generic;
using System.Linq;
using Baseline;

namespace StoryTeller.Model
{
    public class Table : GrammarModel
    {
        public Cell[] cells;
        public string collection = "rows";
        public string title;

        public Table() : base("table")
        {
        }

        protected Table(string key) : base(key)
        {
            
        }

        public override string TitleOrFormat()
        {
            return title;
        }

        public override string ToMissingCode()
        {
            return $@"
        [ExposeAsTable(`{title}`)]
        public void {key}({cells.Select(x => x.ToDeclaration()).Join(", ")})
        {{
            throw new NotImplementedException();
        }}
".TrimEnd().Replace('`', '\"');
        }

        protected internal override void configureSampleStep(Step step)
        {
            var section = step.Collections[collection];
            for (int i = 0; i < 3; i++)
            {
                var row = section.AddStep("row");
                cells.Each(x => x.AddSampleValue(row));
            }
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

            var matchedCells = cells?.Select(c =>
            {
                var match = over.cells.FirstOrDefault(x => x.Key == c.Key);
                return c.ApplyOverrides(match);
            }).ToList() ?? new List<Cell>();

            var keys = cells.Select(x => x.Key).ToList();

            var missingCells = over.cells.Where(x => !keys.Contains(x.Key)).Select(x => x.ApplyOverrides(null));
            table.cells = matchedCells.Concat(missingCells).ToArray();

            return table;
        }
    }
}
