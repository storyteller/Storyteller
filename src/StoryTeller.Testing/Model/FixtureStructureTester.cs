using System;
using System.Linq;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Engine.Constraints;
using StoryTeller.Model;
using StoryTeller.Samples;
using StoryTeller.Samples.Grammars;

namespace StoryTeller.Testing.Model
{
    [TestFixture]
    public class when_creating_an_example_section_from_a_fixturegraph
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            FixtureStructure fixtureStructure = FixtureGraph.Library.FixtureFor("Math");
            section = fixtureStructure.CreateExample();
        }

        #endregion

        private Section section;

        [Test]
        public void the_section_has_examples_for_all_the_grammars_in_the_fixture()
        {
            section.Parts.Where(x => x is Step).Count().ShouldEqual(new MathFixture().GrammarCount);
        }

        [Test]
        public void the_section_name_should_be_the_fixture_name()
        {
            section.FixtureName.ShouldEqual(typeof (MathFixture).GetFixtureAlias());
        }
    }

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
        public void creates_example_test()
        {
            var template = new Test("some test");
            Section section = template.Section("Math");
            section.AddStep("step1");
            section.AddStep("step2");
            section.AddStep("step3");

            new FixtureStructure("Math").ModifyExampleTest(template);
            template.Parts.Count.ShouldEqual(1);
            template.Parts[0].ShouldBeOfType<Section>();
        }

        [Test]
        public void Title()
        {
            new FixtureStructure("Math").Label.ShouldEqual("Math");
        }
    }


    [TestFixture]
    public class when_using_the_constraints_model_to_determine_the_possible_grammars
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            fixture = new FixtureStructure();
            fixture.AddStructure("Hidden1", new Sentence());
            fixture.AddStructure("Hidden2", new Sentence());
            fixture.AddStructure("NotHidden3", new Sentence());
            fixture.AddStructure("NotHidden4", new Sentence());

            var constraints = new Policies();
            constraints.HideGrammar("Hidden1");
            constraints.HideGrammar("Hidden2");

            fixture.Policies = constraints;
        }

        #endregion

        private FixtureStructure fixture;

        [Test]
        public void the_possible_grammars_should_not_include_the_hidden_grammars()
        {
            fixture.PossibleGrammarsFor(new StepLeaf()).ShouldHaveTheSameElementsAs(new[]
            {fixture.GrammarFor("NotHidden3"), fixture.GrammarFor("NotHidden4")});
        }


        [Test]
        public void the_possible_grammars_should_not_include_the_hidden_grammars_using_the_top_level_method()
        {
            fixture.TopLevelGrammars().ShouldHaveTheSameElementsAs(new[]
            {fixture.GrammarFor("NotHidden3"), fixture.GrammarFor("NotHidden4")});
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
        public void create_example_test()
        {
            var test = new Test("some test");
            test.Section("a");
            test.Section("b");
            test.Section("c");
            Section section = new Section("Math").WithStep("MultiplyBy").WithStep("step1").WithStep("step2");
            test.Add(section);


            var structure = new StubGrammarStructure
            {
                Name = "MultiplyBy",
                Parent = new FixtureStructure("Math")
            };
            structure.ModifyExampleTest(test);

            test.Parts.Count.ShouldEqual(1);
            var theSection = test.Parts[0].ShouldBeOfType<Section>();

            theSection.Parts.Count.ShouldEqual(1);
            theSection.Parts[0].ShouldBeOfType<IStep>().GrammarKey.ShouldEqual("MultiplyBy");
        }

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
        protected override void fillExample(IStep step)
        {
            throw new NotImplementedException();
        }

        public override void AcceptVisitor(IGrammarVisitor visitor, IStep step)
        {
            throw new NotImplementedException();
        }

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