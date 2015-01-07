namespace Storyteller.Core.Model
{
    public abstract class GrammarModel
    {
        public readonly string key;
        public readonly string type;

        protected GrammarModel(string key, string type)
        {
            this.key = key;
            this.type = type;
        }
    }

    public class FixtureModel : GrammarModel
    {
        public object[] grammars;
        public string title;

        public FixtureModel(string key) : base(key, "fixture")
        {
        }
    }


    public class EmbeddedSection : GrammarModel
    {
        public FixtureModel fixture;
        public string title;

        public EmbeddedSection(string key) : base(key, "embedded-section")
        {
        }
    }

    public class Sentence : GrammarModel
    {
        public Cell[] cells;
        public string format;

        public Sentence(string key) : base(key, "sentence")
        {
        }
    }


    public class Table : GrammarModel
    {
        public Cell[] cells;
        public string collection;
        public string title;

        public Table(string key) : base(key, "table")
        {
        }
    }


    public class Option
    {
        public string display;
        public string value;
    }
}