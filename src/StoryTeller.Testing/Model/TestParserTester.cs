using System;
using FubuCore.Conversion;
using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Model;

namespace StoryTeller.Testing.Model
{
    [TestFixture]
    public class TestParserTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            library = new FixtureLibrary();
            test = new Test("something");
            stream = MockRepository.GenerateMock<ITestStream>();

            library.FixtureFor(GoodSection.FixtureName);

            parser = new TestParser(test, stream, library);
            testVisitor = parser.As<ITestVisitor>();
        }

        #endregion

        private FixtureLibrary library;
        private Test test;
        private ITestStream stream;
        private TestParser parser;

        private readonly Section GoodSection = new Section("good section");
        private ITestVisitor testVisitor;
        private Section lastSection;

        private string theParserShouldBeLatchedByMissingFixture()
        {
            string fixtureName = "FixtureThatDoesNotExist";
            lastSection = new Section(fixtureName);
            parser.CallOn<ITestVisitor>(x => x.StartSection(lastSection));
            return fixtureName;
        }

        private GrammarAndStep<T> runStep<T>(Action<T> configure) where T : GrammarStructure, new()
        {
            var grammar = new T();
            if (configure != null) configure(grammar);

            grammar.Name = "Good";
            library.FixtureFor(GoodSection.FixtureName).AddStructure("Good", grammar);

            var step = new Step("Good");
            testVisitor.StartSection(GoodSection);
            testVisitor.RunStep(step);

            return new GrammarAndStep<T>
            {
                Step = step,
                Grammar = grammar
            };
        }

        [Test]
        public void does_not_write_a_comment_if_the_section_is_latched()
        {
            theParserShouldBeLatchedByMissingFixture();

            var comment = new Comment();
            parser.CallOn<ITestVisitor>(x => x.WriteComment(comment));

            stream.AssertWasNotCalled(x => x.Comment(comment));
        }

        [Test]
        public void does_start_to_write_comments_again_after_the_offending_section_is_unlatched()
        {
            string fixtureName = "FixtureThatDoesNotExist";
            var section = new Section(fixtureName);
            parser.CallOn<ITestVisitor>(x => x.StartSection(section));
            parser.CallOn<ITestVisitor>(x => x.EndSection(section));

            var comment = new Comment();
            parser.CallOn<ITestVisitor>(x => x.WriteComment(comment));

            stream.AssertWasCalled(x => x.Comment(comment));
        }

        [Test]
        public void end_the_section_relays_when_not_latched()
        {
            parser.As<ITestVisitor>().StartSection(GoodSection);
            parser.As<ITestVisitor>().EndSection(GoodSection);

            stream.AssertWasCalled(x => x.EndSection(GoodSection));
        }

        [Test]
        public void relay_a_bad_grammar()
        {
            testVisitor.StartSection(GoodSection);
            string missingGrammarKey = "GrammarThatDoesNotExist";
            var step = new Step(missingGrammarKey);
            testVisitor.RunStep(step);

            stream.AssertWasCalled(x => x.InvalidGrammar(missingGrammarKey, step));
        }

        [Test]
        public void relay_a_paragraph()
        {
            var sentence1 = new Sentence
            {
                Name = "1"
            };
            var sentence2 = new Sentence
            {
                Name = "2"
            };
            var sentence3 = new Sentence
            {
                Name = "3"
            };

            GrammarAndStep<Paragraph> context = runStep<Paragraph>(x =>
            {
                x.AddStructure(sentence1);
                x.AddStructure(sentence2);
                x.AddStructure(sentence3);
            });

            stream.AssertWasCalled(x => x.StartParagraph(context.Grammar, context.Step));

            stream.AssertWasCalled(x => x.Sentence(sentence1, context.Step));
            stream.AssertWasCalled(x => x.Sentence(sentence2, context.Step));
            stream.AssertWasCalled(x => x.Sentence(sentence3, context.Step));

            stream.AssertWasCalled(x => x.EndParagraph(context.Grammar, context.Step));
        }

        [Test]
        public void relay_embedded_section_start_and_finish()
        {
            GrammarAndStep<EmbeddedSection> context = runStep<EmbeddedSection>(x =>
            {
                x.Fixture = new FixtureStructure("embedded");
                x.LeafName = "leaf";
            });

            stream.AssertWasCalled(x => x.StartEmbeddedSection(context.Grammar, context.Step));
            stream.AssertWasCalled(x => x.EndEmbeddedSection(context.Grammar, context.Step));
        }

        [Test]
        public void relay_to_the_stream_when_the_new_section_can_be_found()
        {
            FixtureStructure fixture = library.FixtureFor("Existing");
            var section = new Section(fixture.Name);

            parser.As<ITestVisitor>().StartSection(section);

            stream.AssertWasCalled(x => x.StartSection(section, fixture));
        }

        [Test]
        public void run_a_sentence()
        {
            GrammarAndStep<Sentence> context = runStep<Sentence>(null);

            stream.AssertWasCalled(x => x.Sentence(context.Grammar, context.Step));
        }

        [Test]
        public void run_a_set_verification()
        {
            GrammarAndStep<SetVerification> context = runStep<SetVerification>(null);

            stream.AssertWasCalled(x => x.SetVerification(context.Grammar, context.Step));
        }

        [Test]
        public void run_a_table()
        {
            GrammarAndStep<Table> context = runStep<Table>(null);

            stream.AssertWasCalled(x => x.Table(context.Grammar, context.Step));
        }

        [Test]
        public void tell_the_stream_when_there_is_an_invalid_section()
        {
            string fixtureName = theParserShouldBeLatchedByMissingFixture();

            stream.AssertWasCalled(x => x.InvalidSection(lastSection));
            stream.AssertWasNotCalled(x => x.StartSection(null, null), x => x.IgnoreArguments());
        }

        [Test]
        public void writing_a_comment_relays_to_the_stream_if_not_latches()
        {
            var comment = new Comment();
            parser.CallOn<ITestVisitor>(x => x.WriteComment(comment));

            stream.AssertWasCalled(x => x.Comment(comment));
        }
    }

    public class GrammarAndStep<T> where T : GrammarStructure
    {
        public IStep Step { get; set; }
        public T Grammar { get; set; }
    }
}