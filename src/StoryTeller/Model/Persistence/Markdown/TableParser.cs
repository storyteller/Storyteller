using System;
using Baseline;

namespace StoryTeller.Model.Persistence.Markdown
{
    public class TableParser : IReaderMode
    {
        private readonly Section _section;
        private string[] _cells;

        public TableParser(Section section)
        {
            _section = section;
        }

        public IReaderMode Read(int indention, string text)
        {
            if (!text.IsTableLine()) return null;

            var values = text.ToTableValues();
            if (_cells == null)
            {
                _cells = values;
            }
            else
            {
                if (values.Length != _cells.Length)
                    throw new InvalidOperationException(
                        $"Wrong number of cells. Expected {_cells.Join(", ")}, but got {values.Length} data values in \n\"{text}\"");

                var step = new Step("row");
                for (var i = 0; i < _cells.Length; i++)
                {
                    var key = _cells[i];
                    step.Values.Add(key, values[i]);
                }

                _section.Children.Add(step);
            }

            return this;
        }

        public int Indention { get; set; }
    }
}