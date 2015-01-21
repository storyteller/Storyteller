using System.Reflection.Emit;
using Storyteller.Core.Conversion;
using Storyteller.Core.Model;

namespace Storyteller.Core.Grammars
{
    public class EmbeddedSectionGrammar<T> : IGrammar where T : Fixture, new()
    {
        private readonly T _fixture;

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

        public IExecutionStep CreatePlan(Step step, FixtureLibrary library)
        {
            var section = step.Collections[_leafName];
            return section.CreatePlan(library, _fixture);
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