using System;
using System.Linq.Expressions;
using System.Reflection;
using FubuCore.Reflection;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Engine.Reflection;
using StoryTeller.Model;

namespace StoryTeller.Testing.Engine
{
    [AliasAs("TheSecondFixture")]
    public class SecondFixture : Fixture
    {
    }

    public class TargetedReflectionFixture : Fixture
    {
        public void DoSomething(int count)
        {
        }

        public string DoSomethingElse(int count)
        {
            return count.ToString();
        }

        public string AndAnother()
        {
            return string.Empty;
        }

        [AliasAs("red")]
        public string AliasedMethod()
        {
            return string.Empty;
        }

        public bool Assertion()
        {
            return true;
        }

        public IGrammar ThisOne()
        {
            return new StubGrammar();
        }
    }

    public class StubGrammar : IGrammar
    {
        #region IGrammar Members

        public string Description { get { return string.Empty; } }

        public void Execute(IStep containerStep, ITestContext context)
        {
            throw new NotImplementedException();
        }

        public GrammarStructure ToStructure(FixtureLibrary library)
        {
            return new Sentence();
        }

        #endregion
    }

    [TestFixture]
    public class GrammarBuilderTester
    {
        private IGrammar getMethod(Expression<Action<TargetedReflectionFixture>> expression)
        {
            MethodInfo method = ReflectionHelper.GetMethod(expression);
            return GrammarBuilder.BuildGrammar(method, new TargetedReflectionFixture());
        }

        private IGrammar getMethod(Expression<Func<TargetedReflectionFixture, object>> expression)
        {
            MethodInfo method = ReflectionHelper.GetMethod(expression);
            return GrammarBuilder.BuildGrammar(method, new TargetedReflectionFixture());
        }

        [Test]
        public void build_a_grammar_for_a_bool_method()
        {
            getMethod(x => x.Assertion()).ShouldBeOfType<ValueCheckMethod>();
        }

        [Test]
        public void build_a_grammar_for_a_method_that_returns_a_grammar()
        {
            getMethod(x => x.ThisOne()).ShouldBeOfType<StubGrammar>();
        }

        [Test]
        public void build_a_grammar_for_a_method_that_returns_a_primitive()
        {
            getMethod(x => x.DoSomethingElse(0)).ShouldBeOfType<ValueCheckMethod>();
        }

        [Test]
        public void build_a_grammar_for_a_void_method()
        {
            getMethod(x => x.DoSomething(0)).ShouldBeOfType<ActionMethodGrammar>();
        }

        [Test]
        public void get_the_name_using_convention_if_the_alias_as_attribute_does_not_exist()
        {
            new TargetedReflectionFixture().Name.ShouldEqual("TargetedReflection");
        }

        [Test]
        public void get_the_name_using_the_alias_attribute_if_it_exists()
        {
            new SecondFixture().Name.ShouldEqual("TheSecondFixture");
        }

        [Test]
        public void has_the_aliased_method()
        {
            new TargetedReflectionFixture()["red"].ShouldBeOfType<ValueCheckMethod>();
        }

        [Test]
        public void has_the_correct_number_of_grammars()
        {
            new TargetedReflectionFixture().GrammarCount.ShouldEqual(6);
        }

        [Test]
        public void has_the_method_built_grammar()
        {
            new TargetedReflectionFixture()["ThisOne"].ShouldBeOfType<StubGrammar>();
        }
    }
}