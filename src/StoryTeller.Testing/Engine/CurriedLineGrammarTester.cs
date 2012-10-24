using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Model;

namespace StoryTeller.Testing.Engine
{
    [TestFixture]
    public class CurriedLineGrammarTester
    {
        private CurriedFixture fixture;

        [SetUp]
        public void SetUp()
        {
            fixture = new CurriedFixture();  
        }

        [Test]
        public void should_have_cells_for_everything_that_is_not_optional_in_the_inner_grammar_and_there_is_no_default()
        {
            var grammar = new CurriedLineGrammar("{a} should be now", (IGrammarWithCells) fixture["Go2"], "b:2");
            grammar.GetCells().ShouldHaveTheSameElementsAs(Cell.For<string>("a"));
        }

        [Test]
        public void should_have_cells_for_an_optional_cell_in_the_inner_that_is_part_of_the_template_in_the_curried_grammar()
        {
            var grammar = new CurriedLineGrammar("{a} and {c}", (IGrammarWithCells)fixture["Go2"], "b:2");
            grammar.GetCells().ShouldHaveTheSameElementsAs(Cell.For<string>("a"), Cell.For<string>("c"));
        }


        [Test]
        public void should_have_cells_for_everything_that_is_not_optional_in_the_inner_grammar_and_there_is_no_default_2()
        {
            var grammar = new CurriedLineGrammar("{a} should be now", (IGrammarWithCells)fixture["Go1"], "b:2");
            grammar.GetCells().ShouldHaveTheSameElementsAs(Cell.For<string>("a"), Cell.For<string>("c"));
        }


        [Test]
        public void should_have_cells_for_everything_that_is_not_optional_in_the_inner_grammar_and_there_is_no_default_3()
        {
            var grammar = new CurriedLineGrammar("{a} should be now", (IGrammarWithCells)fixture["Go1"], "b:2,c:3");
            grammar.GetCells().ShouldHaveTheSameElementsAs(Cell.For<string>("a"));
        }

        [Test]
        public void passes_the_template_to_the_sentence()
        {
            var grammar = new CurriedLineGrammar("{a} should be now", (IGrammarWithCells)fixture["Go1"], "b:2,c:3");
            Sentence sentence = (Sentence) grammar.ToStructure(new FixtureLibrary());
            sentence.PartCount.ShouldEqual(2);

            sentence.Parts[0].ShouldBeOfType<TextInput>().Cell.Key.ShouldEqual("a");
            sentence.Parts[1].ShouldBeOfType<Label>().Text.ShouldEqual(" should be now");
        }
    }

    [TestFixture]
    public class when_executing_the_curried_line_grammar
    {
        private string Defaults = null;
        private string Template = null;
        private CurriedFixture _target;
        private string StepValues = null;

        [SetUp]
        public void SetUp()
        {
            Defaults = StepValues = Template = null;
            _target = null;
        }

        public CurriedFixture Target
        {
            get
            {
                if (_target == null)
                {
                    _target = new CurriedFixture();
                    var grammar = new CurriedLineGrammar(Template, (IGrammarWithCells) _target["Go1"], Defaults);

                    var step = new Step().With(StepValues);
                    grammar.Execute(step);
                }

                return _target;
            }
        }

        [Test]
        public void curry_a_mandatory_cell_should_use_the_curried_value_in_execution()
        {
            StepValues = "a:5,b:7";
            Defaults = "c:9";
            Template = "{a} and {b}";

            Target.C.ShouldEqual("9");
        }


        [Test]
        public void should_apply_explicit_values_of_the_curried_template_to_the_inner_grammar()
        {
            StepValues = "a:5,b:7";
            Defaults = "c:9";
            Template = "{a} and {b}";

            Target.A.ShouldEqual("5");
        }


        [Test]
        public void should_apply_explicit_values_of_the_curried_template_to_optional_cells_of_the_inner_grammar()
        {
            StepValues = "a:5,b:7,d:13";
            Defaults = "c:9";
            Template = "{a} and {b} and {d}";

            Target.D.ShouldEqual("13");
        }

        [Test]
        public void leaving_an_optional_cell_of_the_inner_out_of_the_template_and_do_not_specify_a_default_for_that_optional()
        {
            StepValues = "a:5,b:7";
            Defaults = "c:9";
            Template = "{a} and {b}";

            Target.D.ShouldEqual("4");
        }

        [Test]
        public void specify_a_default_value_for_an_optional_cell_of_the_inner_that_is_not_part_of_the_template()
        {
            StepValues = "a:5,b:7";
            Defaults = "c:9,d:12";
            Template = "{a} and {b}";

            Target.D.ShouldEqual("12");
        }
    }


    [TestFixture]
    public class when_defining_a_curried_grammar_with_the_DSL
    {
        private Step _step;
        private Counts theCounts;
        private string StepValues;
        private string GrammarKey;
        private CurriedFixture theFixture;

        [SetUp]
        public void SetUp()
        {
            _step = null;
            theFixture = null;
            theCounts = null;

            StepValues = null;
            GrammarKey = null;
        }

        private Step theStepAfterExecuting
        {
            get
            {
                if (_step == null)
                {
                    _step = new Step().With(StepValues);
                    theFixture = new CurriedFixture();
                    theCounts = theFixture[GrammarKey].Execute(_step).Counts;
                }

                return _step;
            }
        }

        [Test]
        public void use_a_curried_grammar()
        {
            GrammarKey = "Curried1";
            StepValues = "a:3,c:10";

            theStepAfterExecuting.Get("b").ShouldEqual("5");

            // Explicits from the step
            theFixture.A.ShouldEqual(3);
            theFixture.C.ShouldEqual(10);

            // Default values from the currying definition
            theFixture.B.ShouldEqual(5);
        }


        [Test]
        public void use_a_curried_grammar_2()
        {
            GrammarKey = "Curried2";
            StepValues = "b:8,c:10";

            theStepAfterExecuting.Get("b").ShouldEqual("8");

            // Explicits from the step
            theFixture.A.ShouldEqual(3);
            theFixture.C.ShouldEqual(10);

            // Default values from the currying definition
            theFixture.B.ShouldEqual(8);
        }
    }


    public class CurriedFixture : Fixture
    {
        public string A;
        public string B;
        public string C;
        public string D;

        public CurriedFixture()
        {
            this["Curried1"] = Curry("Go1").Template("{a} to the {c}").Defaults("b:5");
            this["Curried2"] = Curry(this["Go1"]).Template("{b} and {c}").Defaults("a:3");
        }

        public void Go1(string a, string b, string c, [Default("4")]string d)
        {
            A = a;
            B = b;
            C = c;
            D = d;
        }

        public void Go2(string a, string b, [Default("4")]string c, [Default("4")]string d)
        {
            A = a;
            B = b;
            C = c;
            D = d;
        }


    }
}