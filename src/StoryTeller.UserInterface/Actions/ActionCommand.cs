using System;
using System.Windows.Input;

namespace StoryTeller.UserInterface.Actions
{
    public class ActionCommand : ICommand
    {
        private readonly Action _action;
        private bool _canExecute = true;

        public ActionCommand(Action action)
        {
            _action = action;
        }

        public bool Enabled
        {
            set
            {
                _canExecute = value;
                if (CanExecuteChanged != null) CanExecuteChanged(this, new EventArgs());
            }
            get
            {
                return _canExecute;
            }
        }

        #region ICommand Members

        public void Execute(object parameter)
        {
            _action();
        }

        public virtual bool CanExecute(object parameter)
        {
            return _canExecute;
        }

        public event EventHandler CanExecuteChanged;

        #endregion
    }

    public class LatchedActionCommand : ActionCommand
    {
        private readonly Func<bool> _canExecute;

        public LatchedActionCommand(Action action, Func<bool> canExecute)
            : base(action)
        {
            _canExecute = canExecute;
        }

        public override bool CanExecute(object parameter)
        {
            return _canExecute() && base.CanExecute(parameter);
        }
    }
}