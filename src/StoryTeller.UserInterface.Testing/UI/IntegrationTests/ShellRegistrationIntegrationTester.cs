using System.Windows.Controls;
using NUnit.Framework;
using StoryTeller.Testing;
using StoryTeller.UserInterface.Controls;
using StoryTeller.UserInterface.Exploring;
using StructureMap;
using StructureMap.Configuration.DSL;

namespace StoryTeller.UserInterface.Testing.UI.IntegrationTests
{
    [TestFixture]
    public class ShellRegistrationIntegrationTester
    {
        #region Setup/Teardown

        [SetUp]
        public void SetUp()
        {
            var registry = new Registry();
            shell = new Shell();
            shell.Register(registry);

            container = new Container(registry);
        }

        #endregion

        private Container container;
        private Shell shell;

        [Test]
        public void can_get_the_options_menu()
        {
            ObjectFactory.GetInstance<IOptionsMenu>().ShouldBeOfType<OptionsMenu>();
        }

        [Test]
        public void get_the_explorer_view_with_both_tree_views()
        {
            var view = ObjectFactory.GetInstance<IExplorerView>().ShouldBeOfType<ExplorerView>();
            view.TestTree.ShouldNotBeNull();
            view.FixtureTree.ShouldNotBeNull();
        }

        [Test]
        public void shell_is_registered()
        {
            container.GetInstance<IApplicationShell>().ShouldBeTheSameAs(shell);
        }

        [Test]
        public void tab_control_is_registered()
        {
            container.GetInstance<TabControl>().ShouldNotBeNull();
        }

        [Test]
        public void two_tree_views_should_be_registered()
        {
            container.GetAllInstances<TreeView>().Count.ShouldEqual(2);
        }
    }
}