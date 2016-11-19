using Baseline;
using StoryTeller.Model.Persistence.Markdown;

namespace StoryTeller.Model.Persistence.DSL
{
    public class HeaderMode : IReaderMode
    {
        private readonly FixtureModel _fixture;

        public HeaderMode(FixtureModel fixture)
        {
            _fixture = fixture;
        }

        public int Indention { get; set; }

        public IReaderMode Read(int indention, string line)
        {
            if (line.IsEmpty()) return this;

            if (line.IsHeaderOne())
            {
                _fixture.title = line.Trim().TrimStart('#', ' ');
                return this;
            }

            if (line.IsHeaderTwo())
            {
                var grammar = new GrammarMode(_fixture, g => _fixture.AddGrammar(g));
                grammar.Read(indention, line);

                return grammar;
            }

            var mode = new CommentMode(_fixture);
            mode.Read(indention, line);

            return mode;
        }
    }
}
