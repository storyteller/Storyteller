using StoryTeller.Engine;

namespace StoryTeller.Samples.Grammars
{
    public class SelectionListFixture : Fixture
    {
        public SelectionListFixture()
        {
            SelectionValuesFor("surname").Add("Miller");
            SelectionValuesFor("surname").Add("Smith");
            SelectionValuesFor("surname").Add("Brown");

            this["names"] = new NameTable();
        }

        [ExposeAsTable("The names are")]
        [return: AliasAs("fullname")]
        public string FirstAndLastName(string first, [SelectionValues("surname")] string last)
        {
            return first + " " + last;
        }

        [FormatAs("{first} {last} should be formatted as {fullname}")]
        [return: AliasAs("fullname")]
        public string TheNameIs(string first, [SelectionValues("surname")] string last)
        {
            return first + " " + last;
        }
    }

    public class NameTable : DecisionTableGrammar
    {
        private string _first;
        private string _last;

        public NameTable()
            : base("The names should be")
        {
        }

        public string First { set { _first = value; } }

        [SelectionValues("surname")]
        public string Last { set { _last = value; } }

        public string Fullname { get { return _first + " " + _last; } }
    }
}