using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using StoryTeller.Domain;
using StoryTeller.Model;

namespace StoryTeller.Engine.Sets
{
    public class SetVerificationGrammar : IGrammar
    {
        private readonly List<GrammarAction> _befores = new List<GrammarAction>();
        private readonly ISetComparer _comparer;
        private readonly string _labelName;
        private string _leafName;

        public SetVerificationGrammar(string leafName, string labelName, ISetComparer comparer)
        {
            _leafName = leafName;
            _labelName = labelName;
            _comparer = comparer;
        }


        public string LeafName { get { return _leafName; } set { _leafName = value; } }
        public bool Ordered { get; set; }

        public void Execute(IStep containerStep, ITestContext context)
        {
            var actualObjects = findTheObjects(containerStep, context);
            var actualRows = buildActualRows(actualObjects);
            var expectedRows = buildExpectedRows(context, containerStep);

            var valueMatcher = new RowValueMatcher(context);
            _comparer.Columns.Each(x => x.ConfigureMatcher(valueMatcher));

            var matcher = new SetRowMatcher(expectedRows, actualRows, valueMatcher);
            IList<SetRow> results = Ordered ? matcher.CompareOrdered() : matcher.Compare();

            markCounts(context, results);

            context.ResultsFor(containerStep).SetResult(results, _leafName);
        }

        private static void markCounts(ITestContext context, IEnumerable<SetRow> results)
        {
            results.Each(x =>
            {
                if (x.Result == SetMatch.Match)
                {
                    context.IncrementRights();
                }
                else
                {
                    context.IncrementWrongs();
                }
            });
        }

        private IList<SetRow> buildActualRows(IEnumerable actualObjects)
        {
            var list = new List<SetRow>();
            foreach (var o in actualObjects)
            {
                var actual = toActual(o);
                list.Add(actual);
            }

            return list;
        }

        private SetRow toActual(object target)
        {
            var row = new SetRow();

            _comparer.Columns.Each(x => x.ReadActual(target, row));

            return row;
        }

        private IList<SetRow> buildExpectedRows(ITestContext context, IStep step)
        {
            var list = new List<SetRow>();

            step.LeafFor(_leafName).AllSteps().Each(x =>
            {
                var row = toExpectedRow(x, context);
                list.Add(row);
            });

            return list;
        }

        private SetRow toExpectedRow(IStep step, ITestContext context)
        {
            var row = new SetRow()
            {
                Step = step
            };

            _comparer.Columns.Each(x =>
            {
                x.ReadExpected(context, step, row);
                if (!row.Values.Has(x.Cell.Key))
                {
                    row.MissingValues = true;
                }
            });

            return row;
        }

        public GrammarStructure ToStructure(FixtureLibrary library)
        {
            return new SetVerification(_labelName, _leafName, cells())
            {
                Ordered = Ordered
            };
        }

        private List<Cell> cells()
        {
            return _comparer.Columns.Select(x => x.Cell).ToList();
        }

        public string Description { get; set; }

        private IEnumerable findTheObjects(IStep containerStep, ITestContext context)
        {
            IEnumerable actuals = new object[0];
            context.PerformAction(containerStep, () =>
            {
                _befores.Each(x => x(containerStep, context));
                actuals = context.Current<IEnumerable>();
            });

            return actuals;
        }


        public void Before(GrammarAction action)
        {
            _befores.Add(action);
        }
    }
}