using System.Linq;
using StoryTeller.Model.Persistence.Markdown;

namespace StoryTeller.Model.Persistence.DSL
{
    public class SentenceMode : IReaderMode
    {
        private readonly Sentence _sentence;

        public SentenceMode(Sentence sentence)
        {
            _sentence = sentence;
        }

        public int Indention { get; set; }

        public IReaderMode Read(int indention, string text)
        {
            if (!text.IsTableLine()) return null;

            var values = text.ToTableValues();
            var key = valueFromArray(values, 0);
            var defaultValue = valueFromArray(values, 1);
            var options = valueFromArray(values, 2);
            var editor = valueFromArray(values, 3);
            var result = valueFromArray(values, 4);

            var cell = new Cell(CellHandling.Basic(), key, typeof(string));
            cell.DefaultValue = defaultValue;
            cell.editor = editor;
            cell.options = parseOptions(options);

            _sentence.AddCell(cell);

            return this;
        }

        private string valueFromArray(string[] array, int index)
        {
            return array.Length > index ? array[index] : null;
        }

        private Option[] parseOptions(string line)
        {
            if (string.IsNullOrWhiteSpace(line)) return null;

            var values = line.Split(',');
            return values.Select(x=> new Option(x.Trim(), x.Trim())).ToArray();
        }
    }
}
