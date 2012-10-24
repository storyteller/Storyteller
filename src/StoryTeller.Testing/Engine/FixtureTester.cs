using System;
using System.Linq;
using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Engine;
using StoryTeller.Engine.Constraints;
using StoryTeller.Model;

namespace StoryTeller.Testing.Engine
{
    [TestFixture]
    public class FixtureTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
        }

        #endregion

        [Test]
        public void add_a_named_grammar()
        {
            var fixture = new Fixture();

            var grammar = MockRepository.GenerateMock<IGrammar>();
            fixture["theGrammar"] = grammar;

            fixture["theGrammar"].ShouldBeTheSameAs(grammar);
        }

        [Test]
        public void adding_a_composite_grammar_programmatically()
        {
            var fixture = new Fixture();
            fixture["theGrammar"] = Fixture.Paragraph("The Grammar", x => { });

            fixture["theGrammar"]
                .ShouldBeOfType<ParagraphGrammar>().Title().ShouldEqual("The Grammar");
        }

        [Test]
        public void has_a_constraint_model()
        {
            new Fixture().Policies.ShouldBeOfType<Policies>();
        }

        [Test]
        public void loading_a_fixture_that_is_marked_as_Hidden_sets_the_constraint_to_private()
        {
            new HiddenFixture().Policies.IsPrivate.ShouldBeTrue();
        }

        [Test]
        public void loading_a_fixture_that_is_not_marked_as_hidden_should_not_be_private()
        {
            new NotHiddenFixture().Policies.IsPrivate.ShouldBeFalse();
        }
    }

    // SAMPLE:  HiddenFixture
    [Hidden]
    public class HiddenFixture : Fixture
    {
    }
    // END:  HiddenFixture

    public class NotHiddenFixture : Fixture
    {
    }

    [TestFixture]
    public class when_creating_a_grammar_marked_as_a_table_grammar
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            var fixture = new TableGrammarFixture();
            grammar = fixture["DoSomething"];
        }

        #endregion

        private IGrammar grammar;

        [Test]
        public void inner_grammar_should_be_created_to_match_the_method()
        {
            var inner = grammar.ShouldBeOfType<TableGrammar>().InnerGrammar.ShouldBeOfType<ValueCheckMethod>();
            inner.GetCells().Count.ShouldEqual(3);
        }

        [Test]
        public void should_be_a_table_grammar()
        {
            grammar.ShouldBeOfType<TableGrammar>();
        }

        [Test]
        public void should_use_the_label_from_the_attribute()
        {
            grammar.ShouldBeOfType<TableGrammar>().LabelName.ShouldEqual("Check some examples");
        }

        [Test]
        public void step_name_should_be_Rows_by_default()
        {
            grammar.ShouldBeOfType<TableGrammar>().LeafName().ShouldEqual("DoSomething");
        }
    }


    public class TableGrammarFixture : Fixture
    {
        [ExposeAsTable("Check some examples", "DoSomething")]
        public string DoSomething(string Name, int Age)
        {
            return string.Format("{0} is {1} years old", Name, Age);
        }
    }


    [TestFixture]
    public class when_reading_grammars_from_a_fixture
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            fixture = new FixtureWithSetUpTearDownAndDescription();
        }

        #endregion

        private FixtureWithSetUpTearDownAndDescription fixture;

        [Test]
        public void do_not_create_grammar_for_setup()
        {
            fixture.HasGrammar("SetUp").ShouldBeFalse();
        }

        [Test]
        public void do_not_create_grammar_for_teardown()
        {
            fixture.HasGrammar("TearDown").ShouldBeFalse();
        }

        [Test]
        public void should_only_have_the_single_explicitly_defined_Grammar()
        {
            fixture.GrammarCount.ShouldEqual(1);
        }
    }

    // SAMPLE:  FixtureWithSetUpTearDownAndDescription
    public class FixtureWithSetUpTearDownAndDescription : Fixture
    {
        public override string Description { get { return "something"; } }

        public override void SetUp(ITestContext context)
        {
            // do something before the Section using this Fixture
        }

        public override void TearDown()
        {
            // do something after the Section using this Fixture
        }

        public void Go()
        {
        }
    }
    // END:  FixtureWithSetUpTearDownAndDescription

    [TestFixture]
    public class when_reading_a_fixture_that_has_errors_while_scanning_for_grammars
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            fixture = new BadGrammarFixture();
            error = fixture.Errors.First();
        }

        #endregion

        private BadGrammarFixture fixture;
        private GrammarError error;

        [Test]
        public void has_a_grammar_message()
        {
            error.Message.ShouldEqual("Could not create Grammar 'Bad' of Fixture 'BadGrammar'");
        }

        [Test]
        public void has_the_grammar_error_text_from_the_exception()
        {
            error.ErrorText.ShouldContain("NotImplementedException");
        }
    }

    [TestFixture]
    public class when_reading_grammars_for_the_Hidden_attribute
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            fixture = new HiddenGrammarsFixture();
        }

        #endregion

        private HiddenGrammarsFixture fixture;

        [Test]
        public void grammars_decorated_with_hidden_should_be_hidden()
        {
            fixture.Policies.IsHidden("Hidden1").ShouldBeTrue();
            fixture.Policies.IsHidden("Hidden2").ShouldBeTrue();
        }

        [Test]
        public void grammars_not_decorated_with_hidden_should_not_be_hidden()
        {
            fixture.Policies.IsHidden("NotHidden1").ShouldBeFalse();
            fixture.Policies.IsHidden("NotHidden2").ShouldBeFalse();
        }
    }

    public class HiddenGrammarsFixture : Fixture
    {
        [Hidden]
        public void Hidden1()
        {
        }

        public void NotHidden1()
        {
        }

        [Hidden]
        public IGrammar Hidden2()
        {
            return Paragraph("something", x => { });
        }

        public IGrammar NotHidden2()
        {
            return Paragraph("something", x => { });
        }
    }

    public class BadGrammarFixture : Fixture
    {
        public IGrammar Bad()
        {
            throw new NotImplementedException();
        }
    }
}