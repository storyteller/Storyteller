namespace StoryTeller.UserInterface.Exploring
{
    public interface IExplorerView
    {
        void ApplyProjectNode(TreeNode node);
        void ApplyFixtureNode(TreeNode node);
    }
}