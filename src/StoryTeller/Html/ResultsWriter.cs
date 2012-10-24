using System;
using System.Collections.Generic;
using FubuCore;
using HtmlTags;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Model;

namespace StoryTeller.Html
{
    public class ResultsWriter : ITestStream
    {
        private readonly HtmlDocument _document;
        private readonly ITestContext _context;
        private StepResults _paragraphResults;

        public ResultsWriter(ITestContext context)
            : this(new HtmlDocument(), context)
        {
        }

        public ResultsWriter(HtmlDocument document, ITestContext context)
        {
            _document = document;
            _context = context;

            _document.AddStyle(HtmlClasses.CSS());
        }

        public HtmlDocument Document { get { return _document; } }

        void ITestStream.Tags(Tags tags)
        {
            _document.Add(new TagsTag(tags));
        }
        
        void ITestStream.Comment(Comment comment)
        {
            _document.Add(new CommentTag(comment));
        }

        void ITestStream.InvalidSection(Section section)
        {
            _document.Add(new InvalidFixtureTag(section.FixtureName));
        }

        void ITestStream.StartSection(Section section, FixtureStructure fixture)
        {
            var sectionTag = new SectionTag(section, fixture);
            sectionTag.WriteResults(_context);

            _document.Add(sectionTag);

            _document.PushWithoutAttaching(sectionTag.Body);
        }

        void ITestStream.EndSection(Section section)
        {
            _document.Pop();
        }

        void ITestStream.Sentence(Sentence sentence, IStep step)
        {
            var tag = new SentenceTag(sentence, step);
            tag.WriteResults(_context);
            _document.Add(tag);
        }

        void ITestStream.InvalidGrammar(string grammarKey, IStep step)
        {
            var tag = new InvalidGrammarTag(grammarKey);
            _document.Add(tag);
        }

        void ITestStream.Table(Table table, IStep step)
        {
            var holder = _document.Current.JoinTagAtEnd<TableContainerTag>();

            var tag = new StoryTellerTableTag(table, step);
            tag.WriteResults(_context);


            holder.Add(table.Label, tag);
        }

        void ITestStream.SetVerification(SetVerification verification, IStep step)
        {
            var holder = _document.Current.JoinTagAtEnd<TableContainerTag>();


            var tag = new StoryTellerTableTag(verification, step);
            tag.WriteSetVerificationResults(verification, _context);

            holder.Add(verification.Label, tag);
        }

        void ITestStream.StartParagraph(Paragraph paragraph, IStep step)
        {
            _paragraphResults = _context.ResultsFor(step);
            _paragraphResults.MoveFirst();

            var tag = new ParagraphTag(paragraph, step);
            _document.Push(tag);
        }

        void ITestStream.EndParagraph(Paragraph paragraph, IStep step)
        {
            _document.Pop();
        }

        void ITestStream.StartEmbeddedSection(EmbeddedSection section, IStep step)
        {
            var sectionTag = new EmbeddedSectionTag(section, step);
            sectionTag.WriteResults(_context);
            _document.Push(sectionTag);
        }

        void ITestStream.EndEmbeddedSection(EmbeddedSection section, IStep step)
        {
            _document.Pop();
        }

        void ITestStream.StartTest(Test test)
        {
            var testHolder = new TestHolderTag();
            
            _document.Add(testHolder);
            testHolder.TestName.Text(test.Name);
            testHolder.WriteSuiteName("Suite: " + test.SuiteName);
            testHolder.WriteResults(_context.Counts);
            

            _context.ResultsFor(test).ForExceptionText(text =>
            {
                _document.Add(new ExceptionTag(text));
            });

            _document.PushWithoutAttaching(testHolder.CreateStepHolder());
        }

        void ITestStream.EndTest(Test test)
        {
            if (_context.TraceText.IsEmpty()) return;

            _document.Add("hr");

            _document.Add("pre").Text(_context.TraceText);
        }

        void ITestStream.IncrementParagraphGrammar()
        {
            _paragraphResults.MoveFrame();
        }

        void ITestStream.Do(DoGrammarStructure structure, IStep step)
        {
            _paragraphResults.ForExceptionText(text =>
            {
                _document.Add(new ExceptionTag(text));
            });
        }
    }
}