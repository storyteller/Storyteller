using System;
using System.Reflection.Emit;
using Storyteller.Core.Conversion;
using Storyteller.Core.Model;
using Storyteller.Core.Results;

namespace Storyteller.Core.Grammars
{
    public class EmbeddedSectionGrammar<T> : IGrammar where T : Fixture, new()
    {
        private readonly T _fixture;
        private Action<ISpecContext> _before;

        // TODO -- does this become something that's configurable later?
        // TODO -- only matters if we care in paragraph
        private readonly string _leafName;

        public EmbeddedSectionGrammar()
        {
            _fixture = new T();
            _leafName = _fixture.Key;
            Title = _fixture.Title;
        }

        public string Title { get; set; }

        public EmbeddedSectionGrammar<T> Before(Action<ISpecContext> action)
        {
            _before = action;
            return this;
        } 

        public IExecutionStep CreatePlan(Step step, FixtureLibrary library)
        {
            var section = step.Collections[_leafName];
            var sectionPlan = section.CreatePlan(library, _fixture);

            if (_before == null)
            {
                return sectionPlan;
            }

            var silentAction = new SilentAction(Stage.before, _before, step);
            return new CompositeExecution(new IExecutionStep[]{silentAction, sectionPlan});
        }

        public GrammarModel Compile(CellHandling cells)
        {
            return new EmbeddedSection
            {
                fixture = _fixture.Compile(cells),
                collection = _leafName,
                title = Title,
            };
        }


    }
}