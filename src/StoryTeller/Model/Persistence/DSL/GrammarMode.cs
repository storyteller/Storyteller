using StoryTeller.Model.Persistence.Markdown;

namespace StoryTeller.Model.Persistence.DSL
{
    public class GrammarMode : IReaderMode
    {
        private readonly FixtureModel _fixture;

        private string _key;
        private string _title;
        private readonly Sentence _sentence;

        public GrammarMode(FixtureModel fixture)
        {
            _fixture = fixture;
            _sentence = new Sentence();
            _fixture.AddGrammar(_sentence);
        }

        public int Indention { get; set; }

        public IReaderMode Read(int indention, string line)
        {
            if (line.IsHeaderTwo())
            {
                _key = line.Trim().TrimStart('#', ' ');
                _sentence.key = _key;
                return this;
            }

            if (line.IsHeaderThree())
            {
                _title = line.Trim().TrimStart('#', ' ');
                _sentence.format = _title;
                return this;
            }

            if (line.IsTableLine())
            {
                var values = line.ToTableValues();
                if (values.Length > 0 && values[0] == "table")
                {
                    _fixture.RemoveGrammar(_sentence);
                    return new TableMode(_title, _key, _fixture);
                }

                return new SentenceMode(_sentence);
            }

            return null;
        }
    }
}
