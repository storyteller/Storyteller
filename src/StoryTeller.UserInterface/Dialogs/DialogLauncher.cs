using System;
using System.Windows.Controls;
using StructureMap;
using FubuCore;

namespace StoryTeller.UserInterface.Dialogs
{
    public class DialogLauncher : IDialogLauncher
    {
        private readonly IContainer _container;

        public DialogLauncher(IContainer container)
        {
            _container = container;
        }

        #region IDialogLauncher Members

        public void LaunchForCommand<TCommand>(TCommand command)
        {
            Dialog dialog = BuildDialog(command);

            dialog.ShowDialog();
        }



        public void LaunchForCommand<TCommand>()
        {
            var command = _container.GetInstance<TCommand>();
            LaunchForCommand(command);
        }

        public void LaunchDialog(ICommandDialog dialog)
        {
            var d = _container.With(dialog).GetInstance<Dialog>();
            d.ShowDialog();
        }



        #endregion

        public Dialog BuildDialog<TCommand>(TCommand command)
        {
            var control = _container.With(command).GetInstance<ICommandDialog<TCommand>>();

            return _container.With<ICommandDialog>(control).GetInstance<Dialog>();
        }
    }
}