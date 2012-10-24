using System.Collections.Generic;
using System.Linq;

namespace StoryTeller.Engine.Sets
{
    public class SetRowMatcher
    {
        private readonly IList<SetRow> _expecteds;
        private readonly IList<SetRow> _actuals;
        private readonly RowValueMatcher _matcher;

        public SetRowMatcher(IList<SetRow> expected, IList<SetRow> actual, RowValueMatcher matcher)
        {
            _expecteds = expected;
            _actuals = actual;
            _matcher = matcher;

            for (int i = 0; i < _expecteds.Count; i++)
            {
                _expecteds[i].ExpectedOrder = i + 1;
            }

            for (int i = 0; i < _actuals.Count; i++)
            {
                _actuals[i].ActualOrder = i + 1;
            }
        }

        public IList<SetRow> Compare()
        {
            foreach (var actual in _actuals)
            {
                var expected = _expecteds.FirstOrDefault(x => x.Matches(_matcher, actual));
                if (expected != null)
                {
                    actual.Result = expected.Result = SetMatch.Match;
                    expected.ActualOrder = actual.ActualOrder;
                }
            }

            _expecteds.Where(x => x.Result == SetMatch.Unknown).Each(x => x.Result = SetMatch.Missing);
            _actuals.Where(x => x.Result == SetMatch.Unknown).Each(x => x.Result = SetMatch.Extra);

            var returnList =  _expecteds.OrderBy(x => x.ExpectedOrder).ToList();
            returnList.AddRange(_actuals.Where(x => x.Result == SetMatch.Extra).OrderBy(x => x.ActualOrder));

            return returnList;
        }

        public IList<SetRow> CompareOrdered()
        {
            var list = Compare();
            list.Where(x => x.ActualOrder != x.ExpectedOrder && x.Result == SetMatch.Match).Each(x => x.Result = SetMatch.OutOfOrder);

            return list.OrderBy(x => x.ActualOrder).ToList();
        }
    }
}