using System;
using StoryTeller.Domain;
using StoryTeller.UserInterface.Screens;

namespace StoryTeller.UserInterface
{
    public interface IScreenConductor : IStartable
    {
        void OpenScreen(IScreenLocator _locator);
        void OpenScreen(INamedItem subject);
        void OpenScreen<T>() where T : IScreenLocator;

        bool CanClose();

        // Other methods

        void Close(IScreen screen);
        void CloseAllBut(IScreen screen);
        void CloseAll();
    }
}