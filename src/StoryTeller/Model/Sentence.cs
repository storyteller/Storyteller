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
    }
}
