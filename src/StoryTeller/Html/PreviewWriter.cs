using System;
using HtmlTags;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Model;

namespace StoryTeller.Html
{
    public class PreviewWriter : ITestStream
    {
        protected readonly HtmlDocument _document;
        private readonly ITestContext _context;

        public PreviewWriter(ITestContext context)
            : this(new HtmlDocument(), context)
        {
        }

        public PreviewWriter(HtmlDocument document, ITestContext context)
        {
            _document = document;
            _context = context;

            _document.AddStyle(HtmlClasses.CSS());


            _document.Push("div").AddClass("main");
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
            tag.WritePreview(_context);


            _document.Add(tag);
        }

        void ITestStream.InvalidGrammar(string grammarKey, IStep step)
        {
            var tag = new InvalidGrammarTag(grammarKey);
            _document.Add(tag);
        }

        void ITestStream.Table(Table table, IStep step)
        {
            var container = _document.Current.JoinTagAtEnd<TableContainerTag>();

            var tag = new StoryTellerTableTag(table, step);
            tag.WritePreview(_context);

            container.Add(table.Label, tag);
        }

        void ITestStream.SetVerification(SetVerification verification, IStep step)
        {
            var container = _document.Current.JoinTagAtEnd<TableContainerTag>();

            var tag = new StoryTellerTableTag(verification, step);
            tag.WritePreview(_context);

            container.Add(verification.Label, tag);
        }

        void ITestStream.StartParagraph(Paragraph paragraph, IStep step)
        {
            var tag = new ParagraphTag(paragraph, step);
            
            _document.Push(tag);
        }

        void ITestStream.EndParagraph(Paragraph paragraph, IStep step)
        {
            _document.Pop();
        }

        void ITestStream.StartEmbeddedSection(EmbeddedSection section, IStep step)
        {
            _document.Push(new EmbeddedSectionTag(section, step));
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

            _document.PushWithoutAttaching(testHolder.CreateStepHolder());
        }

        void ITestStream.EndTest(Test test)
        {
            _document.Pop();
        }

        void ITestStream.IncrementParagraphGrammar()
        {
            // do nothing
        }

        public void Do(DoGrammarStructure structure, IStep step)
        {
            // do nothing
        }
    }
}