using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Model;

namespace StoryTeller.Testing.Model
{
    [TestFixture]
    public class when_accepting_the_visitor
    {
        [Test]
        public void call_teh_sentence_method()
        {
            var sentence = new Sentence();
            var visitor = MockRepository.GenerateMock<IGrammarVisitor>();
            var step = new Step();

            sentence.AcceptVisitor(visitor, step);

            visitor.AssertWasCalled(x => x.Sentence(sentence, step));
        }
    }


    [TestFixture]
    public class when_writing_an_example
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            sentence = Sentence.For("{x} + {y} should equal {z}", Cell.For<int>("x"), Cell.For<int>("y"),
                                    Cell.For<int>("z"));

            sentence.Name = "Add";
            sentence.Description = "adds x to y";

            theExample = sentence.CreateExample();
        }

        #endregion

        private Sentence sentence;
        private IStep theExample;

        [Test]
        public void should_have_all_the_attributes_for_the_cells_in_the_sentence()
        {
            theExample.Has("x").ShouldBeTrue();
            theExample.Has("y").ShouldBeTrue();
            theExample.Has("z").ShouldBeTrue();

            theExample.Values.Count.ShouldEqual(3);
        }

        [Test]
        public void the_description_should_be_the_description_of_the_sentence()
        {
            theExample.Description.ShouldEqual(sentence.Description);
        }

        [Test]
        public void the_step_name_should_be_the_grammar_key_of_the_sentence()
        {
            theExample.GrammarKey.ShouldEqual(sentence.Name);
        }
    }

    [TestFixture]
    public class when_a_sentence_writes_out_an_editor
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            editor = MockRepository.GenerateMock<IStepEditor>();
        }

        #endregion

        private IStepEditor editor;


        [Test]
        public void label_adds_text_for_a_sentence()
        {
            var label = new Label("some text");
            label.ConfigureEditor(editor);

            editor.AssertWasCalled(x => x.Text("some text"));
        }

    }
}