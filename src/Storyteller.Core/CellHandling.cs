using Storyteller.Core.Conversion;
using Storyteller.Core.Equivalence;

namespace Storyteller.Core
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

        public static CellHandling Basic()
        {
            return new CellHandling(new EquivalenceChecker(), Conversions.Basic());
        }
    }
}