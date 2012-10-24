using System.Windows.Input;
using StoryTeller.UserInterface.Actions;
using StoryTeller.UserInterface.Queue;
using StoryTeller.UserInterface.Workspace;
using StoryTeller.Workspace;

namespace StoryTeller.UserInterface
{
    public class SystemActions
    {
        #region syntax

        private readonly IScreenObjectRegistry _screenObjects;

        public SystemActions(IScreenObjectRegistry screenObjects)
        {
            _screenObjects = screenObjects;
        }

        private IActionExpression Action(string name)
        {
            return _screenObjects.PermanentAction(name);
        }

        #endregion

        public void Register()
        {
            Action("Recycle Binaries")
                .Bind(Key.F5)
                .PublishEvent<ForceBinaryRecycle>();


            Action("Recycle Environment")
                .Bind(ModifierKeys.Shift, Key.F5)
                .PublishEvent<ForceEnvironmentRecycle>();

            // Open the "Test Queue" screen with the 
            // CTRL - Q shortcut
            Action("Open the Test Queue")
                .Bind(ModifierKeys.Control, Key.Q)
                .ToScreen<QueuePresenter>();

            Action("Reload Tests from Disk").Bind(Key.F6).PublishEvent<ReloadTestsMessage>();
            Action("Reset Test Results").Bind(Key.F7).PublishEvent<ClearResultsMessage>();

            Action("Load Last Results").Bind(Key.F8).PublishEvent<LoadPreviousResults>();
        }
    }
}