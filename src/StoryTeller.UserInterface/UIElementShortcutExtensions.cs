using System;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;
using StoryTeller.UserInterface.Actions;
using StoryTeller.UserInterface.Controls;

namespace StoryTeller.UserInterface
{
    public static class ControlShortcutExtensions
    {
        public static TreeViewItemBindingExpression Bind(this Control item, ModifierKeys modifiers, Key key)
        {
            return new TreeViewItemBindingExpression(item, new KeyGesture(key, modifiers));    
        }

        public static TreeViewItemBindingExpression Bind(this Control item, ModifierKeys modifiers, MouseAction action)
        {
            return new TreeViewItemBindingExpression(item, new MouseGesture(action, modifiers));
        }

        public static TreeViewItemBindingExpression Bind(this Control item, Key key)
        {
            return new TreeViewItemBindingExpression(item, new KeyGesture(key));
        }

        public static TreeViewItemBindingExpression Bind(this Control item, MouseAction action)
        {
            return new TreeViewItemBindingExpression(item, new MouseGesture(action));
        }

        public static TreeViewItemBindingExpression BindControlAnd(this Control item, Key key)
        {
            return item.Bind(ModifierKeys.Control, key);
        }

        public static TreeViewItemBindingExpression BindControlAnd(this Control item, MouseAction action)
        {
            return item.Bind(ModifierKeys.Control, action);
        }
    }

    public interface IContextMenuBinding
    {
        void Menu(string text, Icon icon);
    }

    public class TreeViewItemBindingExpression : IContextMenuBinding
    {
        private readonly Control _item;
        private InputGesture _gesture;
        private ICommand _command;

        public TreeViewItemBindingExpression(Control item, InputGesture gesture)
        {
            _item = item;
            _gesture = gesture;
        }

        public IContextMenuBinding To(Action action)
        {
            return To(new ActionCommand(action));
        }

        public IContextMenuBinding To(ICommand command)
        {
            _command = command;
            var binding = new InputBinding(command, _gesture);
            _item.InputBindings.Add(binding);

            return this;
        }

        public IContextMenuBinding ToMessage<T>(T message)
        {
            return To(() =>
            {
                var args = new MessageRequestArgs(events => events.SendMessage(message));
                _item.RaiseEvent(args);
            });
        }

        public IContextMenuBinding ToMessage<T>(Func<T> toMessage)
        {
            return To(() =>
            {
                var args = new MessageRequestArgs(events => events.SendMessage(toMessage()));
                _item.RaiseEvent(args);
            });
        }

        public void Menu(string text, Icon icon)
        {
            if (_item.ContextMenu == null)
            {
                _item.ContextMenu = new ContextMenu();
            }

            var action = new ScreenAction()
            {
                Binding = new InputBinding(_command, _gesture),
                Icon = icon,
                Name = text
            };
            _item.ContextMenu.Items.Add(CommandMenuItem.Build(action));
        }
    }
}