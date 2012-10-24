using System.Collections.Generic;
using StoryTeller.Domain;
using StoryTeller.Execution;
using StoryTeller.Model;
using StructureMap;

namespace StoryTeller.UserInterface.Exploring
{
    public class FixtureExplorer : IListener<BinaryRecycleFinished>, IStartable
    {
        private readonly IContainer _container;
        private readonly IExplorerView _view;

        public FixtureExplorer(IExplorerView view, IContainer container)
        {
            _view = view;
            _container = container;
        }

        #region IListener<BinaryRecycleFinished> Members

        public void Handle(BinaryRecycleFinished message)
        {
            TreeNode node = BuildTree(message.Library);
            _view.ApplyFixtureNode(node);

            _container.Inject(message.Library);
        }

        #endregion

        #region IStartable Members

        public void Start()
        {
            // no-op
        }

        #endregion

        public static TreeNode BuildTree(FixtureLibrary library)
        {
            var top = new TreeNode(library);

            library.ActiveFixtures.Each(fixtureGraph =>
            {
                var node = new TreeNode(fixtureGraph);
                top.Add(node);

                fixtureGraph.PossibleGrammarsFor(new StepLeaf()).Each(grammar =>
                {
                    var grammarNode = new TreeNode(grammar);
                    node.Add(grammarNode);
                });
            });

            return top;
        }
    }
}