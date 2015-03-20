using System.Collections.Generic;
using StoryTeller.Conversion;
using StoryTeller.Model;

namespace StoryTeller.Grammars.Sets
{
    public class OrderedSetMatcher : UnorderedSetMatcher
    {
        public static readonly ISetMatcher Flyweight = new OrderedSetMatcher();

        public override SetVerificationResult Match(Cell[] cells, IEnumerable<StepValues> expectedValues,
            IEnumerable<StepValues> actualValues)
        {
            expectedValues.ApplyOrdering();
            actualValues.ApplyOrdering();

            return base.Match(cells, expectedValues, actualValues);
        }

        protected override void processMatch(StepValues actual, SetVerificationResult result, StepValues expected)
        {
            actual.IsMatched = true;

            if (expected.Order == actual.Order)
            {
                base.processMatch(actual, result, expected);
            }
            else
            {
                result.MarkWrongOrder(expected.Id, actual.Order);
            }
            
        }
    }
}