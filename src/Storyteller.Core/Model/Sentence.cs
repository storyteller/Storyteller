namespace Storyteller.Core.Model
{
    public class Sentence : GrammarModel, IModelWithCells
    {
        public Cell[] cells { get; set; }
        public string format;

        public Sentence() : base("sentence")
        {
        }

    }
}