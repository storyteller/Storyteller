using System.Windows.Input;

namespace StoryTeller.UserInterface.Actions
{
    public interface IActionExpression
    {
        IBindingExpression Bind(Key key);
        IBindingExpression Bind(ModifierKeys modifiers, Key key);
        IBindingExpression Bind(ModifierKeys modifiers, MouseAction mouseAction);
    }
}