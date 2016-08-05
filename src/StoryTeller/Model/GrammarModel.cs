using System.Collections.Generic;
using System.Linq;
using Baseline;
using Newtonsoft.Json;

namespace StoryTeller.Model
{
    public abstract class GrammarModel
    {
        public string key;

        public readonly string type;

        protected GrammarModel(string type)
        {
            this.type = type;
        }

        private readonly IList<GrammarError> _errors = new List<GrammarError>();

        [JsonIgnore]
        public bool IsHidden;

        public GrammarError[] errors
        {
            get { return _errors.ToArray(); }
            set
            {
                _errors.Clear();
                _errors.AddRange(value);

            }
        }

        public void AddError(GrammarError error)
        {
            _errors.Add(error);
        }

        public void AddErrorRange(IEnumerable<GrammarError> grammarErrors)
        {
            _errors.AddRange(grammarErrors);
        }
    }
}