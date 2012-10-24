using System.Windows.Controls;

namespace StoryTeller.UserInterface.Commands
{
    public class ActionMenuItem : MenuItem
    {
        private readonly IContextualAction _action;

        //TODO -- make this be ICommand for the enabled
        public ActionMenuItem(IContextualAction action)
        {
            _action = action;

            Header = action.Description;
            this.SetIcon(action.Icon);

            Click += (s, e) => _action.Execute();
        }

        public IContextualAction Action { get { return _action; } }

        public void Update()
        {
            IsEnabled = _action.Enabled;
        }
    }
}