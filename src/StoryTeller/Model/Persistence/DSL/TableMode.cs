using System.Linq;
using Baseline;
using StoryTeller.Model.Persistence.Markdown;

namespace StoryTeller.Model.Persistence.DSL
{
    public abstract class GrammarModeBase : IReaderMode
    {
        public int Indention { get; set; }

        public abstract IReaderMode Read(int indention, string text);

        protected void applyValue(string target, Cell cell, string value)
        {
            switch (target.ToLower())
            {
                case "cell":
                    cell.Key = value;
                    break;
                case "default":
                    cell.DefaultValue = value;
                    break;
                case "options":
                    cell.options = parseOptions(value);
                    break;
                case "editor":
                    cell.editor = value;
                    break;
                case "result":
                    cell.result = value;
                    break;
            }
        }

        protected Option[] parseOptions(string line)
        {
            if (string.IsNullOrWhiteSpace(line)) return null;

            var values = line.Split(',');
            return values.Select(x => new Option(x.Trim(), x.Trim())).ToArray();
        }
    }

    public class TableMode : GrammarModeBase
    {
        private readonly Table _table;

        public TableMode(string key, string title,  FixtureModel fixture)
        {
            _table = new Table();
            _table.key = key;
            _table.title = title;
            fixture.AddGrammar(_table);
        }

        public override IReaderMode Read(int indention, string text)
        {
            if (!text.IsTableLine()) return null;

            var values = text.ToTableValues();

            if (_table.cells == null)
            {
                _table.cells = values
                    .Skip(1)
                    .Select(x => new Cell(CellHandling.Basic(), x, typeof(string)))
                    .ToArray();

                return this;
            }

            var target = values.First();
            var rest = values.Skip(1).Take(_table.cells.Length).ToList();

            if (!rest.Any()) return null;

            rest.Each((value, i) =>
            {
                var cell = _table.cells[i];
                applyValue(target, cell, value);
            });

            return this;
        }
    }
}
