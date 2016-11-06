using StoryTeller.Model;

namespace StoryTeller.Grammars.Sets
{
    public class SetVerification : Table
    {
        public bool ordered;

        public SetVerification()
            : base("set-verification")
        {
        }
    }
}