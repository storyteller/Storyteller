using StoryTeller.Execution;
using StoryTeller.Workspace;

namespace StoryTeller.UserInterface.Handlers
{
    public class ShellPresenter : IHandler
                                  , IListener<ProjectLoaded>
    {
        private readonly IApplicationShell _shell;

        public ShellPresenter(IApplicationShell shell)
        {
            _shell = shell;
        }


        #region IListener<ProjectLoaded> Members

        public void Handle(ProjectLoaded message)
        {
            _shell.ShowTestExplorerTree();
        }

        #endregion

        public void Start()
        {
        }
    }
}