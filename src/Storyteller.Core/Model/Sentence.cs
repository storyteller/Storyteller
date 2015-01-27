using System.Linq;

namespace Storyteller.Core.Model
{
    public class Sentence : GrammarModel, IModelWithCells
    {
        public Cell[] cells { get; set; }
        public string format;

        public Sentence() : base("sentence")
        {
        }

        public Cell FindCell(string cell)
        {
            return cells.FirstOrDefault(x => x.Key == cell);
        }
    }
}