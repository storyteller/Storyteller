using System;
using System.Collections.Generic;
using System.Linq;
using Baseline;
using Newtonsoft.Json;
using StoryTeller.Grammars;
using StoryTeller.Model.Persistence;
using StoryTeller.Results;

namespace StoryTeller.Model
{
#if NET46
    [Serializable]
#endif
    public class Section : Node, INodeHolder
    {
        [JsonProperty("key")]
        public readonly string Key;
        private readonly IList<Node> _children = new List<Node>();

        [JsonProperty("type")]
        public string Type
        {
            get { return "section"; }
        }

        [JsonProperty("steps", ItemConverterType = typeof(NodeConverter))]
        public IList<Node> Children
        {
            get { return _children; }
        }

        private IDictionary<string, bool> _activeCells = new Dictionary<string, bool>();

        [JsonProperty("activeCells")]
        public IDictionary<string, bool> ActiveCells
        {
            get { return _activeCells ?? new Dictionary<string, bool>(); }
            set { _activeCells = value; }
        }

        public Section(string key)
        {
            Key = key;

            if (id.IsEmpty()) throw new InvalidOperationException("Id cannot be empty or null");
        }

        public CompositeExecution CreatePlan(FixtureLibrary library)
        {
            var fixture = library.Fixtures[Key];

            if (id.IsEmpty()) id = Guid.NewGuid().ToString();

            return CreatePlan(library, fixture);
        }

        public CompositeExecution CreatePlan(FixtureLibrary library, Fixture fixture)
        {
            return new CompositeExecution(toExecutionSteps(library, fixture).ToArray());
        }

        private IEnumerable<IExecutionStep> toExecutionSteps(FixtureLibrary library, Fixture fixture)
        {
            var setup = SilentAction.AsCritical("Fixture", Stage.setup, x =>
            {
                fixture.Context = x;
                fixture.SetUp();
            }, this);
            setup.Subject = Key + ":SetUp";

            yield return setup;

            // Ignore comments!
            foreach (var step in Children.OfType<Step>())
            {
                var grammar = fixture.GrammarFor(step.Key);
                yield return grammar.CreatePlan(step, library);
            }

            var teardown = SilentAction.AsCritical("Fixture", Stage.teardown, x => fixture.TearDown(), this);
            teardown.Subject = Key + ":TearDown";
            yield return teardown;
        }

        public Comment AddComment(string text)
        {
            var comment = new Comment {Text = text};
            Children.Add(comment);

            return comment;
        }

        public Step AddStep(string key)
        {
            var step = new Step(key);
            Children.Add(step);

            return step;
        }
    }
}