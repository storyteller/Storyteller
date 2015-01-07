using System.CodeDom;
using System.Security.Cryptography.X509Certificates;
using Newtonsoft.Json.Serialization;

namespace Storyteller.Core.Model
{
    public abstract class GrammarModel
    {
        protected GrammarModel(string key, string type)
        {
            this.key = key;
            this.type = type;
        }

        public readonly string key;
        public readonly string type;
    }

    public class FixtureModel : GrammarModel
    {
        public FixtureModel(string key) : base(key, "fixture")
        {
        }

        public string title;

        public object[] grammars;
    }


    public class EmbeddedSection : GrammarModel
    {
        public EmbeddedSection(string key) : base(key, "embedded-section")
        {
        }

        public string title;
        public FixtureModel fixture;

    }

    public class Sentence : GrammarModel
    {
        public Sentence(string key) : base(key, "sentence")
        {
        }

        public string format;

        public Cell[] cells;
    }


    public class Table : GrammarModel
    {
        public Table(string key) : base(key, "table")
        {
        }

        public string title;
        public string collection;

        public Cell[] cells;
    }


    public class Option
    {
        public string display;
        public string value;
    }


}