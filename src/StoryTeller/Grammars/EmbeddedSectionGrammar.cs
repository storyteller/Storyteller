using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using StoryTeller.Model;
using StoryTeller.NewEngine;
using StoryTeller.Results;

namespace StoryTeller.Grammars
{
    public class EmbeddedSectionGrammar<T> : IGrammar where T : Fixture, new()
    {
        private readonly T _fixture;
        private Func<Section, SilentAction> _before;
        private Func<Section, SilentAction> _after;

        // TODO -- does this become something that's configurable later?
        // TODO -- only matters if we care in paragraph
        private readonly string _leafName;
        

        public EmbeddedSectionGrammar()
        {
            _fixture = new T();
            _leafName = _fixture.Key;
            Title = _fixture.Title;
        }

        public string Key { get; set; }

        public string Title { get; set; }

        public EmbeddedSectionGrammar<T> Before(Action<IEmbeddedSpecContext<T>> action)
        {
            _before = section => new SilentAction("Grammar", Stage.before, c => action(new EmbeddedSpecContext<T>(c, _fixture)), section){Subject = $"{Key}.Before"};
            return this;
        }


        public EmbeddedSectionGrammar<T> After(Action<IEmbeddedSpecContext<T>> action)
        {
            _after = section => new SilentAction("Grammar", Stage.after, c => action(new EmbeddedSpecContext<T>(c, _fixture)), section) { Subject = $"{Key}.After" };
            return this;
        }

        /// <summary>
        /// Execute an asynchronous action before the embedded section
        /// </summary>
        /// <param name="action"></param>
        /// <returns></returns>
        public EmbeddedSectionGrammar<T> Before(Func<IEmbeddedSpecContext<T>, Task> action)
        {
            _before = section => new SilentAction("Grammar", Stage.before, c => action(new EmbeddedSpecContext<T>(c, _fixture)), section) { Subject = $"{Key}.Before" };
            return this;
        }

        /// <summary>
        /// Execute an asynchronous action immediately after an embedded section
        /// </summary>
        /// <param name="action"></param>
        /// <returns></returns>
        public EmbeddedSectionGrammar<T> After(Func<IEmbeddedSpecContext<T>, Task> action)
        {
            _after = section => new SilentAction("Grammar", Stage.after, c => action(new EmbeddedSpecContext<T>(c, _fixture)), section) { Subject = $"{Key}.After" };
            return this;
        }

        public IExecutionStep CreatePlan(Step step, FixtureLibrary library, bool inTable = false)
        {
            return new CompositeExecution(determineSteps(step, library).ToArray());
        }

        public void CreatePlan(ExecutionPlan plan, Step step, FixtureLibrary library, bool inTable = false)
        {
            throw new NotImplementedException();
        }

        private IEnumerable<IExecutionStep> determineSteps(Step step, FixtureLibrary library)
        {
            var section = step.Collections[_leafName];
            var sectionPlan = section.CreatePlan(library, _fixture);

            if (_before != null)
            {
                yield return _before(section);
            }

            yield return sectionPlan;

            if (_after != null)
            {
                yield return _after(section);
            }
        }

        public GrammarModel Compile(Fixture fixture, CellHandling cells)
        {
            var fixtureModel = _fixture.Compile(cells);
            fixtureModel.title = Title; // Shouldn't be necessary, but still.

            return new EmbeddedSection
            {
                fixture = fixtureModel,
                collection = _leafName,
                title = Title,
                hasAfterStep = _after != null,
                hasBeforeStep = _before != null
            };
        }

        public bool IsHidden { get; set; }
        public long MaximumRuntimeInMilliseconds { get; set; }
    }
}
