using System;
using System.Collections.Generic;
using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Testing.Model;
using StructureMap.AutoMocking;

namespace StoryTeller.Testing.Engine
{
    [TestFixture]
    public class when_getting_the_structure_of_a_composite_grammar
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            var library = new FixtureLibrary();

            var grammar1 = MockRepository.GenerateMock<IGrammar>();
            var grammar2 = MockRepository.GenerateMock<IGrammar>();
            var grammar3 = MockRepository.GenerateMock<IGrammar>();

            structure1 = new StubGrammarStructure();
            structure2 = new StubGrammarStructure();
            structure3 = new StubGrammarStructure();

            grammar1.Expect(x => x.Description).Return("something");
            grammar1.Expect(x => x.ToStructure(library)).Return(structure1);
            grammar2.Expect(x => x.ToStructure(library)).Return(structure2);
            grammar3.Expect(x => x.ToStructure(library)).Return(structure3);

            grammar = new ParagraphGrammar("the title").With(grammar1, grammar2, grammar3);
            grammar.Style = EmbedStyle.TitledAndIndented;
            theStructure = grammar.ToStructure(library).ShouldBeOfType<Paragraph>();
        }

        #endregion

        private StubGrammarStructure structure1;
        private StubGrammarStructure structure2;
        private StubGrammarStructure structure3;
        private ParagraphGrammar grammar;
        private Paragraph theStructure;

        [Test]
        public void should_copy_the_description_of_the_child_grammars()
        {
            theStructure.Children[0].Description.ShouldEqual("something");
        }

        [Test]
        public void should_copy_the_embed_style_from_composite_grammar_to_paragraph()
        {
            theStructure.Style.ShouldEqual(grammar.Style);
        }

        [Test]
        public void should_transfer_the_grammar_structures_for_each_of_the_child_grammars()
        {
            theStructure.Children.ToArray().ShouldEqual(new GrammarStructure[] { structure1, structure2, structure3 });
        }

        [Test]
        public void should_transfer_the_label()
        {
            theStructure.Label.ShouldEqual(grammar.Title());
        }
    }

    [TestFixture]
    public class default_values
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            _paragraph = new ParagraphGrammar("the title");
        }

        #endregion

        private ParagraphGrammar _paragraph;

        [Test]
        public void the_default_style_should_be_embed()
        {
            _paragraph.Style.ShouldEqual(EmbedStyle.TitledAndIndented);
        }
    }


    [TestFixture]
    public class when_executing_the_composite_grammar
    {
        private IGrammar[] grammars;
        private IStep step;
        private ITestContext context;
        private Counts counts;
        private ParagraphGrammar ClassUnderTest;

        [SetUp]
        public void SetUp()
        {
            grammars = new IGrammar[]
            {
                MockRepository.GenerateMock<IGrammar>(),
                MockRepository.GenerateMock<IGrammar>(),
                MockRepository.GenerateMock<IGrammar>()
            };
            ClassUnderTest = new ParagraphGrammar(grammars);

            step = MockRepository.GenerateMock<IStep>();

            context = MockRepository.GenerateMock<AutoPerformingTestContext>();
            counts = new Counts();
        }


        [Test]
        public void calls_a_do_grammar()
        {
            string text = string.Empty;

            ClassUnderTest.ConfigureSteps(x =>
            {
                x += () => text += "a";
                x += () => text += "b";
                x += () => text += "c";
            });

            ClassUnderTest.Execute(step, context);

            counts.ShouldEqual(0, 0, 0, 0);
        }

        [Test]
        public void calls_the_after_method()
        {
            var grammar = MockRepository.GenerateMock<IGrammar>();
            grammar.Expect(x => x.Execute(step, context));
            grammar.Replay();

            ClassUnderTest.ConfigureSteps(x => x += grammar.Execute);

            ClassUnderTest.Execute(step, context);

            grammar.VerifyAllExpectations();
        }

        [Test]
        public void calls_the_before_method()
        {
            var grammar = MockRepository.GenerateMock<IGrammar>();
            grammar.Expect(x => x.Execute(step, context));
            grammar.Replay();

            ClassUnderTest.ConfigureSteps(x => x += grammar.Execute);

            ClassUnderTest.Execute(step, context);

            grammar.VerifyAllExpectations();
        }

        [Test]
        public void captures_exception_if_anything_goes_wrong()
        {
            var exception = new NotImplementedException();

            ClassUnderTest.ConfigureSteps(x => { x += (s, c) => { throw exception; }; });


            ClassUnderTest.Execute(step, context);

            context.AssertWasCalled(x => x.IncrementExceptions());
        }

        [Test]
        public void execute_all_the_grammars()
        {
            foreach (IGrammar grammar in grammars)
            {
                grammar.Expect(x => x.Execute(step, context));
                grammar.Replay();
            }

            ClassUnderTest.Execute(step, context);

            foreach (IGrammar grammar in grammars)
            {
                grammar.VerifyAllExpectations();
            }
        }
    }

    [TestFixture]
    public class when_getting_the_cells_for_a_compound_grammar
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            var child1 = MockRepository.GenerateMock<LineGrammar>();
            var child2 = MockRepository.GenerateMock<LineGrammar>();
            var child3 = MockRepository.GenerateMock<LineGrammar>();

            var grammar = new ParagraphGrammar(child1, child2, child3);

            child1.Stub(x => x.GetCells()).Return(new List<Cell>
            {
                new Cell("name1", typeof (string))
            });
            child2.Stub(x => x.GetCells()).Return(new List<Cell>
            {
                new Cell("name2", typeof (string))
            });
            child3.Stub(x => x.GetCells()).Return(new List<Cell>
            {
                new Cell("name3", typeof (string)),
                new Cell("name4", typeof (string))
            });

            cells = grammar.GetCells();
        }

        #endregion

        private IList<Cell> cells;

        [Test]
        public void should_read_cells_for_all_child_grammars()
        {
            cells.Count.ShouldEqual(4);

            cells.ShouldContain(new Cell("name1", typeof(string)));
            cells.ShouldContain(new Cell("name2", typeof(string)));
            cells.ShouldContain(new Cell("name3", typeof(string)));
            cells.ShouldContain(new Cell("name4", typeof(string)));
        }
    }
}