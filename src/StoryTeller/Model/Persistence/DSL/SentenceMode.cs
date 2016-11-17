using System.Linq;
using Baseline;
using StoryTeller.Model.Persistence.Markdown;

namespace StoryTeller.Model.Persistence.DSL
{
    public class SentenceMode : GrammarModeBase
    {
        private readonly Sentence _sentence;

        public SentenceMode(Sentence sentence)
        {
            _sentence = sentence;
        }

        public override IReaderMode Read(int indention, string text)
        {
            if (!text.IsTableLine()) return null;

            var values = text.ToTableValues();

            if (values[0] == "sentence" && (_sentence.cells == null || _sentence.cells.Length == 0))
            {
                _sentence.cells = values
                    .Skip(1)
                    .Select(x => new Cell(CellHandling.Basic(), x, typeof(string)))
                    .ToArray();

                return this;
            }

            var target = values.First();
            var rest = values.Skip(1).Take(_sentence.cells.Length).ToList();

            if (!rest.Any()) return null;

            rest.Each((value, i) =>
            {
                var cell = _sentence.cells[i];
                applyValue(target, cell, value);
            });

            return this;
        }
    }
}
