using System;
using System.Collections.Generic;
using System.Linq;
using StoryTeller.Model;
using StoryTeller.Results;

namespace StoryTeller.Grammars
{
    public class EmbeddedSectionGrammar<T> : IGrammar where T : Fixture, new()
    {
        private readonly T _fixture;
        private Action<ISpecContext> _before;

        // TODO -- does this become something that's configurable later?
        // TODO -- only matters if we care in paragraph
        private readonly string _leafName;
        private Action<ISpecContext> _after;

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
            _before = x => action(new EmbeddedSpecContext<T>(x, _fixture));
            return this;
        }

        public EmbeddedSectionGrammar<T> After(Action<IEmbeddedSpecContext<T>> action)
        {
            _after = x => action(new EmbeddedSpecContext<T>(x, _fixture));
            return this;
        } 

        public IExecutionStep CreatePlan(Step step, FixtureLibrary library, bool inTable = false)
        {
            return new CompositeExecution(determineSteps(step, library).ToArray());
        }

        private IEnumerable<IExecutionStep> determineSteps(Step step, FixtureLibrary library)
        {
            var section = step.Collections[_leafName];
            var sectionPlan = section.CreatePlan(library, _fixture);

            if (_before != null)
            {
                yield return new SilentAction("Grammar", Stage.before, _before, section)
                {
                    Subject = Key + ":Before"
                };
            }

            yield return sectionPlan;

            if (_after != null)
            {
                yield return new SilentAction("Grammar", Stage.after, _after, section)
                {
                    Subject = Key + ":After"
                };
            }
        }

        public GrammarModel Compile(Fixture fixture, CellHandling cells)
        {
            return new EmbeddedSection
            {
                fixture = _fixture.Compile(cells),
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