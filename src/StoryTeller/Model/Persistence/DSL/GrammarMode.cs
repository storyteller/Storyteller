using System;
using System.Linq;
using Baseline;
using StoryTeller.Grammars.Sets;
using StoryTeller.Model.Persistence.Markdown;

namespace StoryTeller.Model.Persistence.DSL
{
    public class GrammarMode : IReaderMode
    {
        private readonly Action<GrammarModel> _adder;
        private readonly FixtureModel _fixture;

        private bool _hasAdded;

        private string _key;
        private Paragraph _paragraph;
        private string _title;

        public GrammarMode(FixtureModel fixture, Action<GrammarModel> adder)
        {
            _fixture = fixture;
            _adder = adder;
        }

        public int Indention { get; set; }

        public IReaderMode Read(int indention, string line)
        {
            if (_hasAdded && _paragraph == null) return null;

            if (line.IsHeaderTwo())
            {
                // Get out of here, this is a new grammar!
                if (_hasAdded)
                {
                    return null;
                }

                var value = line.Trim().TrimStart('#', ' ');

                if (value.Contains(' '))
                {
                    _title = value;
                    _key = _title.Replace("  ", " ").Split(' ').Select(x => x.Capitalize()).Join("");
                }
                else
                {
                    _key = value;

                    // Default title
                    _title = _key.SplitPascalCase();
                }


                return this;
            }

            if (line.IsHeaderThree())
            {
                _title = line.Trim().TrimStart('#', ' ');
                return this;
            }

            if (line.StartsWith("*"))
            {
                if (WithinParagraph)
                {
                    var title = line.TrimStart('*').Trim();
                    if (_title.IsEmpty())
                    {
                        _title = title;
                        return this;
                    }

                    // There's some internal clumsiness about reading children
                    // within a Paragraph
                    if (_title == title) return this;

                    if (!_hasAdded)
                    {
                        addSentence();
                    }

                    return null;
                }

                var childGrammar = new GrammarMode(_fixture, g => _paragraph.AddChild(g))
                {
                    WithinParagraph = true
                };

                if (_paragraph == null)
                {

                    _hasAdded = true;

                    _paragraph = new Paragraph
                    {
                        key = _key,
                        title = _title
                    };

                    _adder(_paragraph);
                }
                else
                {
                    childGrammar.Read(indention, line);
                }


                return childGrammar;
            }

            if (line.StartsWith("fact", StringComparison.OrdinalIgnoreCase))
            {
                if (!_hasAdded)
                {
                    var sentence = addSentence();
                    sentence.fact = true;

                    return this;
                }
            }

            if (line.StartsWith("embeds", StringComparison.OrdinalIgnoreCase))
            {
                return _paragraph == null ? buildEmbed(line) : this;
            }

            if (line.IsTableLine())
            {
                var values = line.ToTableValues();
                if (values.Any())
                    switch (values[0].ToLower())
                    {
                        case "sentence":
                            var sentence = addSentence();
                            return new SentenceMode(sentence);

                        case "table":
                            return buildTable();

                        case "set":
                            return buildSet(false);

                        case "ordered-set":
                            return buildSet(true);

                        default:
                            throw new ArgumentOutOfRangeException($"'{values[0]}' is not a valid option here. Valid options are: 'sentence', 'table', 'set', or 'ordered-set'");
                    }

                addSentence();
            }

            if (line.IsEmpty() && !_hasAdded && _title.IsNotEmpty())
            {
                addSentence();
            }

            return null;
        }

        public bool WithinParagraph { get; set; }

        private IReaderMode buildEmbed(string line)
        {
            _hasAdded = true;

            var first = line.IndexOf(" ");
            var otherKey = line.Substring(first + 1);

            var embed = new EmbeddedSection
            {
                key = _key,
                title = _title,
                fixture = new FixtureModel(otherKey)
            };


            _adder(embed);

            return null;
        }

        private IReaderMode buildSet(bool ordered)
        {
            _hasAdded = true;
            var set = new SetVerification
            {
                key = _key,
                title = _title,
                ordered = ordered
            };

            _adder(set);

            return new TableMode(set);
        }

        private IReaderMode buildTable()
        {
            _hasAdded = true;
            var table = new Table
            {
                key = _key,
                title = _title
            };

            _adder(table);

            return new TableMode(table);
        }

        private Sentence addSentence()
        {
            _hasAdded = true;

            var sentence = new Sentence(_key, _title);
            _adder(sentence);

            return sentence;
        }
    }
}