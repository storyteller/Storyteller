using StoryTeller.Model;

namespace StoryTeller.Grammars.Sets
{
    public class SetVerification : GrammarModel
    {
        public Cell[] cells;
        public string collection;
        public bool ordered;
        public string title;

        public SetVerification()
            : base("set-verification")
        {
        }
    }
}