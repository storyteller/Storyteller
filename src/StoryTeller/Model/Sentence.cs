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

        public override GrammarModel ApplyOverrides(GrammarModel grammar)
        {
            var sentence = new Sentence();
            sentence.key = key;

            var over = grammar as Sentence;
            if (over == null)
            {
                sentence.format = format;
                sentence.cells = cells?.Select(c => c.ApplyOverrides(null)).ToArray();
                return sentence;
            }

            sentence.format = over.format.IsNotEmpty() ? over.format : format;
            sentence.cells = cells?.Select(c =>
            {
                var match = sentence.cells.FirstOrDefault(x => x.Key == c.Key);
                return c.ApplyOverrides(match);
            }).ToArray();

            return sentence;
        }
    }
}
