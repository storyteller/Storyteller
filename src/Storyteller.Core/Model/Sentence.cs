namespace Storyteller.Core.Model
{
    public class Sentence : GrammarModel
    {
        public Cell[] cells;
        public string format;

        public Sentence() : base("sentence")
        {
        }
    }
}