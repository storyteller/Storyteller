using System.Collections.Generic;
using System.Linq;
using Baseline;

namespace StoryTeller.Model
{
    public class Sentence : GrammarModel, IModelWithCells
    {
        private readonly IList<Cell> _cells = new List<Cell>();

        public Cell[] cells
        {
            get { return _cells.ToArray(); }
            set
            {
                _cells.Clear();
                if (value != null)
                {
                    _cells.AddRange(value);
                }
            }
        }
        public string format;

        public Sentence() : base("sentence")
        {
        }

        public Cell FindCell(string cell)
        {
            return cells.FirstOrDefault(x => x.Key == cell);
        }

        public void AddCell(Cell cell)
        {
            _cells.Add(cell);
        }

        public override GrammarModel Copy()
        {
            var sentence = new Sentence();
            sentence.key = key;
            sentence.format = format;
            sentence.cells = cells?.Select(x => x.Copy()).ToArray();
            return sentence;
        }

        public override void ApplyOverrides(GrammarModel grammar)
        {
            var sentence = grammar as Sentence;
            if (sentence == null) return;

            format = sentence.format;
            cells.Each(c =>
            {
                var match = sentence.cells.FirstOrDefault(x => x.Key == c.Key);
                match?.ApplyOverrides(c);
            });
        }
    }
}
