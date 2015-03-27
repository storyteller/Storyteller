using FubuCore.Util;
using StoryTeller.Conversion;
using StoryTeller.Equivalence;
using StoryTeller.Model.Lists;

namespace StoryTeller
{
    public class CellHandling
    {
        public CellHandling(EquivalenceChecker equivalence, Conversions conversions)
        {
            Equivalence = equivalence;
            Conversions = conversions;
        }

        public EquivalenceChecker Equivalence { get; private set; }
        public Conversions Conversions { get; private set; }

        public readonly Cache<string, OptionList> Lists = new Cache<string, OptionList>(key => new OptionList(key)); 

        public static CellHandling Basic()
        {
            return new CellHandling(new EquivalenceChecker(), new Conversions());
        }
    }
}