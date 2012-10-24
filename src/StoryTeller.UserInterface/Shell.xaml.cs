using System;
using System.Collections.Generic;
using System.Windows;
using System.Windows.Controls;
using StoryTeller.UserInterface.Controls;
using StoryTeller.UserInterface.Exploring;
using StoryTeller.UserInterface.Projects;
using StoryTeller.UserInterface.Screens;
using StoryTeller.UserInterface.Workspace;
using StructureMap.Configuration.DSL;

namespace StoryTeller.UserInterface
{
    /// <summary>
    /// Interaction logic for Shell.xaml
    /// </summary>
    public partial class Shell : UserControl, IApplicationShell
    {
        public Shell()
        {
            InitializeComponent();

            runAll.Click += (x, y) => filterBar.RunAll();
        }

        private IEnumerable<UIElement> editables
        {
            get
            {
                return new UIElement[] { topBar, testTree, fixtureTree, mainTabs };
            }
        }

        public TreeNode HierarchyNode { get { return (TreeNode)testTree.Items[0]; } }

        #region IApplicationShell Members

        void IApplicationShell.LockAsBusy()
        {
            IsEnabled = false;
        }

        void IApplicationShell.Unlock()
        {
            IsEnabled = true;
            editables.Each(x => x.IsEnabled = true);
        }

        public void PlaceInExplorerPane(object view, string text)
        {
            var item = new TabItem
            {
                Header = text,
                Content = view
            };

            explorerTabs.Items.Add(item);
            explorerTabs.SelectedItem = item;
        }

        public void RemoveFromExplorerPane(object view)
        {
            TabItem item = findExplorerItem(view);
            explorerTabs.Items.Remove(item);

            item.Content = null;

            ShowTestExplorerTree();
        }

        public void ShowTestExplorerTree()
        {
            explorerTabs.SelectedIndex = 0;
        }

        public void LockAsInvalidBinaryState()
        {
            IsEnabled = true;
            editables.Each(x => x.IsEnabled = false);
        }

        #endregion

        private TabItem findExplorerItem(object view)
        {
            foreach (TabItem item in explorerTabs.Items)
            {
                if (item.Content == view)
                {
                    return item;
                }
            }

            return null;
        }

        public void Register(Registry registry)
        {
            registry.For<Shell>().Use(this);
            registry.For<IApplicationShell>().Use(this);
            registry.For<TabControl>().Use(mainTabs);
            registry.For<IStatusView>().Use(statusBar);
            registry.For<ITestFilterBar>().Use(filterBar);
            registry.For<ICommandBar>().Use(commandBar);
            registry.For<IOptionsMenu>().Use(options);
            registry.For<TestStopConditionsView>().Use(settings.TestStopConditionsView);
            registry.For<IProjectExplorerView>().Use(settings);

            registry.For<TreeView>().AddInstances(x =>
            {
                x.Object(testTree).Named("tests");
                x.Object(fixtureTree).Named("fixtures");
            });
        }

        public event MessageRequestHandler MessageSent
        {
            add { this.AddHandler(MessageRequestArgs.SendMessageEvent, value); }
            remove { this.RemoveHandler(MessageRequestArgs.SendMessageEvent, value); }
        }
    }

}