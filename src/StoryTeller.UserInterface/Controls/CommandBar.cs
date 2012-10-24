using System;
using System.Collections.Generic;
using System.Linq;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;
using StoryTeller.UserInterface.Actions;

namespace StoryTeller.UserInterface.Controls
{
    public interface ICommandBar
    {
        void AddCommand(string text, Action action);
        void AddCommand(string text, ICommand command, Icon icon);
        void Refill(IEnumerable<ScreenAction> actions);
    }

    public class CommandBar : StackPanel, ICommandBar
    {
        public CommandBar()
        {
            this.Horizontal();
            VerticalAlignment = VerticalAlignment.Stretch;
            HorizontalAlignment = HorizontalAlignment.Right;
            Height = 30;
        }

        #region ICommandBar Members

        public void AddCommand(string text, Action action)
        {
            addButton(text, action);
        }

        public void AddCommand(string text, ICommand command, Icon icon)
        {
            var button = new CommandButton(icon, text, command);
            Children.Add(button);
            //this.Add<Button>(x =>
            //{
            //    x.ToIconButton(icon, command).Text(text);
            //    x.VerticalAlignment = VerticalAlignment.Stretch;
            //    x.Height = 30;
            //    x.Margin = new Thickness(5, 0, 5, 0);
            //    x.HorizontalAlignment = HorizontalAlignment.Right;
            //});
        }

        public void Refill(IEnumerable<ScreenAction> actions)
        {
            Children.Clear();
            actions.Where(x => !x.ShortcutOnly).Each(x => x.BuildButton(this));
        }

        #endregion

        private Button addButton(string text, Action action)
        {
            return this.Add<Button>(x =>
            {
                x.MinWidth = 20;
                x.VerticalAlignment = VerticalAlignment.Stretch;
                x.Content = text;
                x.Click += action.ToRoutedHandler();
                x.Height = Height - 10;
                x.Margin = new Thickness(5, 0, 5, 0);
                x.HorizontalAlignment = HorizontalAlignment.Right;
            });
        }
    }
}