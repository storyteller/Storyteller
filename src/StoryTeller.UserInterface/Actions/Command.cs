using System;
using System.Threading;
using System.Windows.Input;
using StructureMap;

namespace StoryTeller.UserInterface.Actions
{
    public class Command<T> : ICommand
    {
        private readonly Action<T> _action;
        private readonly IContainer _container;

        public Command(IContainer container, Action<T> action)
        {
            _container = container;
            _action = action;
        }

        #region ICommand Members

        public void Execute(object parameter)
        {
            var target = _container.GetInstance<T>();
            _action(target);
        }

        public bool CanExecute(object parameter)
        {
            return true;
        }

        public event EventHandler CanExecuteChanged;

        #endregion
    }

    public class CommandExecutor
    {
        private readonly SynchronizationContext _context;

        public CommandExecutor(SynchronizationContext context)
        {
            _context = context;
        }

        public void ExecuteAsynch(Func<Action> func)
        {
            ThreadPool.QueueUserWorkItem(o =>
            {
                var callback = func();
                _context.Send(x => callback(), null);
            });
        }
    }
}