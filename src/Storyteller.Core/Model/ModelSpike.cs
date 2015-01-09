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
        public string key;
        public readonly string type;

        protected GrammarModel(string type)
        {
            this.type = type;
        }

        public readonly IList<GrammarError> errors = new List<GrammarError>(); 
    }

    public class FixtureModel : GrammarModel
    {
        public string title;
        public readonly string key;

        public GrammarModel[] grammars; 

        public FixtureModel(string key) : base("fixture")
        {
            this.key = key;
        }
    }


    public class EmbeddedSection : GrammarModel
    {
        public FixtureModel fixture;
        public string title;

        public EmbeddedSection(string key) : base("embedded-section")
        {
        }
    }

    public class Sentence : GrammarModel
    {
        public Cell[] cells;
        public string format;

        public Sentence() : base("sentence")
        {
        }
    }

    public class Fact : GrammarModel
    {
        public Cell[] cells;
        public string format;

        public Fact() : base("fact")
        {
        }
    }

    public class Table : GrammarModel
    {
        public Cell[] cells;
        public string collection;
        public string title;

        public Table() : base("table")
        {
        }
    }


    public class Option
    {
        public string display;
        public string value;
    }
}