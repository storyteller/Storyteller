using System;
using System.Collections.Generic;
using System.Linq;
using Baseline;

namespace StoryTeller.Equivalence
{
    public class EquivalenceChecker
    {
        private readonly LightweightCache<Type, Func<object, object, bool>> _comparisons 
            = new LightweightCache<Type, Func<object, object, bool>>();

        private readonly IList<IEquivalenceCheckerPolicy> _policies = new List<IEquivalenceCheckerPolicy>()
        {
            new ArrayEquivalencyPolicy(),
            new CollectionEquivalencyPolicy(),
            new EquatablePolicy(),
            new StandardEqualsPolicy()
        };

        public EquivalenceChecker()
        {
            _comparisons.OnMissing = createComparison;
        }

        public bool IsEqual(object expected, object actual)
        {
            if (expected == null)
            {
                return actual == null;
            }
            
            if (actual == null)
            {
                return false;
            }

            return _comparisons[expected.GetType()](expected, actual);
        }
    
        public Func<object, object, bool> CheckerFor(Type type)
        {
            return _comparisons[type];
        }
        
        private Func<object, object, bool> createComparison(Type type)
        {
            return _policies.First(x => x.Matches(type)).CreateComparison(type, this);
        }    
    }
}