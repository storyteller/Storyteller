using System.Collections;
using System.Collections.Generic;
using System.Windows.Controls;
using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Screens;

namespace StoryTeller.UserInterface.Testing.UI.Screens
{
    [TestFixture]
    public class ScreenCollectionTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            screen1 = new StubScreen();
            screen2 = new StubScreen();
            screen3 = new StubScreen();
            screen4 = new StubScreen();

            events = MockRepository.GenerateMock<IEventAggregator>();
            tabs = new TabControl();
            screens = new ScreenCollection(tabs, events);
        }

        #endregion

        private StubScreen screen1;
        private StubScreen screen2;
        private StubScreen screen3;
        private StubScreen screen4;
        private TabControl tabs;
        private ScreenCollection screens;
        private IEventAggregator events;

        [Test]
        public void adding_a_screen_adds_a_storyteller_tab_item_with_that_screen()
        {
            screens.Add(screen1);

            tabs.Items[0].Screen().ShouldBeTheSameAs(screen1);
        }

        [Test]
        public void can_iterate_through_the_screens()
        {
            screens.Add(screen1);
            screens.Add(screen2);
            screens.Add(screen3);
            screens.Add(screen4);

            var listOfScreens = new List<IScreen>(screens.AllScreens);

            IList expected = new List<IScreen>
            {
                screen1,
                screen2,
                screen3,
                screen4
            };
            listOfScreens.ShouldHaveTheSameElementsAs(expected);
        }

        [Test]
        public void clear_all_removes_all_tabs()
        {
            screens.Add(screen1);
            screens.Add(screen2);
            screens.Add(screen3);
            screens.Add(screen4);

            screens.ClearAll();

            tabs.Items.Count.ShouldEqual(0);
        }

        [Test]
        public void show_makes_a_screen_active()
        {
            screens.Add(screen1);
            screens.Add(screen2);
            screens.Add(screen3);
            screens.Add(screen4);

            screens.Show(screen3);

            screens.Active.ShouldBeTheSameAs(screen3);
            tabs.SelectedItem.Screen().ShouldBeTheSameAs(screen3);
        }
    }


    public static class ScreenCollectionExtensionsForTest
    {
        public static IScreen Screen(this object something)
        {
            return something.ShouldBeOfType<TabItem>().Tag.ShouldBeOfType<IScreen>();
        }

        public static void ShouldHaveScreens(this ScreenCollection collection, params IScreen[] screens)
        {
            collection.AllScreens.ShouldHaveTheSameElementsAs(screens);
        }
    }
}