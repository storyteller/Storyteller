using System;
using System.Collections.Generic;
using System.Linq;
using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Domain;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Actions;
using StoryTeller.UserInterface.Queue;
using StoryTeller.UserInterface.Screens;
using StoryTeller.UserInterface.Testing.UI.Screens;

namespace StoryTeller.UserInterface.Testing.UI
{
    [TestFixture]
    public class when_closing_all_screens : InteractionContext<ScreenConductor>
    {
        private List<IScreen> screens;

        protected override void beforeEach()
        {
            screens = new List<IScreen>
            {
                new StubScreen(),
                new StubScreen(),
                new StubScreen(),
                new StubScreen()
            };

            MockFor<IScreenCollection>().Expect(x => x.AllScreens).Return(screens);

            ClassUnderTest.CloseAll();
        }


        [Test]
        public void should_have_closed_all_screens()
        {
            screens.ForEach(s =>
            {
                MockFor<IEventAggregator>().AssertWasCalled(x => x.RemoveListener(s));
                MockFor<IScreenCollection>().AssertWasCalled(x => x.Remove(s));
            });
        }
    }

    [TestFixture]
    public class when_closing_all_screens_but_this_one : InteractionContext<ScreenConductor>
    {
        private List<IScreen> screens;
        private StubScreen screen1;
        private StubScreen screen2;
        private StubScreen screen3;
        private StubScreen screen4;

        protected override void beforeEach()
        {
            screen1 = new StubScreen();
            screen2 = new StubScreen();
            screen3 = new StubScreen();
            screen4 = new StubScreen();
            screens = new List<IScreen>
            {
                screen1,
                screen2,
                screen3,
                screen4
            };

            MockFor<IScreenCollection>().Expect(x => x.AllScreens).Return(screens);

            ClassUnderTest.CloseAllBut(screen3);
        }

        [Test]
        public void does_not_close_the_screen_in_question()
        {
            MockFor<IScreenCollection>().AssertWasNotCalled(x => x.Remove(screen3));
        }

        [Test]
        public void removes_all_other_screens()
        {
            var screens = MockFor<IScreenCollection>();

            screens.AssertWasCalled(x => x.Remove(screen1));
            screens.AssertWasCalled(x => x.Remove(screen2));
            screens.AssertWasCalled(x => x.Remove(screen4));
        }
    }


    [TestFixture]
    public class when_trying_to_close_a_screen_that_cannot_be_closed : InteractionContext<ScreenConductor>
    {
        private IScreen theScreen;

        protected override void beforeEach()
        {
            theScreen = MockRepository.GenerateMock<IScreen>();
            theScreen.Expect(x => x.CanClose()).Return(false);

            ClassUnderTest.Close(theScreen);
        }

        [Test]
        public void the_screen_was_not_removed()
        {
            MockFor<IScreenCollection>().AssertWasNotCalled(x => x.Remove(theScreen));
        }

        [Test]
        public void the_screen_was_not_removed_from_the_event_aggregator()
        {
            MockFor<IEventAggregator>().AssertWasNotCalled(x => x.RemoveListener(theScreen));
        }
    }

    [TestFixture]
    public class when_closing_a_screen_that_is_not_already_active : InteractionContext<ScreenConductor>
    {
        private IScreen theScreen;

        protected override void beforeEach()
        {
            theScreen = MockRepository.GenerateMock<IScreen>();
            theScreen.Expect(x => x.CanClose()).Return(true);

            var anotherScreen = MockRepository.GenerateMock<IScreen>();
            MockFor<IScreenCollection>().Expect(x => x.Active).Return(anotherScreen);


            ClassUnderTest.Close(theScreen);
        }


        [Test]
        public void the_screen_was_removed_from_the_event_aggregator()
        {
            MockFor<IEventAggregator>().AssertWasCalled(x => x.RemoveListener(theScreen));
        }

        [Test]
        public void the_screen_was_removed_from_the_tabs()
        {
            MockFor<IScreenCollection>().AssertWasCalled(x => x.Remove(theScreen));
        }
    }


    [TestFixture]
    public class when_opening_a_screen_to_a_subject : InteractionContext<ScreenConductor>
    {
        protected override void beforeEach()
        {
            Services.PartialMockTheClassUnderTest();
        }

        [Test]
        public void should_call_to_screen_builder_to_get_the_screen_subject_and_use_that_to_open_the_screen()
        {
            var screenSubject = MockRepository.GenerateMock<IScreenLocator>();
            var subject = new Test("some test");

            MockFor<IScreenObjectLocator>().Expect(x => x.BuildSubject(subject)).Return(screenSubject);
            ClassUnderTest.Expect(x => x.OpenScreen(screenSubject));

            ClassUnderTest.OpenScreen(subject);

            ClassUnderTest.AssertWasCalled(x => x.OpenScreen(screenSubject));

            MockFor<IScreenObjectLocator>().VerifyAllExpectations();
        }

        [Test]
        public void
            should_call_to_screen_builder_to_get_the_screen_subject_and_use_that_to_open_the_screen_when_handling_the_open_item_message
            ()
        {
            var screenSubject = MockRepository.GenerateMock<IScreenLocator>();
            var subject = new Test("some test");

            MockFor<IScreenObjectLocator>().Expect(x => x.BuildSubject(subject)).Return(screenSubject);
            ClassUnderTest.Expect(x => x.OpenScreen(screenSubject));

            ClassUnderTest.HandleMessage(new OpenItemMessage(subject));

            ClassUnderTest.AssertWasCalled(x => x.OpenScreen(screenSubject));

            MockFor<IScreenObjectLocator>().VerifyAllExpectations();
        }
    }

    [TestFixture]
    public class when_opening_a_screen_to_a_subject_type : InteractionContext<ScreenConductor>
    {
        protected override void beforeEach()
        {
            Services.PartialMockTheClassUnderTest();
        }

        [Test]
        public void should_call_to_screen_builder_to_get_the_screen_subject_and_use_that_to_open_the_screen()
        {
            var screenSubject = new QueueSubject();

            MockFor<IScreenObjectLocator>().Expect(x => x.BuildSubject<QueueSubject>()).Return(screenSubject);
            ClassUnderTest.Expect(x => x.OpenScreen(screenSubject));

            ClassUnderTest.OpenScreen<QueueSubject>();

            ClassUnderTest.AssertWasCalled(x => x.OpenScreen(screenSubject));

            MockFor<IScreenObjectLocator>().VerifyAllExpectations();
        }
    }




    [TestFixture]
    public class when_opening_up_a_screen_and_there_are_no_open_screens : ScreenManagementContext
    {
        private IScreenLocator _locator;
        private IScreen newScreen;
        private IScreenFactory factory;

        protected override void setup()
        {
            Screens.Active.ShouldBeNull();
            _locator = MockRepository.GenerateMock<IScreenLocator>();
            newScreen = MockRepository.GenerateMock<IScreen>();

            factory = MockFor<IScreenFactory>();

            _locator.Expect(x => x.CreateScreen(factory)).Return(newScreen);

            TheScreenConductor.OpenScreen(_locator);
        }

        [Test]
        public void build_the_new_screen_from_the_subject()
        {
            _locator.VerifyAllExpectations();
        }

        [Test]
        public void calls_activate_on_the_new_screen()
        {
            MockFor<IShellService>().AssertWasCalled(x => x.ActivateScreen(newScreen));
        }

        [Test]
        public void show_and_add_the_new_screen_to_the_screen_collection()
        {
            Screens.Active.ShouldBeTheSameAs(newScreen);
            Screens.Screens.Contains(newScreen).ShouldBeTrue();
        }
    }

    [TestFixture]
    public class when_opening_a_screen_that_is_already_active : ScreenManagementContext
    {
        private IScreenLocator _locator;
        private IScreen theScreen;
        private IScreenFactory factory;

        protected override void setup()
        {
            _locator = MockRepository.GenerateMock<IScreenLocator>();
            theScreen = MockRepository.GenerateMock<IScreen>();

            Screens.Active = theScreen;
            _locator.Expect(x => x.Matches(theScreen)).Return(true);

            factory = MockRepository.GenerateMock<IScreenFactory>();

            TheScreenConductor.OpenScreen(_locator);
        }

        [Test]
        public void should_not_change_the_active_screen()
        {
            Screens.Active.ShouldBeTheSameAs(theScreen);
        }

        [Test]
        public void should_not_create_a_new_screen()
        {
            _locator.AssertWasNotCalled(x => x.CreateScreen(factory));
        }
    }

    [TestFixture]
    public class when_opening_a_screen_that_does_not_match_any_active_screens : ScreenManagementContext
    {
        private IScreenLocator _locator;
        private IScreen otherActiveScreen1;
        private IScreen otherActiveScreen2;
        private IScreen theActiveScreen;
        private IScreen newScreen;
        private IScreenFactory factory;

        protected override void setup()
        {
            _locator = MockRepository.GenerateMock<IScreenLocator>();

            // Let's say we have a ScreenCollection with open screens
            otherActiveScreen1 = MockRepository.GenerateMock<IScreen>();
            otherActiveScreen2 = MockRepository.GenerateMock<IScreen>();
            theActiveScreen = MockRepository.GenerateMock<IScreen>();

            Screens.Active = theActiveScreen;
            Screens.Add(otherActiveScreen1);
            Screens.Add(otherActiveScreen2);
            Screens.Add(theActiveScreen);

            // and the requested ScreenSubject does not match any of the screens
            _locator.Expect(x => x.Matches(otherActiveScreen1)).Return(false);
            _locator.Expect(x => x.Matches(otherActiveScreen2)).Return(false);
            _locator.Expect(x => x.Matches(theActiveScreen)).Return(false);

            factory = MockFor<IScreenFactory>();

            newScreen = MockRepository.GenerateMock<IScreen>();
            _locator.Expect(x => x.CreateScreen(factory)).Return(newScreen);


            TheScreenConductor.OpenScreen(_locator);
        }

        [Test]
        public void activates_the_new_screen()
        {
            MockFor<IShellService>().AssertWasCalled(x => x.ActivateScreen(newScreen));
        }

        [Test]
        public void should_try_to_match_the_subject_against_all_the_screens()
        {
            _locator.VerifyAllExpectations();
        }

        [Test]
        public void show_and_add_the_new_screen_to_the_screen_collection()
        {
            Screens.Active.ShouldBeTheSameAs(newScreen);
            Screens.Screens.Contains(newScreen).ShouldBeTrue();
        }
    }

    [TestFixture]
    public class when_opening_a_screen_that_is_already_in_the_tab_control_but_not_active : ScreenManagementContext
    {
        private IScreenLocator _locator;
        private IScreen otherScreen;
        private IScreen theScreenThatMatchesTheSubject;
        private IScreen theActiveScreen;

        protected override void setup()
        {
            _locator = MockRepository.GenerateMock<IScreenLocator>();

            // Let's say we have a ScreenCollection with open screens
            otherScreen = MockRepository.GenerateMock<IScreen>();
            theScreenThatMatchesTheSubject = MockRepository.GenerateMock<IScreen>();
            theActiveScreen = MockRepository.GenerateMock<IScreen>();

            Screens.Active = theActiveScreen;
            Screens.Add(otherScreen);
            Screens.Add(theScreenThatMatchesTheSubject);
            Screens.Add(theActiveScreen);

            // and the requested ScreenSubject does not match any of the screens
            _locator.Expect(x => x.Matches(otherScreen)).Return(false);
            _locator.Expect(x => x.Matches(theScreenThatMatchesTheSubject)).Return(true);
            _locator.Expect(x => x.Matches(theActiveScreen)).Return(false);


            TheScreenConductor.OpenScreen(_locator);
        }

        [Test]
        public void activates_the_new_screen()
        {
            MockFor<IShellService>().AssertWasCalled(x => x.ActivateScreen(theScreenThatMatchesTheSubject));
        }

        [Test]
        public void show_and_add_the_new_screen_to_the_screen_collection()
        {
            Screens.Active.ShouldBeTheSameAs(theScreenThatMatchesTheSubject);
        }
    }


    public abstract class ScreenManagementContext : InteractionContext<ScreenConductor>
    {
        private StubScreenCollection _screens;

        public StubScreenCollection Screens { get { return _screens; } }

        public ScreenConductor TheScreenConductor { get { return ClassUnderTest; } }

        protected override sealed void beforeEach()
        {
            _screens = new StubScreenCollection();
            Services.Inject<IScreenCollection>(_screens);
            setup();
        }

        protected abstract void setup();
    }

    public interface IHierarchySource
    {
        Hierarchy Get();
    }

    public class StubScreenCollection : IScreenCollection
    {
        private readonly List<IScreen> _screens = new List<IScreen>();

        public IEnumerable<IScreen> Screens { get { return _screens; } }

        public IScreen ShownScreen { get { throw new NotImplementedException(); } }

        #region IScreenCollection Members

        public void ClearAll()
        {
            throw new NotImplementedException();
        }

        public IScreen Active { get; set; }

        public void Show(IScreen screen)
        {
            Active = screen;
        }

        public void Add(IScreen screen)
        {
            _screens.Add(screen);
        }

        public void Remove(IScreen screen)
        {
            throw new NotImplementedException();
        }

        public void RefreshScreenHeaders()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<IScreen> AllScreens { get { return _screens; } }

        public void Start()
        {
        }

        #endregion

        public void Close(IScreen screen)
        {
            throw new NotImplementedException();
        }

        public void CloseAllBut(IScreen screen)
        {
            throw new NotImplementedException();
        }

        public void CloseAll(IScreen screen)
        {
            throw new NotImplementedException();
        }
    }
}