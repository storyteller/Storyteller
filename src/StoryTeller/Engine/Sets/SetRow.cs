using StoryTeller.Domain;

namespace StoryTeller.Engine.Sets
{
    public class SetRow
    {
        public SetRow()
        {
            Values = new SimpleDictionary();
            Result = SetMatch.Unknown;
        }

        public IStep Step { get; set; }

        public SetMatch Result { get; set; }
        public SimpleDictionary Values { get; private set; }
        public int ExpectedOrder { get; set; }
        public int ActualOrder { get; set; }
        public bool MissingValues { get; set; }

        public bool Matches(RowValueMatcher matcher, SetRow other)
        {
            if (MissingValues) return false;

            foreach (var key in Values.Keys)
            {
                if (!other.Values.Has(key)) return false;
                if (!matcher.Matches(key, Values[key], other.Values[key])) return false;
            }

            return true;
        }
    }
}