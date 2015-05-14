using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using StoryTeller;
using StoryTeller.Grammars.Decisions;
using StoryTeller.Grammars.Tables;

namespace Samples.Fixtures
{
    public class TablesFixture : Fixture
    {
        private double _first;
        private double _second;
        private int _x;
        private int _y;

        // SAMPLE: adding-the-decision-table
        public TablesFixture()
        {
            Title = "Using Table Grammars";

            // I'm adding the decision table programmatically
            this["decisions"] = new Decisions();
        }
        // ENDSAMPLE

        // SAMPLE: using-expose-as-table-attribute
        [ExposeAsTable("Adding numbers together", "sum")]
        [return: AliasAs("sum")]
        public int Sum(int x, int y)
        {
            return x + y;
        }
        // ENDSAMPLE

        // SAMPLE: before-and-after-actions-on-table-grammar
        public class User
        {
            public string FirstName { get; set; }
            public string LastName { get; set; }
        }

        private readonly IList<User> _users = new List<User>();

        // This grammar is only useful as a building block
        // for our table below, so we hide it from the 
        // grammar selector in the UI editor
        [Hidden]
        public void BuildUser(string First, string Last)
        {
            var user = new User { FirstName = First, LastName = Last };
            _users.Add(user);
        }

        public IGrammar TableWithBeforeAndAfterSteps()
        {
            return this["BuildUser"].AsTable("The Users are")
                .Before(() => _users.Clear())
                .After(() => saveUsersToTheDatabase(_users));
        }

        private void saveUsersToTheDatabase(IEnumerable<User> users)
        {
            // do whatever it takes to persist the new user objects
            // to your database
        }
        // ENDSAMPLE


        
        // SAMPLE: paragraph-with-grammars-built-inline
        public IGrammar Divide()
        {
            return Paragraph("Divide numbers", x =>
            {
                x += c => _first = _second = 0;
                x += Read<double>("x", o => _first = o);
                x += Read<double>("y", o => _second = o);
                x += Check("quotient", () => _first/_second);
            }).AsTable("Do some division");
        }
        // ENDSAMPLE

        // SAMPLE: overriding-table-options
        [ExposeAsTable("Table with lots of options")]
        public void TableWithLotsOfOptions(
            [Header("Player Name")]string player,
            [Header("Position"), DefaultValue("Outfield")]
            [SelectionValues("Pitcher", "Outfield", "Catcher")]
            string position
            )
        {
            // Set up your roster
        }
        // ENDSAMPLE

/*
        [ExposeAsTable("Is Positive?")]
        [return: AliasAs("IsEven")]
        public bool IsPositive(int number)
        {
            return number >= 0;            
        }

        // SAMPLE: table-from-a-paragraph

        // A Sentence grammar
        public void X(int x)
        {
            _x = x;
        }

        // A 2nd Sentence grammar
        public void Y(int y)
        {
            _y = y;
        }

        // Another Sentence grammar that checks the
        // value
        [return: Header("Sum")]
        public int Sum()
        {
            return _x + _y;
        }

        public IGrammar TableFromParagraph()
        {
            return Paragraph("Sum two numbers together", _ =>
            {
                _ += this["X"];
                _ += this["Y"];
                _ += this["Sum"];
            }).AsTable("Add Some Numbers Together");
        }
        // ENDSAMPLE



        */
    }

    // SAMPLE: using-a-decision-table-grammar
    public class Decisions : DecisionTableGrammar
    {
        private string _first;
        private string _last;

        public Decisions()
            : base("What's my name?")
        {
        }

        public string FirstName { set { _first = value; } }

        public string LastName { set { _last = value; } }

        public string FullName { get { return _first + " " + _last; } }

        public string LastNameFirst { get { return _last + ", " + _first; } }
    }
    // ENDSAMPLE
}