using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Html;
using StoryTeller.Model;
using TestContext = StoryTeller.Engine.TestContext;

namespace StoryTeller.Testing.Html
{
    [TestFixture]
    public class when_writing_the_preview_for_a_sentence
    {
        private Sentence sentence;
        private Step step;
        private SentenceTag tag;
        private TestContext context;

        [SetUp]
        public void SetUp()
        {
            sentence = Sentence.For("{name} is {age}", Cell.For<string>("name"), Cell.For<int>("age"));
            step = new Step().With("name:Max,age:6");
            tag = new SentenceTag(sentence, step);

            context = new TestContext();

            tag.WritePreview(context);
        }

        [Test]
        public void tag_has_the_inputs_and_labels()
        {
            tag.Children.Count.ShouldEqual(3);

            tag.Children[0].Text().ShouldEqual("Max");
            tag.Children[0].HasClass(HtmlClasses.INPUT).ShouldBeTrue();

            tag.Children[1].Text().ShouldEqual(" is ");
            tag.Children[1].HasClass(HtmlClasses.INPUT).ShouldBeFalse();

            tag.Children[2].Text().ShouldEqual("6");
            tag.Children[2].HasClass(HtmlClasses.INPUT).ShouldBeTrue();
        }


    }

    [TestFixture]
    public class when_writing_the_results_with_no_exceptions
    {
        private Sentence sentence;
        private Step step;
        private SentenceTag tag;
        private TestContext context;

        [SetUp]
        public void SetUp()
        {
            sentence = Sentence.For("{name} is {age}", Cell.For<string>("name"), Cell.For<int>("age"));
            step = new Step().With("name:Max,age:6");
            tag = new SentenceTag(sentence, step);

            context = new TestContext();

            tag.WriteResults(context);
        }

        [Test]
        public void tag_has_the_inputs_and_labels()
        {
            tag.Children.Count.ShouldEqual(3);

            tag.Children[0].Text().ShouldEqual("Max");
            tag.Children[0].HasClass(HtmlClasses.INPUT).ShouldBeTrue();

            tag.Children[1].Text().ShouldEqual(" is ");
            tag.Children[1].HasClass(HtmlClasses.INPUT).ShouldBeFalse();

            tag.Children[2].Text().ShouldEqual("6");
            tag.Children[2].HasClass(HtmlClasses.INPUT).ShouldBeTrue();
        }

        [Test]
        public void should_not_be_an_exception_tag()
        {
            tag.Next.ShouldBeNull();
        }

        [Test]
        public void the_sentence_should_not_be_marked_as_an_exception()
        {
            tag.HasClass(HtmlClasses.EXCEPTION).ShouldBeFalse();
        }
    }

    [TestFixture]
    public class when_creating_the_sentence_for_a_fact
    {
        [Test]
        public void should_have_a_label()
        {
            var fixture = new FactFixture();
            var grammar = fixture["True"];
            var fixtureLibrary = new FixtureLibrary();
            var sentence = grammar.ToStructure(fixtureLibrary) as Sentence;
            sentence.PartCount.ShouldEqual(1);
            sentence.Parts[0].ShouldBeOfType<Label>().Text.ShouldEqual("This is true");
        }
    }

    public class FactFixture : Fixture
    {
        public FactFixture()
        {
            this["True"] = Fact("This is true").VerifiedBy(() => true);
            this["False"] = Fact("This is false").VerifiedBy(() => true);
        }
    }

    [TestFixture]
    public class when_writing_the_results_of_a_failed_fact
    {
        private Sentence sentence;
        private Step step;
        private SentenceTag tag;
        private TestContext context;

        [SetUp]
        public void SetUp()
        {
            context = new TestContext();
            sentence = new FactFixture()["True"].ToStructure(new FixtureLibrary()).As<Sentence>();
            step = new Step();

            sentence.ResultCell.RecordActual(false, step, context);

            tag = new SentenceTag(sentence, step);
            tag.WriteResults(context);
        }

        [Test]
        public void the_top_level_tag_should_have_the_failure_class_to_denote_that_the_fact_was_not_true()
        {
            tag.HasClass(HtmlClasses.FAIL).ShouldBeTrue();
        }
    }


    [TestFixture]
    public class when_writing_the_results_of_a_successful_fact
    {
        private Sentence sentence;
        private Step step;
        private SentenceTag tag;
        private TestContext context;

        [SetUp]
        public void SetUp()
        {
            context = new TestContext();
            sentence = new FactFixture()["True"].ToStructure(new FixtureLibrary()).As<Sentence>();
            step = new Step();

            sentence.ResultCell.RecordActual(true, step, context);

            tag = new SentenceTag(sentence, step);
            tag.WriteResults(context);
        }

        [Test]
        public void the_top_level_tag_should_have_the_failure_class_to_denote_that_the_fact_was_not_true()
        {
            tag.HasClass(HtmlClasses.PASS).ShouldBeTrue();
        }
    }


    [TestFixture]
    public class when_writing_a_sentence_tag_for_a_step_with_an_exception_in_the_results
    {
        private Sentence sentence;
        private Step step;
        private SentenceTag tag;
        private TestContext context;

        [SetUp]
        public void SetUp()
        {
            sentence = Sentence.For("{name} is {age}", Cell.For<string>("name"), Cell.For<int>("age"));
            step = new Step().With("name:Max,age:6");
            tag = new SentenceTag(sentence, step);

            context = new TestContext();
            StepResults results = context.ResultsFor(step);
            results.CaptureException("bad stuff");
            results.ExceptionText.ShouldEqual("bad stuff");


            tag.WriteResults(context);
        }

        [Test]
        public void the_sentence_tag_should_have_the_exception_class()
        {
            tag.HasClass(HtmlClasses.EXCEPTION).ShouldBeTrue();
        }

        [Test]
        public void should_be_an_exception_tag_for_the_exception_just_under_the_sentence_tag()
        {
            tag.Next.ShouldBeOfType<ExceptionTag>().ExceptionText().ShouldEqual("bad stuff");
        }
    }
}