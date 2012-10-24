using System;
using System.Collections.Generic;
using System.Linq;
using FubuCore.Conversion;
using FubuCore.Util;
using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Samples;
using StructureMap;
using TestContext = StoryTeller.Engine.TestContext;

namespace StoryTeller.Testing.Engine
{

    public class MissouriFixture : Fixture{}
    public class ArkansasFixture : Fixture{}
    public class MontanaFixture : Fixture{}
    public class MichiganFixture : Fixture{}


    [TestFixture]
    public class Library_building_in_FixtureGraph_Tester
    {
        [Test]
        public void read_a_fixture_failure()
        {
            FixtureStructure fixture = FixtureGraph.Library.FixtureFor("BlowsUp");

            fixture.AllErrors().Select(x => x.Message)
                .ShouldContain("Fixture 'BlowsUp' could not be loaded");
        }

        [Test]
        public void read_a_fixture_will_record_the_Title_of_the_fixture_if_it_is_explicitly_set()
        {
            FixtureGraph.Library.FixtureFor("GrammarError").Label.ShouldEqual("the bad grammars");
        }

        [Test]
        public void read_a_fixture_will_use_the_fixture_name_for_the_title_if_the_fixture_title_is_empty()
        {
            FixtureGraph.Library.FixtureFor("Tags").Label.ShouldEqual("Tags");
        }

        [Test]
        public void read_a_fixture_with_grammar_errors()
        {
            FixtureStructure fixtureStructure = FixtureGraph.Library.FixtureFor("GrammarError");
            fixtureStructure.AllErrors().Count().ShouldEqual(2);

            fixtureStructure.AllErrors().Each(x => x.Node.ShouldEqual(fixtureStructure));
        }

    }

    public class BlowsUpFixture : Fixture
    {
        public BlowsUpFixture()
        {
            throw new NotImplementedException();
        }
    }


    [TestFixture]
    public class creating_policies_for_fixtures
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            library = FixtureGraph.Library;
        }

        #endregion

        private FixtureLibrary library;

        [Test]
        public void fixture_graph_should_have_the_policies_from_the_original_fixture()
        {
            FixtureStructure fixture = library.FixtureFor(typeof (FixtureWithHiddenGrammarsFixture).GetFixtureAlias());

            fixture.Policies.IsHidden("Hidden1").ShouldBeTrue();
            fixture.Policies.IsHidden("Hidden2").ShouldBeTrue();
            fixture.Policies.IsHidden("NotHidden1").ShouldBeFalse();
            fixture.Policies.IsHidden("NotHidden2").ShouldBeFalse();
        }

        [Test]
        public void load_a_fixture_with_fixture_level_tags()
        {
            var fixture = new TagsFixture();
            fixture.Policies.Tags().ShouldHaveTheSameElementsAs("d", "e");
        }

        [Test]
        public void load_a_fixture_with_grammar_level_tags()
        {
            var fixture = new TagsFixture();
            fixture.Policies.Tags("Go1").Count().ShouldEqual(0);
            fixture.Policies.Tags("Go2").ShouldHaveTheSameElementsAs("a", "b");
            fixture.Policies.Tags("Go3").ShouldHaveTheSameElementsAs("c");
        }
    }



    [Tag("d", "e")]
    public class TagsFixture : Fixture
    {
        public void Go1()
        {
        }

        [Tag("a", "b")]
        public void Go2()
        {
        }

        [Tag("c")]
        public void Go3()
        {
        }
    }

    public class FixtureWithHiddenGrammarsFixture : Fixture
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

    public class GrammarErrorFixture : Fixture
    {
        public GrammarErrorFixture()
        {
            Title = "the bad grammars";
        }

        public IGrammar Bad1()
        {
            throw new NotImplementedException();
        }

        public IGrammar Bad2()
        {
            throw new NotImplementedException();
        }
    }
}