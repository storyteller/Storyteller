using System;
using System.IO;
using NUnit.Framework;
using StoryTeller.Engine;
using StoryTeller.Engine.Sets;
using System.Collections.Generic;
using System.Linq;
using TestContext = StoryTeller.Engine.TestContext;

namespace StoryTeller.Testing.Engine.Sets
{

    [TestFixture]
    public class when_matching_exactly : SetRowMatcherContext
    {
        protected override void contextIs()
        {
            expected = @"
a=1;b=2
a=3;b=4
a=5;b=6
";

            actual = @"
a=1;b=2
a=3;b=4
a=5;b=6
";
        }

        [Test]
        public void the_count_should_be_exactly_the_same_number_as_expected()
        {
            checkedValues.Count.ShouldEqual(3);
        }

        [Test]
        public void each_row_in_the_result_should_be_a_match()
        {
            checkedValues.Each(x => x.Result.ShouldEqual(SetMatch.Match));
        }

        [Test]
        public void the_order_of_the_rows_should_be_that_as_the_expected_rows()
        {
            checkedValues[0].Values["a"].ShouldEqual(1);
            checkedValues[1].Values["a"].ShouldEqual(3);
            checkedValues[2].Values["a"].ShouldEqual(5);
        }
    }

    [TestFixture]
    public class when_the_contents_match_but_out_of_order : SetRowMatcherContext
    {
        protected override void contextIs()
        {
            expected = @"
a=1;b=2
a=3;b=4
a=5;b=6
";

            actual = @"
a=3;b=4
a=5;b=6
a=1;b=2
";
        }

        [Test]
        public void the_count_should_be_exactly_the_same_number_as_expected()
        {
            checkedValues.Count.ShouldEqual(3);
        }

        [Test]
        public void each_row_in_the_result_should_be_a_match()
        {
            checkedValues.Each(x => x.Result.ShouldEqual(SetMatch.Match));
        }

        [Test]
        public void the_order_of_the_rows_should_be_that_as_the_expected_rows()
        {
            checkedValues[0].Values["a"].ShouldEqual(1);
            checkedValues[1].Values["a"].ShouldEqual(3);
            checkedValues[2].Values["a"].ShouldEqual(5);
        }
    }

    [TestFixture]
    public class with_extra_rows : SetRowMatcherContext
    {
        protected override void contextIs()
        {
            expected = @"
a=1;b=2
a=3;b=4
a=5;b=6
";

            actual = @"
a=3;b=4
a=5;b=6
a=1;b=2
a=10;b=2
a=11;b=2
";
        }

        [Test]
        public void extra_rows_should_be_in_the_results()
        {
            checkedValues.Count.ShouldEqual(5);
            checkedValues.Count(x => x.Result == SetMatch.Extra);
        }
    }

    [TestFixture]
    public class when_doing_set_verification_with_missing_rows : SetRowMatcherContext
    {
        protected override void contextIs()
        {
            expected = @"
a=11;b=2
a=12;b=2
a=1;b=2
a=3;b=4
a=5;b=6
";

            actual = @"
a=3;b=4
a=5;b=6
a=1;b=2

";
        }

        [Test]
        public void should_have_rows_for_all_the_expected_rows()
        {
            checkedValues.Count.ShouldEqual(5);
        }

        [Test]
        public void the_missing_rows_should_be_tagged_as_missing()
        {
            checkedValues.Count(x => x.Result == SetMatch.Missing).ShouldEqual(2);
        }

        [Test]
        public void should_be_in_the_order_of_the_expected_set()
        {
            checkedValues[0].Values["a"].ShouldEqual(11);
            checkedValues[1].Values["a"].ShouldEqual(12);
            checkedValues[2].Values["a"].ShouldEqual(1);
            checkedValues[3].Values["a"].ShouldEqual(3);
            checkedValues[4].Values["a"].ShouldEqual(5);
        }
    }

    [TestFixture]
    public class with_extra_and_missing_rows : SetRowMatcherContext
    {
        protected override void contextIs()
        {
            expected = @"
a=11;b=2
a=1;b=2
a=3;b=4
a=5;b=6
";

            actual = @"
a=3;b=4
a=5;b=6
a=1;b=2
a=12;b=2
a=13;b=2
";
        }

        [Test]
        public void should_be_a_row_for_each_match_missing_and_extra()
        {
            checkedValues.Count.ShouldEqual(6);
        }

        [Test]
        public void should_have_one_missing()
        {
            checkedValues.Count(x => x.Result == SetMatch.Extra).ShouldEqual(2);
        }

        [Test]
        public void should_have_one_extra()
        {
            checkedValues.Count(x => x.Result == SetMatch.Missing).ShouldEqual(1);
        }
    }

    [TestFixture]
    public class when_the_set_matches_but_the_order_is_wrong : SetRowMatcherContext
    {
        protected override void contextIs()
        {
            expected = @"
a=1;b=2
a=3;b=4
a=5;b=6
";

            actual = @"
a=1;b=2
a=5;b=6
a=3;b=4
";
        }

        [Test]
        public void one_row_for_each_match_and_each_out_of_order_row()
        {
            _checked = null;
            orderedCheckValues.Count.ShouldEqual(3);
        }

        [Test]
        public void the_out_of_order_rows_should_be_marked()
        {
            _checked = null;
            orderedCheckValues.Count(x => x.Result == SetMatch.OutOfOrder).ShouldEqual(2);
        }

        [Test]
        public void should_appear_in_the_actual_order()
        {
            _checked = null;
            orderedCheckValues[0].Values["a"].ShouldEqual(1);
            orderedCheckValues[1].Values["a"].ShouldEqual(5);
            orderedCheckValues[2].Values["a"].ShouldEqual(3);
        }
    }


    public abstract class SetRowMatcherContext
    {
        private IList<SetRow> _expected;
        private IList<SetRow> _actual;
        protected IList<SetRow> _checked;

        [SetUp]
        public void SetUp()
        {
            _checked = null;
            _checked = _expected = _actual = null;
            contextIs();
        }

        protected abstract void contextIs();

        protected string expected
        {
            set
            {
                _expected = buildRows(value);
            }
        }

        protected string actual
        {
            set
            {
                _actual = buildRows(value);
            }
        }

        protected IList<SetRow> checkedValues
        {
            get
            {
                if (_checked == null)
                {
                    _checked = new SetRowMatcher(_expected, _actual, new RowValueMatcher(new TestContext())).Compare();
                }

                return _checked;
            }            
        }

        protected IList<SetRow> orderedCheckValues
        {
            get
            {
                return new SetRowMatcher(_expected, _actual, new RowValueMatcher(new TestContext())).CompareOrdered();
            }
        }


        private SetRow buildRow(string text)
        {
            var row = new SetRow();
            text.Trim().Split(';').Each(x =>
            {
                var parts = x.Split('=');
                row.Values[parts[0]] = int.Parse(parts[1]);
            });

            return row;
        } 

        private IList<SetRow> buildRows(string text)
        {
            var list = new List<SetRow>();

            var reader = new StringReader(text);
            var line = string.Empty;
            while ( (line = reader.ReadLine()) != null)
            {
                if (line.Trim() == string.Empty) continue;

                list.Add(buildRow(line));
            }

            return list;
        }


    }
}