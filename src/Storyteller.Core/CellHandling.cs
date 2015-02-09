using FubuCore.Util;
using Storyteller.Core.Conversion;
using Storyteller.Core.Engine;
using Storyteller.Core.Equivalence;
using Storyteller.Core.Model.Lists;

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

        public readonly Cache<string, OptionList> Lists = new Cache<string, OptionList>(key => new OptionList(key)); 

        public static CellHandling Basic()
        {
            return new CellHandling(new EquivalenceChecker(), Conversions.Basic());
        }

        public static CellHandling ForSystem(ISystem system)
        {
            var conversions = new Conversions(system.ConversionProviders());

            // TODO -- add the system level lists here too
            return new CellHandling(new EquivalenceChecker(), conversions);
        }
    }
}