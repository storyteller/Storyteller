namespace Storyteller.Core.Model
{
    public class Fact : GrammarModel
    {
        public Cell[] cells;
        public string format;

        public Fact() : base("fact")
        {
        }
    }
}