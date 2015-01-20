using System.Collections.Generic;
using System.Linq;
using Storyteller.Core.Grammars;
using Storyteller.Core.Results;

namespace Storyteller.Core.Model
{
    public class Section : Node, INodeHolder
    {
        public readonly string Key;
        private readonly IList<Node> _children = new List<Node>();

        public IList<Node> Children
        {
            get { return _children; }
        }

        public Section(string key)
        {
            Key = key;
        }

        public CompositeExecution CreatePlan(FixtureLibrary library)
        {
            var fixture = library.Fixtures[Key];

            return CreatePlan(library, fixture);
        }

        public CompositeExecution CreatePlan(FixtureLibrary library, IFixture fixture)
        {
            return new CompositeExecution(toExecutionSteps(library, fixture));
        }

        private IEnumerable<IExecutionStep> toExecutionSteps(FixtureLibrary library, IFixture fixture)
        {
            yield return new SilentAction(Stage.setup, x =>
            {
                fixture.Context = x;
                fixture.SetUp();
            }, this);

            // Ignore comments!
            foreach (var step in Children.OfType<Step>())
            {
                var grammar = fixture.GrammarFor(step.Key);
                yield return grammar.CreatePlan(step, library);
            }

            yield return new SilentAction(Stage.teardown, x => fixture.TearDown(), this);
        } 
    }
}