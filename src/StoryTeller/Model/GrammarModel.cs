using System;
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

        public virtual string ToMissingCode()
        {
            return string.Empty;
        }

        /// <summary>
        /// Just notes that this grammar is
        /// </summary>
        [JsonProperty("missing")]
        public bool IsMissing { get; set; }

        public Step ToSampleStep()
        {
            var step = new Step(key);

            if (this is IModelWithCells)
            {
                var cells = this.As<IModelWithCells>().cells ?? new Cell[0];
                foreach (var cell in cells)
                {
                    cell.AddSampleValue(step);
                }
            }

            configureSampleStep(step);

            return step;
        }

        protected internal virtual void configureSampleStep(Step step)
        {
            // nothing
        }

        public void AddError(GrammarError error)
        {
            _errors.Add(error);
        }

        public void AddErrorRange(IEnumerable<GrammarError> grammarErrors)
        {
            _errors.AddRange(grammarErrors);
        }

        public virtual GrammarModel ApplyOverrides(GrammarModel grammar)
        {
            return this;
        }

        public virtual void ResolveDependencies(FixtureLibrary library)
        {
            // Most won't care
        }
    }
}
