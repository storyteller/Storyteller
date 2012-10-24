using System;
using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Domain;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Tests;

namespace StoryTeller.UserInterface.Testing.UI.Tests
{
    [TestFixture]
    public class when_initializing_the_xml_editor_screen : InteractionContext<XmlMode>
    {
        private Test theTest;

        protected override void beforeEach()
        {
            theTest = new Test("something");
            Services.Inject(theTest);
        }

        [Test]
        public void initialize_the_screen_refills_the_xml_on_the_screen()
        {
            string xml = "<xml />";
            MockFor<ITestStateManager>().Stub(x => x.CurrentXml).Return(xml);
            
            ClassUnderTest.Refresh();

            MockFor<IXmlView>().AssertWasCalled(x => x.Xml = xml);
        }


    }



    [TestFixture]
    public class when_applying_changes_successfully : InteractionContext<XmlMode>
    {
        private Test theTest;
        private string theXml = "<Test/>";

        protected override void beforeEach()
        {
            theTest = new Test("something");
            Services.Inject(theTest);

            MockFor<IXmlView>().Expect(x => x.Xml).Return(theXml);

            ClassUnderTest.ApplyChanges().ShouldBeTrue();
        }

        [Test]
        public void should_apply_the_changes_from_the_xml_to_the_test()
        {
            MockFor<ITestStateManager>().AssertWasCalled(x => x.StoreXml(theXml, ClassUnderTest));
        }

        [Test]
        public void should_retrieve_the_current_xml_from_the_view()
        {
            MockFor<IXmlView>().VerifyAllExpectations();
        }
    }

    [TestFixture]
    public class when_applying_changes_unsuccessfully : InteractionContext<XmlMode>
    {
        private string theXml = "<Test/>";
        private NotImplementedException theException;

        protected override void beforeEach()
        {
            MockFor<IXmlView>().Expect(x => x.Xml).Return(theXml);

            theException = new NotImplementedException();
            MockFor<ITestStateManager>().Expect(x => x.StoreXml(theXml, ClassUnderTest))
                .Throw(theException);

            ClassUnderTest.ApplyChanges().ShouldBeFalse();
        }

        [Test]
        public void should_message_that_the_xml_failed()
        {
            MockFor<IMessageCreator>().AssertWasCalled(x => x.ShowAlert("Could not save Xml", theException.ToString()));
        }
    }

}