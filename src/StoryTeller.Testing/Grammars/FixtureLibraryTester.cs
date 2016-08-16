using System;
using System.Diagnostics;
using System.Linq;
using FubuCore;
using Xunit;
using Shouldly;
using StoryTeller.Model;
using StoryTeller.Remotes.Messaging;

namespace StoryTeller.Testing.Grammars
{
    
    public class FixtureLibraryTester
    {
        [Fact]
        public void builds_for_all_the_non_hidden_fixtures()
        {
            var library = FixtureLibrary.CreateForAppDomain(CellHandling.Basic());
            

            library.Fixtures["Open"].ShouldBeOfType<OpenFixture>();

            // aliased fixture

            library.Fixtures["HanSolo"].ShouldBeOfType<AliasedFixture>();

            library.Fixtures.Has(new SecretFixture().Key).ShouldBe(false);
        }

        [Fact]
        public void hidden_grammars_are_not_in_the_fixture_model()
        {
            var library = TestingContext.Library;

            library.Models["Open"].grammars.OrderBy(x => x.key).Select(x => x.key)
                .ShouldHaveTheSameElementsAs("NotHidden", "TODO");
        }

        [Fact]
        public void serialize_for_TableFixture()
        {
            var library = TestingContext.Library;
            Debug.WriteLine(JsonSerialization.ToIndentedJson(library.Models["Table"]));
        }


        [Fact]
        public void serialize_for_CompositeFixture()
        {
            var library = TestingContext.Library;
            Debug.WriteLine(JsonSerialization.ToIndentedJson(library.Models["Composite"].FindGrammar("AddAndMultiply")));
        }

        [Fact]
        public void serialize_for_SentenceFixture()
        {
            var library = TestingContext.Library;
            Debug.WriteLine(JsonSerialization.ToIndentedJson(library.Models["Sentence"]));
        }

        [Fact]
        public void build_for_fixture_that_blows_up()
        {
            var compiled = FixtureLibrary.CreateCompiledFixture(CellHandling.Basic(), typeof (FixtureThatBlowsUp));
            compiled.Model.implementation.ShouldBe(typeof (FixtureThatBlowsUp).FullName);
        }

        [Fact]
        public void build_for_grammar_that_blows_up_in_a_method()
        {
            var compiled = FixtureLibrary.CreateCompiledFixture(CellHandling.Basic(), typeof(FixtureWithGrammarThatBlowsUp));
            var grammar = compiled.Model.FindGrammar("Bad");

            grammar.key.ShouldBe("Bad");
            grammar.errors.Single()
                .error.ShouldContain("No!");
        }

        [Fact]
        public void has_a_grammar_error_for_grammar_that_blows_up()
        {
            var fixtureModel = TestingContext.Library.Models["GrammarError"];
            var grammar = fixtureModel.FindGrammar("Bad");
            grammar.errors.Single().error.ShouldContain("DivideByZeroException");

            Debug.WriteLine(JsonSerialization.ToIndentedJson(fixtureModel));
        }

        [Fact]
        public void bad_grammar_is_in_the_bigger_model()
        {
            var library = TestingContext.Library;
            var fixtureKeysWithErrors = library.Models.Where(x => x.grammars.Any(_ => _.errors.Any()))
                .Select(x => x.key);

            fixtureKeysWithErrors.ShouldContain("WithGrammarThatBlowsUp");
        }

        [Fact]
        public void fixtures_that_blow_up_have_grammar_errors()
        {
            var library = TestingContext.Library;
            var model = library.Models.FirstOrDefault(x => x.key == "Failure");
            model.errors.Count().ShouldBe(1);
        }

        [Fact]
        public void get_list_values_from_the_parent_system()
        {
            var library = TestingContext.Library;
            var model = library.Models["Player"];
            var grammar = model.FindGrammar("PositionIs");
            var cell = grammar.As<Table>().cells.FirstOrDefault(x => x.Key == "Position");

            cell.OptionListName.ShouldBe("positions");
            cell.editor.ShouldBe("select");
            cell.options.Length.ShouldBe(5);
        }
    }

    public class FixtureWithGrammarThatBlowsUp : Fixture
    {
        public IGrammar Bad()
        {
            throw new Exception("No!");
        }
    }

    // SAMPLE: hidden-fixture
    [Hidden]
    public class SecretFixture : Fixture
    {
        
    }
    // ENDSAMPLE

    public class OpenFixture : Fixture
    {
        [Hidden]
        public void ShouldBeHidden()
        {
            
        }

        public void NotHidden()
        {
            
        }
    }

    public class AliasedFixture : Fixture
    {
        public AliasedFixture()
        {
            Key = "HanSolo";
        }
    }
}