using System.Collections.Generic;

namespace Storyteller.Core.Model
{
    public class GrammarError
    {
        public string message;
        public string error;
    }

    public abstract class GrammarModel
    {
        public readonly string key;
        public readonly string type;

        protected GrammarModel(string key, string type)
        {
            this.key = key;
            this.type = type;
        }

        public readonly IList<GrammarError> errors = new List<GrammarError>(); 
    }

    public class FixtureModel : GrammarModel
    {
        public object[] grammars;
        public string title;

        public readonly IList<GrammarError> errors = new List<GrammarError>(); 

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

    public class Fact : GrammarModel
    {
        public Cell[] cells;
        public string format;

        public Fact(string key) : base(key, "fact")
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