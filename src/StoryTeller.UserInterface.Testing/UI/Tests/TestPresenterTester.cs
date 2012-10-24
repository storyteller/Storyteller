using System.Linq;
using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Tests;
using StoryTeller.Workspace;

namespace StoryTeller.UserInterface.Testing.UI.Tests
{
    [TestFixture]
    public class when_retrieving_the_modes : TestPresenterInteractionContext
    {
        protected override void setUp()
        {
        }

        [Test]
        public void has_four_modes()
        {
            ClassUnderTest.Modes.Count().ShouldEqual(4);
        }
    }


    [TestFixture]
    public class when_responding_to_the_clear_results_message : TestPresenterInteractionContext
    {
        protected override void setUp()
        {
            Services.PartialMockTheClassUnderTest();
        }

        [Test]
        public void change_to_preview_mode_if_the_view_is_in_results_mode()
        {
            ThePresenter.SetMode(Mode.Results);
            ClassUnderTest.Expect(x => x.ChangeModeTo(Mode.Preview));

            ClassUnderTest.HandleMessage(new ClearResultsMessage());

            ClassUnderTest.VerifyAllExpectations();
        }

        [Test]
        public void update_the_screen_if_the_view_is_in_results_mode()
        {
            ThePresenter.SetMode(Mode.Preview);

            ClassUnderTest.HandleMessage(new ClearResultsMessage());

            MockFor<ITestHeaderViewModel>().AssertWasCalled(x => x.Update());
        }
    }


    [TestFixture]
    public class when_showing_the_preview_in_the_screen : TestPresenterInteractionContext
    {
        private string theHtml = "<html></html>";

        protected override void setUp()
        {
            Services.PartialMockTheClassUnderTest();

            MockFor<ITestService>().Expect(x => x.CreatePreview(theTest)).Return(theHtml);

            ThePresenter.ChangeModeTo(Mode.Preview);
        }

        [Test]
        public void should_convert_the_test_to_the_preview_html()
        {
            MockFor<ITestService>().VerifyAllExpectations();
        }

        [Test]
        public void should_put_the_html_view_into_the_main_panel()
        {
            var html = MockFor<IHtmlView>();
            MockFor<ITestView>().AssertWasCalled(x => x.PlaceInMainPane(html));
        }

        [Test]
        public void should_update_the_html_in_the_view()
        {
            MockFor<IHtmlView>().AssertWasCalled(x => x.Html = theHtml);
        }

        [Test]
        public void should_update_the_screen_state()
        {
            MockFor<ITestHeaderViewModel>().AssertWasCalled(x => x.Update());
        }
    }

    [TestFixture]
    public class when_showing_results_from_the_test : TestPresenterInteractionContext
    {
        protected override void setUp()
        {
            Services.PartialMockTheClassUnderTest();

            theTest.LastResult = new TestResult()
            {
                Html = "<html />"
            };

            ThePresenter.ChangeModeTo(Mode.Results);
        }

        [Test]
        public void should_update_the_screen_state()
        {
            MockFor<ITestHeaderViewModel>().AssertWasCalled(x => x.Update());
        }

        [Test]
        public void the_html_view_should_be_placed_in_the_main_pane()
        {
            var html = MockFor<IHtmlView>();
            MockFor<ITestView>().AssertWasCalled(x => x.PlaceInMainPane(html));
        }

        [Test]
        public void the_view_was_updated_with_the_resulting_html()
        {
            MockFor<IHtmlView>().AssertWasCalled(x => x.Html = theTest.LastResult.Html);
        }
    }

    [TestFixture]
    public class when_changing_the_view_to_xml_mode : TestPresenterInteractionContext
    {
        private string theXml = "<xml/>";

        protected override void setUp()
        {
            Services.PartialMockTheClassUnderTest();

            MockFor<ITestStateManager>().Expect(x => x.CurrentXml).Return(theXml);

            ThePresenter.ChangeModeTo(Mode.Xml);
        }

        [Test]
        public void should_update_the_screen_state()
        {
            MockFor<ITestHeaderViewModel>().AssertWasCalled(x => x.Update());
        }

        [Test]
        public void the_xml_view_should_be_placed_in_the_main_content_window()
        {
            var xml = MockFor<IXmlView>();
            MockFor<ITestView>().AssertWasCalled(x => x.PlaceInMainPane(xml));
        }
    }




    [TestFixture]
    public class when_activating_a_screen_without_result_but_not_empty : TestPresenterInteractionContext
    {
        protected override void setUp()
        {
            ThereIsNoPreviousResultForTheTest();
            theTest.Add(new Section("something"));

            Services.PartialMockTheClassUnderTest();

            ThePresenter.Expect(x => x.ChangeModeTo(Mode.Preview));

            ThePresenter.Start();
        }

        [Test]
        public void the_current_mode_should_be_ChangeModeToPreview()
        {
            ThePresenter.CurrentMode.Mode.ShouldEqual(Mode.Preview);
        }

        [Test]
        public void the_view_should_be_put_into_the_preview_mode()
        {
            ClassUnderTest.AssertWasCalled(x => x.ChangeModeTo(Mode.Preview));
        }
    }

    [TestFixture]
    public class when_activating_a_screen_without_result : TestPresenterInteractionContext
    {
        protected override void setUp()
        {
            ThereIsNoPreviousResultForTheTest();
            theTest.IsEmpty().ShouldBeTrue();

            Services.PartialMockTheClassUnderTest();

            ThePresenter.Expect(x => x.ChangeModeTo(Mode.Preview));

            ThePresenter.Start();
        }

        [Test]
        public void set_the_view_mode_selector_to_ChangeModeToPreview()
        {
            ThePresenter.CurrentMode.Mode.ShouldEqual(Mode.Preview);
        }

        [Test]
        public void the_available_modes_are_xml_and_ChangeModeToEdit()
        {
            ThePresenter.Modes[Mode.Edit].CanExecute(null).ShouldBeTrue();
            ThePresenter.Modes[Mode.Preview].CanExecute(null).ShouldBeFalse();
            ThePresenter.Modes[Mode.Results].CanExecute(null).ShouldBeFalse();
            ThePresenter.Modes[Mode.Xml].CanExecute(null).ShouldBeTrue();
        }

        [Test]
        public void the_view_should_be_put_into_the_preview_mode()
        {
            ClassUnderTest.AssertWasCalled(x => x.ChangeModeTo(Mode.Preview));
        }
    }

    [TestFixture]
    public class when_activating_a_screen_with_a_result : TestPresenterInteractionContext
    {
        protected override void setUp()
        {
            ThereIsAPreviousResultForTheTest();
            Services.PartialMockTheClassUnderTest();

            ThePresenter.Expect(x => x.ChangeModeTo(Mode.Results));
            ThePresenter.Start();
        }


        [Test]
        public void the_view_should_be_put_into_the_results_mode()
        {
            ThePresenter.AssertWasCalled(x => x.ChangeModeTo(Mode.Results));
        }
    }

    [TestFixture]
    public class when_the_screen_is_in_results_mode : TestPresenterInteractionContext
    {
        protected override void setUp()
        {
            ThePresenter.ChangeModeTo(Mode.Results);
        }

        [Test]
        public void edit_is_enabled()
        {
            ThePresenter.Modes[Mode.Edit].CanExecute(null).ShouldBeTrue();
        }

        [Test]
        public void preview_is_enabled()
        {
            ThePresenter.Modes[Mode.Preview].CanExecute(null).ShouldBeTrue();
        }

        [Test]
        public void results_button_is_disabled()
        {
            ThePresenter.Modes[Mode.Results].CanExecute(null).ShouldBeFalse();
        }

        [Test]
        public void xml_button_is_enabled()
        {
            ThePresenter.Modes[Mode.Xml].CanExecute(null).ShouldBeTrue();
        }
    }

    [TestFixture]
    public class when_responding_to_the_test_completing : TestPresenterInteractionContext
    {
        protected override void setUp()
        {
            Services.PartialMockTheClassUnderTest();
        }

        [Test]
        public void do_nothing_if_it_is_not_the_correct_test()
        {
            ThePresenter.Expect(x => x.ChangeModeTo(Mode.Results)).Repeat.Never();

            ThePresenter.Handle(new TestRunEvent(new Test("different test"), TestState.NotQueued)
            {
                Completed = true
            });

            ThePresenter.AssertWasNotCalled(x => x.ChangeModeTo(Mode.Results));
        }

        [Test]
        public void show_results_if_the_correct_test()
        {
            ThePresenter.Expect(x => x.ChangeModeTo(Mode.Results));

            ThePresenter.Handle(new TestRunEvent(theTest, TestState.NotQueued)
            {
                Completed = true
            });

            MockFor<ITestView>().Expect(x => x.MarkNotExecuting());

            ThePresenter.AssertWasCalled(x => x.ChangeModeTo(Mode.Results));
        }


        [Test]
        public void the_available_view_states_should_be()
        {
            ThePresenter.Handle(new TestRunEvent(theTest, TestState.NotQueued)
            {
                Completed = true
            });

            ThePresenter.Modes[Mode.Edit].CanExecute(null).ShouldBeTrue();
            ThePresenter.Modes[Mode.Preview].CanExecute(null).ShouldBeTrue();
            ThePresenter.Modes[Mode.Results].CanExecute(null).ShouldBeFalse();
            ThePresenter.Modes[Mode.Xml].CanExecute(null).ShouldBeTrue();
        }
    }

    [TestFixture]
    public class when_responding_to_the_test_being_queued : TestPresenterInteractionContext
    {
        protected override void setUp()
        {
            Services.PartialMockTheClassUnderTest();
        }

        [Test]
        public void do_nothing_if_it_is_a_different_test()
        {
            ThePresenter.Handle(new TestRunEvent(new Test("some other test"), TestState.Queued));
            MockFor<ITestHeaderViewModel>().AssertWasNotCalled(x => x.Update());
        }

        [Test]
        public void update_the_view_if_it_is_the_correct_test()
        {
            ThePresenter.Handle(new TestRunEvent(theTest, TestState.Queued));
            MockFor<ITestHeaderViewModel>().AssertWasCalled(x => x.Update());
        }
    }

    [TestFixture]
    public class when_responding_to_the_test_being_cancelled : TestPresenterInteractionContext
    {
        protected override void setUp()
        {
            Services.PartialMockTheClassUnderTest();
        }

        [Test]
        public void do_nothing_if_the_test_does_not_match()
        {
            ThePresenter.Handle(new TestRunEvent(new Test("other test"), TestState.NotQueued));
            MockFor<ITestHeaderViewModel>().AssertWasNotCalled(x => x.Update());
        }



        [Test]
        public void update_the_view_if_the_test_matches()
        {
            ThePresenter.Handle(new TestRunEvent(theTest, TestState.NotQueued));
            MockFor<ITestHeaderViewModel>().AssertWasCalled(x => x.Update());
        }
    }

    [TestFixture]
    public class when_responding_to_the_TestRunEvent_for_a_different_test_than_the_test_being_edited : TestPresenterInteractionContext
    {
        protected override void setUp()
        {
            ThePresenter.Handle(new TestRunEvent(new Test("another test"), TestState.NotQueued)
            {
                Completed = true
            });
        }

        [Test]
        public void should_update_the_header()
        {
            MockFor<ITestHeaderViewModel>().AssertWasNotCalled(x => x.Update());
        }
    }

    [TestFixture]
    public class when_responding_to_the_test_being_executed : TestPresenterInteractionContext
    {
        protected override void setUp()
        {
            TheTestIsCurrentlyInTheExecutionQueue();
        }

        [Test]
        public void do_nothing_if_it_is_a_different_test()
        {
            ThePresenter.Handle(new TestRunEvent(new Test("different test"), TestState.Executing));
            MockFor<ITestView>().AssertWasNotCalled(x => x.MarkAsExecuting());
        }


        [Test]
        public void should_change_the_status_on_the_view_to_executing_if_it_is_the_correct_test()
        {
            ThePresenter.Handle(new TestRunEvent(theTest, TestState.Executing));
            MockFor<ITestView>().AssertWasCalled(x => x.MarkAsExecuting());
        }
    }

    [TestFixture]
    public class when_responding_to_test_update_event : TestPresenterInteractionContext
    {
        private TestMode mode;

        protected override void setUp()
        {
            mode = MockRepository.GenerateMock<TestMode>(Mode.Preview);
            ClassUnderTest.SetMode(mode);

            ClassUnderTest.Update(null);
        }

        [Test]
        public void should_refresh_the_current_mode()
        {
            mode.AssertWasCalled(x => x.Refresh());
        }
    }

    public abstract class TestPresenterInteractionContext : InteractionContext<TestPresenter>
    {
        public Test theTest;

        public TestPresenter ThePresenter { get { return ClassUnderTest; } }

        protected override void beforeEach()
        {
            theTest = new Test("some test");
            theTest.LastResult = new TestResult()
            {
                Html = "<html />"
            };
            Services.Inject(theTest);

            Services.Container.Configure(x =>
            {
                x.For<TestMode>().AddInstances(o =>
                {
                    o.Type<XmlMode>();
                    o.Type<PreviewMode>();
                    o.Type<EditMode>();
                    o.Type<ResultsMode>();
                });
            });

            Services.Container.GetAllInstances<TestMode>().Count.ShouldEqual(4);

            setUp();
        }

        protected virtual void setUp()
        {
        }

        public void TheTestIsNotInTheExecutionQueue()
        {
            MockFor<ITestService>().Expect(x => x.GetStatus(theTest)).Return(TestState.NotQueued);
        }

        public void TheTestIsCurrentlyInTheExecutionQueue()
        {
            MockFor<ITestService>().Expect(x => x.GetStatus(theTest)).Return(TestState.Queued).Repeat.Any();
        }

        public void ThereIsNoPreviousResultForTheTest()
        {
            theTest.LastResult = null;
        }

        public void ThereIsAPreviousResultForTheTest()
        {
            theTest.LastResult = new TestResult();
        }
    }
}