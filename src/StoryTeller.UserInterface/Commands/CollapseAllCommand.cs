using StoryTeller.UserInterface.Exploring;

namespace StoryTeller.UserInterface.Commands
{
    public class CollapseAllCommand : ContextualAction<TreeNode>
    {
        public CollapseAllCommand(TreeNode subject)
            : base(subject, Icon.Collapse, "Collapse All")
        {
        }

        public override bool Enabled { get { return true; } }

        public override void Execute()
        {
            subject.CollapseAll();
        }
    }

    public class ExpandAllCommand : ContextualAction<TreeNode>
    {
        public ExpandAllCommand(TreeNode subject)
            : base(subject, Icon.Expand, "Expand All")
        {
        }

        public override bool Enabled { get { return true; } }

        public override void Execute()
        {
            subject.ExpandAll();
        }
    }
}