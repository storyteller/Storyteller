using System;
using System.Collections.Generic;
using System.Linq;
using FubuTestingSupport;
using NUnit.Framework;
using Storyteller.Core.Conversion;
using Storyteller.Core.Model;

namespace Storyteller.Core.Testing
{
    [TestFixture]
    public class FixtureTester
    {
        [Test]
        public void hidden_when_marked_with_Hidden()
        {
            new HiddenFixture().IsHidden()
                .ShouldBeTrue();
        }

        [Test]
        public void not_hidden_without_the_attribute()
        {
            new NotHiddenFixture().IsHidden()
                .ShouldBeFalse();
        }


        [Test]
        public void get_the_name_using_convention_if_the_alias_as_attribute_does_not_exist()
        {
            new TargetedReflectionFixture().Key.ShouldEqual("TargetedReflection");
        }

        public class TargetedReflectionFixture : Fixture
        {
            
        }

        [Test]
        public void get_the_name_using_the_alias_attribute_if_it_exists()
        {
            new SecondFixture().Key.ShouldEqual("TheSecondFixture");
        }

        public class SecondFixture : Fixture
        {
            public SecondFixture()
            {
                Key = "TheSecondFixture";
            }
        }

        public class NotHiddenFixture : Fixture
        {
            
        }

        [Hidden]
        public class HiddenFixture : Fixture
        {
        }

        public class FixtureWithExplicits : Fixture
        {
            public FixtureWithExplicits()
            {
                this["a"] = new StubGrammar();
                this["b"] = new StubGrammar();
                this["c"] = new StubGrammar();
            }
        }

        [Test]
        public void can_resolve_grammars_added_explicitly()
        {
            var fixture = new FixtureWithExplicits();

            fixture.Compile(Conversions.Basic()).grammars.ShouldHaveTheSameElementsAs(
                new StubGrammarModel{key = "a",},
                new StubGrammarModel{key = "b",},
                new StubGrammarModel{key = "c",}
                );
        }

        public class FixtureWithProgrammaticGrammars : Fixture
        {
            public IGrammar foo()
            {
                return new StubGrammar();
            }

            public IGrammar bar()
            {
                return new StubGrammar();
            }

            public IGrammar baz()
            {
                return new StubGrammar();
            }
        }


        [Test]
        public void can_resolve_grammars_created_by_a_public_method()
        {
            var fixture = new FixtureWithProgrammaticGrammars();

            fixture.Compile(Conversions.Basic()).grammars.ShouldHaveTheSameElementsAs(
                new StubGrammarModel { key = "foo", },
                new StubGrammarModel { key = "bar", },
                new StubGrammarModel { key = "baz", }
                );
        }

        public class FixtureWithGrammarAlias : Fixture
        {
            [AliasAs("GoAlias")]
            public IGrammar Go()
            {
                return new StubGrammar();
            }
        }

        [Test]
        public void use_alias_for_on_grammar_method()
        {
            var fixture = new FixtureWithGrammarAlias();

            fixture.Compile(Conversions.Basic()).grammars.ShouldHaveTheSameElementsAs(
                new StubGrammarModel { key = "GoAlias"}
                );
        }

        public class DefaultTitleFixture : Fixture
        {
            
        }

        [Test]
        public void builds_default_title_in_model()
        {
            new DefaultTitleFixture()
                .Compile(Conversions.Basic())
                .title.ShouldEqual("Default Title");
        }

        public class ExplicitTitleFixture : Fixture
        {
            public ExplicitTitleFixture()
            {
                Title = "The special title";
            }
        }

        [Test]
        public void builds_model_with_explicit_title()
        {
            new ExplicitTitleFixture()
                .Compile(Conversions.Basic())
                .title.ShouldEqual("The special title");
        }

        public class FixtureWithBadGrammar : Fixture
        {
            public IGrammar Bad()
            {
                throw new Exception("No!");
            }
        }

        [Test]
        public void Fixture_can_handle_a_grammar_that_fails_to_construct_itself()
        {
            var fixture = new FixtureWithBadGrammar();

            var grammar = fixture["Bad"].ShouldBeOfType<ErrorGrammar>();
            grammar.errors.Single().error.ShouldContain("No!");
        }
    }

    public class StubGrammar : IGrammar
    {
        public IExecutionPlan CreatePlan(Step step)
        {
            throw new System.NotImplementedException();
        }

        public GrammarModel Compile(Conversions conversions)
        {
            return new StubGrammarModel();
        }
    }

    public class StubGrammarModel : GrammarModel
    {
        public StubGrammarModel() : base("stub")
        {
        }

        protected bool Equals(StubGrammarModel other)
        {
            return key.Equals(other.key);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != this.GetType()) return false;
            return Equals((StubGrammarModel) obj);
        }

        public override int GetHashCode()
        {
            return key.GetHashCode();
        }

        public override string ToString()
        {
            return "StubGrammar named " + key;
        }
    }

    
}   