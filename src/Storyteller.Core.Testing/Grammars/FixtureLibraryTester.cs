using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using FubuTestingSupport;
using NUnit.Framework;
using Rhino.Mocks.Constraints;
using Storyteller.Core.Conversion;
using Storyteller.Core.Model;

namespace Storyteller.Core.Testing.Grammars
{
    [TestFixture]
    public class FixtureLibraryTester
    {
        [Test]
        public void builds_for_all_the_non_hidden_fixtures()
        {
            var task = FixtureLibrary.CreateForAppDomain(CellHandling.Basic());
            
            task.Wait();

            var library = task.Result;

            library.Fixtures["Open"].ShouldBeOfType<OpenFixture>();

            // aliased fixture

            library.Fixtures["HanSolo"].ShouldBeOfType<AliasedFixture>();

            library.Fixtures.Has(new SecretFixture().Key).ShouldBeFalse();
        }

        [Test]
        public void build_for_fixture_that_blows_up()
        {
            var compiled = FixtureLibrary.CreateCompiledFixture(CellHandling.Basic(), typeof (FixtureThatBlowsUp));
            compiled.Model.implementation.ShouldEqual(typeof (FixtureThatBlowsUp).FullName);
        }

        [Test]
        public void build_for_grammar_that_blows_up_in_a_method()
        {
            var compiled = FixtureLibrary.CreateCompiledFixture(CellHandling.Basic(), typeof(FixtureWithGrammarThatBlowsUp));
            var grammar = compiled.Model.FindGrammar("Bad");

            grammar.key.ShouldEqual("Bad");
            grammar.errors.Single()
                .error.ShouldContain("No!");
        }

        [Test]
        public void bad_grammar_is_in_the_bigger_model()
        {
            var library = TestingContext.Library;
            var fixtureKeysWithErrors = library.Models.Where(x => x.grammars.Any(_ => _.errors.Any()))
                .Select(x => x.key);

            fixtureKeysWithErrors.ShouldContain("WithGrammarThatBlowsUp");
        }

        [Test]
        public void fixtures_that_blow_up_have_grammar_errors()
        {
            var library = TestingContext.Library;
            var model = library.Models.FirstOrDefault(x => x.key == "Failure");
            model.errors.Count().ShouldEqual(1);
        }
    }

    public class FixtureWithGrammarThatBlowsUp : Fixture
    {
        public IGrammar Bad()
        {
            throw new Exception("No!");
        }
    }

    [Hidden]
    public class SecretFixture : Fixture
    {
        
    }

    public class OpenFixture : Fixture
    {
        
    }

    public class AliasedFixture : Fixture
    {
        public AliasedFixture()
        {
            Key = "HanSolo";
        }
    }
}