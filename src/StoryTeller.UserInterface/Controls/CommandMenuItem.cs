using System.Windows;
using System.Windows.Controls;
using StoryTeller.UserInterface.Actions;

namespace StoryTeller.UserInterface.Controls
{
    public static class CommandMenuItem
    {
        public static MenuItem Build(ScreenAction screenAction)
        {
            var item = new MenuItem()
            {
                //Header = new DockPanel().Left<Label>(x => x.Content = screenAction.Name),
                Header = screenAction.Name,
                InputGestureText = screenAction.KeyString,
                Tag = screenAction,
                Command = screenAction.Command
            };


            item.Icon = new Image().Configure(x => x.SetIcon(screenAction.Icon));

            return item;
        }
    }
}