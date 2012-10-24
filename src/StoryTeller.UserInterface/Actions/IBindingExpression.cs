using System;
using System.Windows.Input;
using StoryTeller.UserInterface.Screens;

namespace StoryTeller.UserInterface.Actions
{
    // The last step that captures the actual
    // "action" of the ScreenAction
    public interface IBindingExpression
    {
        ScreenAction ToDialog<T>();
        ScreenAction ToScreen<T>() where T : IScreen;
        ScreenAction PublishEvent<T>() where T : new();
        ScreenAction PublishEvent<T>(Func<T> func);
        ScreenAction To(Action action);
        ScreenAction To(ICommand command);
    }
}