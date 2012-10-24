using System.Reflection;
using FubuCore.Reflection;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Engine.Reflection;
using StoryTeller.Model;
using System.Linq;
using TestContext = StoryTeller.Engine.TestContext;

namespace StoryTeller.Testing.Engine
{
    public class ReflectionTarget
    {
        [return: AliasAs("theValue")]
        public string GetNameAndAge(string name, int age)
        {
            return string.Format("{0} is {1}", name, age);
        }

        [FormatAs("Adding {x} to {y} should equal {sum}")]
        public int Adding(int x, int y)
        {
            return x + y;
        }
    }

    [TestFixture]
    public class ReflectionValueCheckTester
    {
        [Test]
        public void make_the_last_parameter_the_output_cell_if_not_aliased()
        {
            MethodInfo method = ReflectionHelper.GetMethod<ReflectionTarget>(x => x.Adding(0, 0));

            var grammar = new ValueCheckMethod(method, new ReflectionTarget());

            var sentence = grammar.ToStructure(new FixtureLibrary()).ShouldBeOfType<Sentence>();

            sentence.AllErrors().Any().ShouldBeFalse();
            sentence.Cells.FirstOrDefault(x => x.IsResult).Key.ShouldEqual("sum");
            
        }

        [Test]
        public void create_a_grammar_structure()
        {
            MethodInfo method = ReflectionHelper.GetMethod<ReflectionTarget>(x => x.GetNameAndAge("", 0));

            var grammar = new ValueCheckMethod(method, new ReflectionTarget());

            var sentence = grammar.ToStructure(new FixtureLibrary()).ShouldBeOfType<Sentence>();

            sentence.ShouldEqual(Sentence.For(method.GetTemplate(), Cell.For<string>("name"), Cell.For<int>("age"),
                                              Cell.For<string>("theValue")));
        }

        [Test]
        public void execute_the_method_with_a_step_and_store_the_actual()
        {
            MethodInfo method = ReflectionHelper.GetMethod<ReflectionTarget>(x => x.GetNameAndAge("", 0));
            var grammar = new ValueCheckMethod(method, new ReflectionTarget());

            Step step = new Step("a").With("name", "Jeremy").With("age", 34);

            grammar.Execute(step).Results.ActualDisplay<string>(method.GetReturnValueAlias()).ShouldEqual("Jeremy is 34");
        }


        [Test]
        public void marks_the_testdata_with_right_if_the_actual_matches_the_expected()
        {
            MethodInfo method = ReflectionHelper.GetMethod<ReflectionTarget>(x => x.GetNameAndAge("", 0));
            var grammar = new ValueCheckMethod(method, new ReflectionTarget());

            Step step = new Step("a").With("name", "Jeremy").With("age", 34).With("theValue", "Jeremy is 34");
            var data = new TestContext();

            grammar.Execute(step, data);

            data.Counts.Rights.ShouldEqual(1);
        }

        [Test]
        public void marks_the_testdata_with_wrong_if_the_actual_is_wrong()
        {
            MethodInfo method = ReflectionHelper.GetMethod<ReflectionTarget>(x => x.GetNameAndAge("", 0));
            var grammar = new ValueCheckMethod(method, new ReflectionTarget());

            Step step = new Step("a").With("name", "Jeremy").With("age", 34).With("theValue", "the wrong value");
            var data = new TestContext();

            grammar.Execute(step, data);

            data.Counts.Wrongs.ShouldEqual(1);
        }
    }
}