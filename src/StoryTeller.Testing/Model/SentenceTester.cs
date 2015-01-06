using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Model;

namespace StoryTeller.Testing.Model
{


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