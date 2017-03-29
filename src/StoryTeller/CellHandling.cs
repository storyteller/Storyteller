using System.Collections.Generic;
using System.Linq;
using Baseline;
using Baseline.Conversion;
using StoryTeller.Conversion;
using StoryTeller.Equivalence;
using StoryTeller.Model;
using StoryTeller.Model.Lists;

namespace StoryTeller
{
    // SAMPLE: CellHandling
    public class CellHandling
    {
        private readonly IList<IRuntimeConverter> _runtimeConvertors = new List<IRuntimeConverter>();

        public CellHandling(EquivalenceChecker equivalence, Conversions conversions)
        {
            Equivalence = equivalence;
            Conversions = conversions;
        }

        public IEnumerable<IRuntimeConverter> RuntimeConvertors => _runtimeConvertors;

        /// <summary>
        /// Add a new conversion or lookup strategy that finds the data at runtime
        /// during a specification run from the raw string data
        /// </summary>
        /// <typeparam name="T"></typeparam>
        public void RegisterRuntimeConversion<T>() where T : IRuntimeConverter, new()
        {
            _runtimeConvertors.Add(new T());
        }

        /// <summary>
        /// Customize how Storyteller does equivalence tests against different types
        /// </summary>
        public EquivalenceChecker Equivalence { get; private set; }

        /// <summary>
        /// Conversion policies that Storyteller uses to convert or find values from
        /// string inputs
        /// </summary>
        public Conversions Conversions { get; private set; }

        /// <summary>
        /// Registered extensions for the system
        /// </summary>
        public IList<IExtension> Extensions { get; } = new List<IExtension>();

        /// <summary>
        /// All the system level selection lists
        /// </summary>
        internal readonly LightweightCache<string, OptionList> Lists = new LightweightCache<string, OptionList>(key => new OptionList(key));

        /// <summary>
        /// Add a system level selection list by string values
        /// </summary>
        /// <param name="name"></param>
        /// <param name="values"></param>
        public void AddSystemLevelList(string name, IEnumerable<string> values)
        {
            var list = new OptionList(name);
            list.AddValues(values.ToArray());

            Lists[name] = list;
        }

        /// <summary>
        /// Add a system level list by key/value options
        /// </summary>
        /// <param name="name"></param>
        /// <param name="options"></param>
        public void AddSystemLevelList(string name, IEnumerable<Option> options)
        {
            var list = new OptionList(name);
            list.AddOptions(options.ToArray());

            Lists[name] = list;
        }

        /// <summary>
        /// Build a basic CellHandling object with the default configuration for
        /// equivalence and conversions
        /// </summary>
        /// <returns></returns>
        public static CellHandling Basic()
        {
            return new CellHandling(new EquivalenceChecker(), new Conversions());
        }
    }
    // ENDSAMPLE
}