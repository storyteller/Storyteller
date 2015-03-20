using System.Collections.Generic;
using System.Linq;
using StoryTeller.Conversion;
using StoryTeller.Messages;
using StoryTeller.Results;

namespace StoryTeller.Grammars.Sets
{
    public class SetVerificationResult : ClientMessage, IResultMessage
    {
        private readonly IList<IDictionary<string, object>> _extras = new List<IDictionary<string, object>>();
        private readonly IList<string> _matches = new List<string>();
        private readonly IList<string> _missing = new List<string>();
        private readonly IList<WrongOrder> _wrongOrders = new List<WrongOrder>();

        public SetVerificationResult() : base("set-verification-result")
        {
        }

        public string spec { get; set; }

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

        public WrongOrder[] wrongOrdered
        {
            get { return _wrongOrders.ToArray(); }
        }

        public void Tabulate(Counts counts)
        {
            counts.Rights += _matches.Count;
            counts.Wrongs += _missing.Count;
            counts.Wrongs += _extras.Count;
            counts.Wrongs += _wrongOrders.Count;
            
        }

        public string id { get; set; }

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

        public override string ToString()
        {
            var text = "SetVerificationResult for " + id;
            if (_matches.Any())
            {
                text += "\n Matched on " + _matches.Join(", ");
            }

            if (_missing.Any())
            {
                text += "\n Missing: " + _missing.Join(", ");
            }

            if (_extras.Any())
            {
                text += "\n Extras: " + _extras.Count;
            }

            if (_wrongOrders.Any())
            {
                text += "\n Wrong ordered: " + _wrongOrders.Select(x => x.ToString()).Join(", ");
            }


            return text;
        }

        public string type
        {
            get { return "set-verification-result"; }
        }
    }
}