using StoryTeller.UserInterface.Controls;
using StoryTeller.UserInterface.Screens;

namespace StoryTeller.UserInterface.Actions
{
    public interface IShellService : IStartable
    {
        void ClearTransient();
        void ActivateScreen(IScreen screen);
    }

    public class ShellService : IShellService
    {
        private readonly ICommandBar _commands;
        private readonly IOptionsMenu _options;
        private readonly IScreenObjectRegistry _registry;

        public ShellService(IScreenObjectRegistry registry, ICommandBar commands, IOptionsMenu options)
        {
            _registry = registry;
            _commands = commands;
            _options = options;
        }

        #region IShellService Members

        public void ActivateScreen(IScreen screen)
        {
            _registry.ClearTransient();
            screen.Activate(_registry);
            refill();
        }


        public void ClearTransient()
        {
            _registry.ClearTransient();
            refill();
        }

        public void Start()
        {
            refill();
        }

        #endregion

        private void refill()
        {
            _commands.Refill(_registry.Actions);
            _options.Refill(_registry.Actions);
        }
    }
}