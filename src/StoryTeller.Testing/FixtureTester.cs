using System;
using System.Collections.Generic;
using System.Linq;
using Xunit;
using Shouldly;
using StoryTeller.Grammars.Lines;
using StoryTeller.Model;
using StoryTeller.Samples.Fixtures;

namespace StoryTeller.Testing
{
    
    public class FixtureTester
    {
        [Fact]
        public void add_selection_values()
        {
            var fixture = new Fixture();

            fixture.AddSelectionValues("States", "TX", "AR", "MO");
            fixture.AddSelectionValues("Animals", "Lions", "Tigers", "Pumas");

            fixture.GetSelectionValues("States")
                .ShouldHaveTheSameElementsAs("TX", "AR", "MO");

            fixture.GetSelectionValues("Animals")
                .ShouldHaveTheSameElementsAs("Lions", "Tigers", "Pumas");
        }

        [Fact]
        public void has_a_TODO_grammar()
        {
            new HiddenFixture()["TODO"].ShouldBeOfType<ActionGrammar<string>>();
        }

        [Fact]
        public void hidden_when_marked_with_Hidden()
        {
            new HiddenFixture().IsHidden().ShouldBe(true);
        }

        [Fact]
        public void not_hidden_without_the_attribute()
        {
            new NotHiddenFixture().IsHidden().ShouldBe(false);
        }


        [Fact]
        public void get_the_name_using_convention_if_the_alias_as_attribute_does_not_exist()
        {
            new TargetedReflectionFixture().Key.ShouldBe("TargetedReflection");
        }

        public class TargetedReflectionFixture : Fixture
        {
        }

        [Fact]
        public void get_the_name_using_the_alias_attribute_if_it_exists()
        {
            new SecondFixture().Key.ShouldBe("TheSecondFixture");
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

        [Fact]
        public void can_resolve_grammars_added_explicitly()
        {
            var fixture = new FixtureWithExplicits();

            fixture.Compile(CellHandling.Basic()).grammars.OfType<StubGrammarModel>().ShouldHaveTheSameElementsAs(
                new StubGrammarModel {key = "a",},
                new StubGrammarModel {key = "b",},
                new StubGrammarModel {key = "c",}
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


        [Fact]
        public void can_resolve_grammars_created_by_a_public_method()
        {
            var fixture = new FixtureWithProgrammaticGrammars();

            fixture.Compile(CellHandling.Basic()).grammars.OfType<StubGrammarModel>().ShouldHaveTheSameElementsAs(
                new StubGrammarModel {key = "foo",},
                new StubGrammarModel {key = "bar",},
                new StubGrammarModel {key = "baz",}
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

        [Fact]
        public void use_alias_for_on_grammar_method()
        {
            var fixture = new FixtureWithGrammarAlias();

            fixture.Compile(CellHandling.Basic()).grammars.OfType<StubGrammarModel>().ShouldHaveTheSameElementsAs(
                new StubGrammarModel {key = "GoAlias"}
                );
        }

        public class DefaultTitleFixture : Fixture
        {
        }

        [Fact]
        public void builds_default_title_in_model()
        {
            new DefaultTitleFixture()
                .Compile(CellHandling.Basic())
                .title.ShouldBe("Default Title");
        }

        [Fact]
        public void adds_the_implementation_to_the_model()
        {
            new DefaultTitleFixture()
                .Compile(CellHandling.Basic())
                .implementation.ShouldBe(typeof (DefaultTitleFixture).FullName);
        }

        public class ExplicitTitleFixture : Fixture
        {
            public ExplicitTitleFixture()
            {
                Title = "The special title";
            }
        }

        [Fact]
        public void builds_model_with_explicit_title()
        {
            new ExplicitTitleFixture()
                .Compile(CellHandling.Basic())
                .title.ShouldBe("The special title");
        }

        public class FixtureWithBadGrammar : Fixture
        {
            public IGrammar Bad()
            {
                throw new Exception("No!");
            }
        }

        [Fact]
        public void Fixture_can_handle_a_grammar_that_fails_to_construct_itself()
        {
            var fixture = new FixtureWithBadGrammar();

            var grammar = fixture["Bad"].ShouldBeOfType<ErrorGrammar>();
            grammar.errors.Single().error.ShouldContain("No!");
        }

        [Fact]
        public void fixture_returns_a_missing_grammar_for_something_that_is_unknown()
        {
            var fixture = new Fixture();
            fixture.GrammarFor("DoesNotExist").ShouldBeOfType<MissingGrammar>();
        }

        [Fact]
        public void fixture_puts_a_fixture_key_on_all_grammars()
        {
            var fixture = new MathFixture();
            fixture.Compile(CellHandling.Basic());
            var allGrammars = fixture.AllGrammars().ToArray();
            allGrammars.Each(x => x.Key.ShouldNotBeNull());
        }
    }

    public class StubGrammar : IGrammar
    {
        public IExecutionStep CreatePlan(Step step, FixtureLibrary library)
        {
            throw new NotImplementedException();
        }

        public GrammarModel Compile(Fixture fixture, CellHandling cells)
        {
            return new StubGrammarModel();
        }

        public string Key { get; set; }
        public bool IsHidden { get; set; }
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