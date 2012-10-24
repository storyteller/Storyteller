using System.Collections.Generic;

namespace StoryTeller.UserInterface.Screens
{
    public interface IScreenCollection : IStartable
    {
        // Which screen is active?
        IScreen Active { get; }

        // What screens are currently in the main tabbed area
        IEnumerable<IScreen> AllScreens { get; }

        // Remove all screens from the tabbed display
        void ClearAll();

        // WireUp the tab for this screen
        void Show(IScreen screen);

        // Add a new tab with this screen to the tabbed display
        void Add(IScreen screen);

        // Remove this screen from the tabbed display
        void Remove(IScreen screen);

        void RefreshScreenHeaders();
    }
}