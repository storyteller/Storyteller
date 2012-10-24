using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Tests;
using Rhino.Mocks;

namespace StoryTeller.UserInterface.Testing.UI.Tests
{
    [TestFixture]
    public class EditModeTester : InteractionContext<EditMode>
    {
        private Test theTest;

        protected override void beforeEach()
        {
            theTest = new Test("some test");
            Services.Inject(theTest);
        }

        [Test]
        public void store_the_test_state_when_capturing_changes()
        {
            ClassUnderTest.CaptureChanges("json");
            MockFor<ITestStateManager>().AssertWasCalled(x => x.StoreJson("json", ClassUnderTest));
        }

        [Test]
        public void the_content_view_is_the_hmtl_view()
        {
            ClassUnderTest.ContentView.ShouldBeTheSameAs(MockFor<IHtmlView>());
        }
    }

}