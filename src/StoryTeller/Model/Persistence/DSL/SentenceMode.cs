using Baseline;
using StoryTeller.Model.Persistence.Markdown;

namespace StoryTeller.Model.Persistence.DSL
{
    public class SentenceMode : GrammarModeBase
    {
        private readonly Sentence _sentence;
        private string[] _template;

        public SentenceMode(Sentence sentence)
        {
            _sentence = sentence;
        }

        public override IReaderMode Read(int indention, string text)
        {
            if (!text.IsTableLine()) return null;

            var values = text.ToTableValues();

            if (_template == null)
            {
                _template = values;
                return this;
            }

            var cell = new Cell(CellHandling.Basic(), null, typeof(string));

            values.Each((value, i) =>
            {
                applyValue(_template[i], cell, value);
            });

            _sentence.AddCell(cell);

            return this;
        }
    }
}
