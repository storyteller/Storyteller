using System.Collections.Generic;
using System.Linq;
using System.Windows.Controls;
using System.Windows.Input;
using StoryTeller.Domain;
using StoryTeller.UserInterface.Commands;

namespace StoryTeller.UserInterface.Exploring
{
    public class ExplorerView : IExplorerView
    {
        private readonly IScreenConductor _conductor;
        private readonly TreeView _fixtureTree;
        private readonly IScreenObjectLocator _screenObjects;
        private readonly TreeView _testTree;
        private bool _latched;

        public ExplorerView(TreeView testTree, TreeView fixtureTree, IScreenConductor conductor,
                            IScreenObjectLocator screenObjects)
        {
            _testTree = testTree;
            _fixtureTree = fixtureTree;
            _conductor = conductor;
            _screenObjects = screenObjects;

            _testTree.MouseDoubleClick += unLatch;
        }



        public TreeView TestTree { get { return _testTree; } }

        public TreeView FixtureTree { get { return _fixtureTree; } }

        #region IExplorerView Members

        public void ApplyProjectNode(TreeNode node)
        {
            activateNode(node, _testTree);
        }

        public void ApplyFixtureNode(TreeNode node)
        {
            activateNode(node, _fixtureTree);
        }

        #endregion

        private void unLatch(object sender, MouseButtonEventArgs e)
        {
            _latched = false;
        }

        public void Start()
        {
        }

        private void activateNode(TreeNode node, TreeView tree)
        {
            tree.Items.Clear();
            node.IsExpanded = true;

            node.BuildItems = n => BuildMenuItems(n);

            tree.Items.Add(node);
        }

        public IList<ActionMenuItem> BuildMenuItems(TreeNode node)
        {
            var list = new List<ActionMenuItem>();

            IEnumerable<ActionMenuItem> nodeItems = _screenObjects.BuildActions(node).Select(x => new ActionMenuItem(x));
            IEnumerable<ActionMenuItem> subjectItems =
                _screenObjects.BuildActions(node.Subject).Select(x => new ActionMenuItem(x));

            list.AddRange(nodeItems);
            list.AddRange(subjectItems);

            return list;
        }

        public void RunNode(TreeNode node)
        {
            IContextualAction action = null;
            //Something smells.  I can't quite make out what it is.  Oh wait, it's this LSP violation.
            if (node.Subject is Suite)
            {
                action = _screenObjects.CommandForSubject<RunSuiteCommand, Suite>(node.Subject);
            }
            else
            {
                action = _screenObjects.CommandForSubject<RunTestCommand, Test>(node.Subject);
            }
            if(action != null)
            {
                action.Execute();
            }               
        }

        public void SelectNode(TreeNode node)
        {
            if (_latched)
            {
                if (ReferenceEquals(node, node.Top()))
                {
                    _latched = false;
                }

                return;
            }

            // TODO -- harden this
            _conductor.OpenScreen(node.Subject);
            _latched = true;
        }
    }
}