using Baseline;
using StoryTeller.Model.Persistence.Markdown;

namespace StoryTeller.Model.Persistence.DSL
{
    public class GrammarMode : IReaderMode
    {
        private readonly FixtureModel _fixture;

        private string _key;
        private string _title;

        private bool _hasAdded;

        public GrammarMode(FixtureModel fixture)
        {
            _fixture = fixture;
        }

        public int Indention { get; set; }

        public IReaderMode Read(int indention, string line)
        {
            if (_hasAdded) return null;

            if (line.IsHeaderTwo())
            {
                _key = line.Trim().TrimStart('#', ' ');
                return this;
            }

            if (line.IsHeaderThree())
            {
                _title = line.Trim().TrimStart('#', ' ');
                return this;
            }

            if (line.IsTableLine())
            {
                var values = line.ToTableValues();
                if (values.Length > 0 && values[0] == "table")
                {
                    return new TableMode(_title, _key, _fixture);
                }

                var sentence = addSentence();

                return new SentenceMode(sentence);
            }

            if (line.IsEmpty() && !_hasAdded)
            {
                addSentence();
            }

            return null;
        }

        private Sentence addSentence()
        {
            _hasAdded = true;

            var sentence = new Sentence
            {
                key = _key,
                format = _title
            };

            _fixture.AddGrammar(sentence);
            return sentence;
        }
    }
}
