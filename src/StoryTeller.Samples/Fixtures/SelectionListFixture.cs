using System;
using StoryTeller.Grammars.Decisions;
using StoryTeller.Grammars.Tables;

namespace StoryTeller.Samples.Fixtures
{
    public class SelectionListFixture : Fixture
    {
        public SelectionListFixture()
        {
            Lists["surname"].AddValues("Miller", "Smith", "Brown");

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

        [FormatAs("The Enum value of {option} should be {selectedOption}")]
        [return: AliasAs("selectedOption")]
        public string TheEnumOptionIs([SelectionValues(typeof(SampleEnum))] string option)
        {
            return EnumValueFor<SampleEnum>(option).ToString();
        }
        
        private static int EnumValueFor<T>(string value) where T : struct
        {
            var parsed = Enum.Parse(typeof(T), value);
            return (int)parsed;
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

    public enum SampleEnum
    {
        FirstOption,
        SecondOption
    }
}