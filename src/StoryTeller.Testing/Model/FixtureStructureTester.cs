using System;
using System.Linq;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Samples;
using StoryTeller.Samples.Grammars;

namespace StoryTeller.Testing.Model
{

    [TestFixture]
    public class FixtureStructure_implementation_of_FixtureNode
    {
        [Test]
        public void combines_the_list_of_all_errors()
        {
            var graph = new FixtureStructure("Math");
            graph.AddStructure("key1", new StubGrammarStructure().AddError("error1"));
            graph.AddStructure("key2", new StubGrammarStructure().AddError("error1").AddError("error 2"));

            graph.AllErrors().Count().ShouldEqual(3);
        }


        [Test]
        public void Title()
        {
            new FixtureStructure("Math").Label.ShouldEqual("Math");
        }
    }



    [TestFixture]
    public class when_adding_a_grammar_structure_to_a_fixturegraph
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            fixtureStructure = new FixtureStructure("something");
            structure = new StubGrammarStructure();

            fixtureStructure.AddStructure("grammar1", structure);
        }

        #endregion

        private FixtureStructure fixtureStructure;
        private StubGrammarStructure structure;

        [Test]
        public void puts_the_graph_into_the_parent_property_of_the_grammar()
        {
            structure.Parent.ShouldBeTheSameAs(fixtureStructure);
        }

        [Test]
        public void puts_the_name_of_the_grammar_onto_the_grammar_when_it_is_added_to_the_fixture_graph()
        {
            structure.Name.ShouldEqual("grammar1");
        }
    }

    [TestFixture]
    public class GrammarStructure_FixtureNode_Implementation_tester
    {

        [Test]
        public void get_path_with_parent()
        {
            var structure = new StubGrammarStructure
            {
                Name = "grammar1",
                Parent = new FixtureStructure("fixture1")
            };
            structure.GetPath().Locator.ShouldEqual("fixture1/grammar1");
        }

        [Test]
        public void get_path_without_parent()
        {
            var structure = new StubGrammarStructure
            {
                Name = "grammar1"
            };
            structure.GetPath().Locator.ShouldEqual("grammar1");
        }

        [Test]
        public void Label()
        {
            new StubGrammarStructure
            {
                Name = "Grammar1",
                Parent = new FixtureStructure("Math")
            }.Label.ShouldEqual(
                "Grammar1");
        }
    }


    public class StubGrammarStructure : GrammarStructure
    {
        public StubGrammarStructure AddError(string message)
        {
            logError(new GrammarError
            {
                Message = message,
                Node = this
            });
            return this;
        }
    }
}