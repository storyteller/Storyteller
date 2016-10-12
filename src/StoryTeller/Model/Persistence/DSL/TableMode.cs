using System.Linq;
using StoryTeller.Model.Persistence.Markdown;

namespace StoryTeller.Model.Persistence.DSL
{
    public class TableMode : IReaderMode
    {
        private readonly Table _table;
        private int _rowCount;

        public TableMode(string key, string title,  FixtureModel fixture)
        {
            _table = new Table();
            _table.key = key;
            _table.title = title;
            fixture.AddGrammar(_table);
        }

        public int Indention { get; set; }

        public IReaderMode Read(int indention, string text)
        {
            if (!text.IsTableLine()) return null;

            var values = text.ToTableValues();

            if (_rowCount == 0)
            {
                _table.cells = values
                    .Skip(1)
                    .Select(x => new Cell(CellHandling.Basic(), x, typeof(string)))
                    .ToArray();
            }

            _rowCount++;

            return this;
        }

        private string valueFromArray(string[] array, int index)
        {
            return array.Length > index ? array[index] : null;
        }
    }
}
