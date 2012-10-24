using System.Data;
using NUnit.Framework;
using StoryTeller.Engine;
using StoryTeller.Model;

namespace StoryTeller.Testing.Model
{
    [TestFixture]
    public class when_parsing_the_model_for_a_fixture_with_two_line_grammars
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            var runner = new TestRunner();
            FixtureLibrary library = runner.Library;

            fixtureStructure = library.FixtureFor("LinesOnly");
        }

        #endregion

        private FixtureStructure fixtureStructure;

        [Test]
        public void should_create_a_sentence_for_the_go_method()
        {
            fixtureStructure.GrammarFor("Go").ShouldBeOfType<Sentence>();
        }

        [Test]
        public void should_create_a_sentence_for_the_WhoAmI_method()
        {
            fixtureStructure.GrammarFor("WhoAmI").ShouldBeOfType<Sentence>();
        }

        [Test]
        public void should_find_two_grammars_in_the_fixture()
        {
            fixtureStructure.GrammarCount.ShouldEqual(2);
        }
    }

    [TestFixture]
    public class when_creating_the_model_for_a_table_grammar
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            FixtureLibrary library = FixtureGraph.Library;

            table = library.FixtureFor("TableOnly").GrammarFor("Go").ShouldBeOfType<Table>();
        }

        #endregion

        private Table table;

        public class TableOnlyFixture : Fixture
        {
            [ExposeAsTable("The Go Table", "go")]
            public void Go(string name, int age)
            {
            }
        }

        [Test]
        public void should_have_the_label_from_the_grammar()
        {
            table.Label.ShouldEqual("The Go Table");
        }

        [Test]
        public void the_table_should_have_the_cells_from_the_parent_grammar()
        {
            table.Cells[0].ShouldEqual(Cell.For<string>("name"));
            table.Cells[1].ShouldEqual(Cell.For<int>("age"));
        }

        [Test]
        public void the_table_should_have_the_child_step_relationship()
        {
            table.LeafName.ShouldEqual("go");
        }
    }

    [TestFixture]
    public class when_creating_the_model_for_a_verification_grammar
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            FixtureLibrary library = FixtureGraph.Library;

            verification =
                library.FixtureFor("Verification").GrammarFor("theStates").ShouldBeOfType<SetVerification>();
        }

        #endregion

        private SetVerification verification;

        public class VerificationFixture : Fixture
        {
            public VerificationFixture()
            {
                this["theStates"] = VerifyDataTable(c => new DataTable())
                    .Titled("The states were admitted in")
                    .LeafNameIs("states")
                    .Columns(x =>
                    {
                        x.MatchOn<string>("state");
                        x.MatchOn<int>("yearOfStatehood");
                    });
            }
        }

        [Test]
        public void should_derive_the_cells_from_the_verification_grammar()
        {
            verification.Cells.Count.ShouldEqual(2);
            verification.Cells[0].ShouldEqual(Cell.For<string>("state"));
            verification.Cells[1].ShouldEqual(Cell.For<int>("yearOfStatehood"));
        }

        [Test]
        public void should_have_the_child_step_name_from_the_grammar()
        {
            verification.LeafName.ShouldEqual("states");
        }

        [Test]
        public void should_have_the_label_from_the_verification_grammar()
        {
            verification.Label.ShouldEqual("The states were admitted in");
        }
    }

    [TestFixture]
    public class when_creating_the_model_for_a_simple_grammar_line
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            FixtureLibrary library = FixtureGraph.Library;

            sentence = library.FixtureFor("LinesOnly").GrammarFor("Go").ShouldBeOfType<Sentence>();
        }

        #endregion

        private Sentence sentence;

        [Test]
        public void should_have_the_correctly_ordered_list_of_sentence_parts_for_the_line_grammar()
        {
            sentence.PartCount.ShouldEqual(4);

            sentence[0].ShouldBeOfType<TextInput>().Cell.ShouldEqual(new Cell("name", typeof (string)));

            sentence[1].ShouldBeOfType<Label>().Text.ShouldEqual(" is ");

            sentence[2].ShouldBeOfType<TextInput>().Cell.ShouldEqual(new Cell("age", typeof (int)));

            sentence[3].ShouldBeOfType<Label>().Text.ShouldEqual(" years old");
        }
    }


    public class LinesOnlyFixture : Fixture
    {
        [FormatAs("{name} is {age} years old")]
        public void Go(string name, int age)
        {
        }

        [FormatAs("I am {the name}")]
        [return: AliasAs("the name")]
        public string WhoAmI()
        {
            return "";
        }
    }
}