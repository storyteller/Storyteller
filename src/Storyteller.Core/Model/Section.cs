using System;
using System.Collections.Generic;
using System.Linq;
using FubuCore;
using Newtonsoft.Json;
using Storyteller.Core.Grammars;
using Storyteller.Core.Model.Persistence;
using Storyteller.Core.Results;

namespace Storyteller.Core.Model
{
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

        public Section(string key)
        {
            Key = key;

            if (Id.IsEmpty()) throw new InvalidOperationException("Id cannot be empty or null");
        }

        public CompositeExecution CreatePlan(FixtureLibrary library)
        {
            var fixture = library.Fixtures[Key];

            if (Id.IsEmpty()) Id = Guid.NewGuid().ToString();

            return CreatePlan(library, fixture);
        }

        public CompositeExecution CreatePlan(FixtureLibrary library, IFixture fixture)
        {
            return new CompositeExecution(toExecutionSteps(library, fixture).ToArray());
        }

        private IEnumerable<IExecutionStep> toExecutionSteps(FixtureLibrary library, IFixture fixture)
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