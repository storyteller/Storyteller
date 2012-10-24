using System.Collections.Generic;
using StoryTeller.Domain;

namespace StoryTeller.Model
{
    public interface ITestStream
    {
        void Tags(Tags tags);
        void Comment(Comment comment);
        void InvalidSection(Section section);
        void StartSection(Section section, FixtureStructure fixture);
        void EndSection(Section section);
        void Sentence(Sentence sentence, IStep step);
        void InvalidGrammar(string grammarKey, IStep step);
        void Table(Table table, IStep step);
        void SetVerification(SetVerification verification, IStep step);
        void StartParagraph(Paragraph paragraph, IStep step);
        void EndParagraph(Paragraph paragraph, IStep step);
        void StartEmbeddedSection(EmbeddedSection section, IStep step);
        void EndEmbeddedSection(EmbeddedSection section, IStep step);
        void StartTest(Test test);
        void EndTest(Test test);
        void IncrementParagraphGrammar();
        void Do(DoGrammarStructure structure, IStep step);
    }

    public class TestParser : ITestVisitor, IGrammarVisitor
    {
        private readonly Stack<FixtureStructure> _fixtureStack = new Stack<FixtureStructure>();
        private readonly FixtureLibrary _library;
        private readonly ITestStream _stream;
        private readonly Test _test;
        private Section _latchedSection;

        public TestParser(Test test, ITestStream stream, FixtureLibrary library)
        {
            _test = test;
            _stream = stream;
            _library = library;
        }

        private FixtureStructure currentFixture { get { return _fixtureStack.Peek(); } }

        private bool isLatched { get { return _latchedSection != null; } }

        #region IGrammarVisitor Members

        void IGrammarVisitor.Sentence(Sentence sentence, IStep step)
        {
            _stream.Sentence(sentence, step);
        }

        void IGrammarVisitor.Table(Table table, IStep step)
        {
            _stream.Table(table, step);
        }

        void IGrammarVisitor.SetVerification(SetVerification setVerification, IStep step)
        {
            _stream.SetVerification(setVerification, step);
        }

        void IGrammarVisitor.Paragraph(Paragraph paragraph, IStep step)
        {
            _stream.StartParagraph(paragraph, step);

            paragraph.ForEachGrammar(g =>
            {
                g.AcceptVisitor(this, step);
                _stream.IncrementParagraphGrammar();
            });

            _stream.EndParagraph(paragraph, step);
        }

        void IGrammarVisitor.EmbeddedSection(EmbeddedSection section, IStep step)
        {
            _fixtureStack.Push(section.Fixture);

            _stream.StartEmbeddedSection(section, step);

            section.GetLeaf(step).AcceptVisitor(this);

            _stream.EndEmbeddedSection(section, step);

            _fixtureStack.Pop();
        }

        void IGrammarVisitor.DoGrammar(DoGrammarStructure grammar, IStep step)
        {
            _stream.Do(grammar, step);
        }

        #endregion

        #region ITestVisitor Members

        void ITestVisitor.RunStep(IStep step)
        {
            if (isLatched) return;

            if (currentFixture.HasGrammar(step.GrammarKey))
            {
                GrammarStructure grammar = currentFixture.GrammarFor(step.GrammarKey);
                grammar.AcceptVisitor(this, step);
            }
            else
            {
                _stream.InvalidGrammar(step.GrammarKey, step);
            }
        }

        void ITestVisitor.WriteTags(Tags tags)
        {
            if (isLatched) return;
            _stream.Tags(tags);
        }


        void ITestVisitor.WriteComment(Comment comment)
        {
            if (isLatched) return;
            _stream.Comment(comment);
        }

        void ITestVisitor.StartSection(Section section)
        {
            if (isLatched) return;
            string fixtureName = section.GetName();

            if (_library.HasFixture(fixtureName))
            {
                FixtureStructure fixture = _library.FixtureFor(fixtureName);
                _fixtureStack.Push(fixture);
                _stream.StartSection(section, fixture);
            }
            else
            {
                _stream.InvalidSection(section);
                _latchedSection = section;
            }
        }

        void ITestVisitor.EndSection(Section section)
        {
            if (_latchedSection == section)
            {
                _latchedSection = null;
                return;
            }

            if (isLatched) return;

            _fixtureStack.Pop();
            _stream.EndSection(section);
        }

        #endregion

        public void Parse()
        {
            _stream.StartTest(_test);
            _test.AcceptVisitor(this);
            _stream.EndTest(_test);
        }

    }
}