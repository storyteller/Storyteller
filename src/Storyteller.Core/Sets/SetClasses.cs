using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Security.Policy;
using System.Threading.Tasks;
using FubuCore.Reflection;
using Storyteller.Core.Conversion;
using Storyteller.Core.Engine;
using Storyteller.Core.Model;
using Storyteller.Core.Results;

namespace Storyteller.Core.Sets
{
    public class SetVerificationGrammar : IGrammar
    {
        private readonly string _title;
        private readonly string _leafName;
        private readonly ISetComparison _comparison;
        private Cell[] _cells;
        private bool _ordered;

        public SetVerificationGrammar(string title, string leafName, ISetComparison comparison)
        {
            _title = title;
            _leafName = leafName;
            _comparison = comparison;
            _ordered = false;
        }

        public SetVerificationGrammar Ordered()
        {
            _ordered = true;
            return this;
        }

        public IExecutionStep CreatePlan(Step step, FixtureLibrary library)
        {
            var section = step
                .Collections[_leafName];

            var expected = section
                .Children.OfType<Step>()
                .Select(row => _cells.ToStepValues(row));

            ISetMatcher matcher = _ordered ? OrderedSetMatcher.Flyweight : UnorderedSetMatcher.Flyweight;

            return new VerificationSetPlan(section, matcher, _comparison, expected, _cells);
        }

        public GrammarModel Compile(CellHandling cells)
        {
            _cells = _comparison.BuildCells(cells);

            return new SetVerification
            {
                title = _title,
                cells = _cells,
                collection = _leafName,
                ordered = _ordered
            };
        }
    }

    public class VerificationSetPlan : ILineExecution
    {
        private readonly Section _section;
        private readonly ISetMatcher _matcher;
        private readonly ISetComparison _comparison;
        private readonly IEnumerable<StepValues> _expected;
        private readonly Cell[] _cells;

        public VerificationSetPlan(Section section, ISetMatcher matcher, ISetComparison comparison, IEnumerable<StepValues> expected, Cell[] cells)
        {
            _section = section;
            _matcher = matcher;
            _comparison = comparison;
            _expected = expected;
            _cells = cells;
        }

        public int Count()
        {
            return 1;
        }

        public void AcceptVisitor(ISpecExecutor executor)
        {
            executor.Line(this);
        }

        public void Execute(ISpecContext context)
        {
            var fetch = _comparison.Fetch(context).ContinueWith(t =>
            {
                // TODO -- do the Flatten() trick here on the aggregated exception
                context.LogException(_section.Id, t.Exception);

                return t.Result;
            }, TaskContinuationOptions.OnlyOnFaulted);

            var convert = Task.Factory.StartNew(() =>
            {
                _expected.Each(x =>
                {
                    x.DoDelayedConversions(context);
                    if (!x.Errors.Any()) return;
                    
                    var result = x.ToConversionErrorResult();
                    context.LogResult(result);
                });
            });

            Task.WaitAll(fetch, convert);

            if (!fetch.IsFaulted && _expected.All(x => !x.HasErrors()))
            {
                SetVerificationResult result = CreateResults(_expected, fetch.Result);
                context.LogResult(result);
            }
        }

        public SetVerificationResult CreateResults(IEnumerable<StepValues> expected, IEnumerable<StepValues> actual)
        {
            var result = _matcher.Match(_cells, expected, actual);
            result.id = _section.Id;

            return result;
        }

        public object Position { get; set; }
    }

    public interface ISetMatcher
    {
        SetVerificationResult Match(Cell[] cells, IEnumerable<StepValues> expected, IEnumerable<StepValues> actual);
    }

    public class UnorderedSetMatcher : ISetMatcher
    {
        public SetVerificationResult Match(Cell[] cells, IEnumerable<StepValues> expected, IEnumerable<StepValues> actual)
        {
            throw new System.NotImplementedException();
        }

        public static readonly ISetMatcher Flyweight = new UnorderedSetMatcher();
    }

    public class OrderedSetMatcher : ISetMatcher
    {
        public SetVerificationResult Match(Cell[] cells, IEnumerable<StepValues> expected, IEnumerable<StepValues> actual)
        {
            throw new System.NotImplementedException();
        }

        public static readonly ISetMatcher Flyweight = new OrderedSetMatcher();
    }

    public interface ISetComparison
    {
        Task<StepValues[]> Fetch(ISpecContext context);
        Cell[] BuildCells(CellHandling handling);
    }

    public class StringListComparison : ISetComparison
    {
        public StringListComparison(string key, Func<ISpecContext, IEnumerable<string>> source)
        {
        }

        public Task<StepValues[]> Fetch(ISpecContext context)
        {
            throw new NotImplementedException();
        }

        public Cell[] BuildCells(CellHandling handling)
        {
            throw new NotImplementedException();
        }
    }

    public class ObjectComparison<T> : ISetComparison
    {
        private readonly IList<Accessor> _accessors = new List<Accessor>();
        private readonly IList<Cell> _cells = new List<Cell>();

        public void Compare(Accessor accessor)
        {
            
        }

        public Task<StepValues[]> Fetch(ISpecContext context)
        {
            throw new NotImplementedException();
        }

        public Cell[] BuildCells(CellHandling handling)
        {
            throw new NotImplementedException();
        }
    }

    public class SetVerification : GrammarModel
    {
        public Cell[] cells;
        public string collection;
        public string title;
        public bool ordered;

        public SetVerification()
            : base("set-verification")
        {
        }
    }

    public class SetVerificationResult : IResultMessage
    {
        private readonly IList<string> _matches = new List<string>();
        private readonly IList<string> _missing = new List<string>();
        private readonly IList<IDictionary<string, object>> _extras = new List<IDictionary<string, object>>();
        private readonly IList<WrongOrder> _wrongOrders = new List<WrongOrder>(); 

        public string[] matches
        {
            get { return _matches.ToArray(); }
        }

        public string[] missing
        {
            get { return _missing.ToArray(); }
        }

        public IDictionary<string, object>[] extras
        {
            get { return _extras.ToArray(); }
        } 

        public void MarkMatched(string id)
        {
            _matches.Add(id);
        }

        public void MarkExtra(StepValues values)
        {
            _extras.Add(values.RawData);
        }

        public void MarkMissing(string id)
        {
            _missing.Add(id);
        }

        public void MarkWrongOrder(string id, int actual)
        {
            _wrongOrders.Add(new WrongOrder(id, actual));
        }

        public WrongOrder[] wrongOrdered
        {
            get { return _wrongOrders.ToArray(); }
        }

        public void Tabulate(Counts counts)
        {
            throw new NotImplementedException();
        }

        public string id { get; set; }
    }

    public class WrongOrder
    {
        public int actual;
        public string id;

        public WrongOrder(string id, int actual)
        {
            this.id = id;
            this.actual = actual;
        }

        protected bool Equals(WrongOrder other)
        {
            return actual == other.actual && string.Equals(id, other.id);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != this.GetType()) return false;
            return Equals((WrongOrder) obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                return (actual*397) ^ (id != null ? id.GetHashCode() : 0);
            }
        }

        public override string ToString()
        {
            return string.Format("Order: {0}, Id: {1}", actual, id);
        }
    }
}