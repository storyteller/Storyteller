using System;
using System.Windows.Controls;
using NUnit.Framework;
using Rhino.Mocks;
using StoryTeller.Execution;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Actions;
using StoryTeller.UserInterface.Screens;

namespace StoryTeller.UserInterface.Testing.UI.Screens
{
    [TestFixture]
    public class Tab_within_screen_collection_tests
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            screen = new StubScreen();
            collection = MockRepository.GenerateMock<IScreenCollection>();
            tab = new StoryTellerTabItem(screen, new NulloEventAggregator()).Item;
        }

        #endregion

        private StubScreen screen;
        private TabItem tab;
        private IScreenCollection collection;

        [Test]
        public void the_context_menu_commands_should_have_the_close()
        {
            tab.ContextMenu.GetMenus().ShouldHaveTheSameElementsAs(new[] {"Close", "Close All But This", "Close All"});
        }

        [Test]
        public void the_tag_is_the_screen()
        {
            tab.Tag.ShouldBeTheSameAs(screen);
        }

        [Test]
        public void the_title_of_the_screen_is_in_the_tab_header()
        {
            SpecificationExtensions.As<StackPanel>(tab.Header).Children[0].ShouldBeOfType<Label>().Content.ShouldEqual(screen.Title);
        }

        [Test]
        public void the_view_is_added_to_the_content_panel_of_the_tab_item()
        {
            SpecificationExtensions.As<DockPanel>(tab.Content).Children[0].ShouldBeTheSameAs(screen.View);
        }
    }

    public class StubScreen : IScreen
    {
        private readonly View _view = new View();

        #region IScreen Members

        public object View { get { return _view; } }

        public string Title { get { return "Title of the Screen"; } }

        public void Activate(IScreenObjectRegistry screenObjects)
        {
            throw new NotImplementedException();
        }


        public bool CanClose()
        {
            return true;
        }

        public void Dispose()
        {
        }

        #endregion
    }

    public class View : UserControl
    {
    }
}