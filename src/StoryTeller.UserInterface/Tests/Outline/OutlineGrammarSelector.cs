using System;
using System.Windows.Controls;
using System.Windows.Controls.Primitives;
using System.Windows.Input;
using StoryTeller.UserInterface.Actions;
using StoryTeller.UserInterface.Controls;

namespace StoryTeller.UserInterface.Tests.Outline
{
    public class OutlineGrammarSelector : ContextMenu
    {


        public OutlineGrammarSelector(OutlineNode node)
        {
            node.Bind(ModifierKeys.Alt, Key.Insert).To(() => IsOpen = true);

            StaysOpen = true;

            PlacementTarget = node;
            VerticalOffset = 5;
            HorizontalOffset = 20;
            Placement = PlacementMode.RelativePoint;

            Add(Icon.Close, "Close", () => IsOpen = false, new KeyGesture(Key.Escape));
        }

        public void Add(Icon icon, string text, Action action, KeyGesture gesture)
        {
            var screenAction = new ScreenAction()
            {
                Binding = new InputBinding(new ActionCommand(action), gesture),
                Icon = icon,
                Name = text
            };

            InputBindings.Add(screenAction.Binding);
            var item = CommandMenuItem.Build(screenAction);
            item.StaysOpenOnClick = true;

            Items.Add(item);
        }

        

        
    }

    

    
}