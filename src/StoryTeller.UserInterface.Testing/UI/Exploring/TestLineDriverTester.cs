using System.Windows.Controls;
using NUnit.Framework;
using StoryTeller.Domain;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Exploring;

namespace StoryTeller.UserInterface.Testing.UI.Exploring
{
    [TestFixture]
    public class TestLineDriverTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            queuedTest = null;
            controls = new TestLineControls
            {
                Icon = new Image(),
                Path = new Label(),
                Run = new Button(),
                Status = new Label()
            };

            test = new Test("some test");
            driver = new TestLineDriver(controls, test, queueTest);
        }

        #endregion

        private TestLineControls controls;
        private Test test;
        private TestLineDriver driver;
        private Test queuedTest;

        private void queueTest(Test test)
        {
            queuedTest = test;
        }

        [Test]
        public void clicking_run_queues_the_test()
        {
            ControlDriver.FireEvent(controls.Run, "Click");
            queuedTest.ShouldBeTheSameAs(test);
        }

        [Test]
        public void set_the_icon_of_the_icon_image_on_update()
        {
            driver.Update(Icon.Failed, false);
            controls.Icon.GetIcon().ShouldEqual(Icon.Failed);
        }

        [Test]
        public void the_path_should_be_the_test_path()
        {
            driver.Update(Icon.Pending, true);
            controls.Path.Content.ShouldEqual(test.GetPath().Locator);
        }

        [Test]
        public void the_run_button_should_be_disabled_when_the_test_is_in_the_queue()
        {
            driver.Update(Icon.Pending, true);
            controls.Run.IsEnabled.ShouldBeFalse();
        }

        [Test]
        public void the_run_button_should_be_enabled_when_the_test_is_not_in_the_queue()
        {
            driver.Update(Icon.Success, false);

            controls.Run.IsEnabled.ShouldBeTrue();
        }

        [Test]
        public void the_status_should_be_Queued_if_the_test_is_in_the_queue()
        {
            driver.Update(Icon.Pending, true);
            controls.Status.Content.ShouldEqual("Queued");
        }

        [Test]
        public void the_status_should_be_the_test_status_if_the_test_is_not_in_the_queue()
        {
            driver.Update(Icon.Success, false);
            controls.Status.Content.ShouldEqual(test.GetStatus());
        }
    }
}