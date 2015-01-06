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