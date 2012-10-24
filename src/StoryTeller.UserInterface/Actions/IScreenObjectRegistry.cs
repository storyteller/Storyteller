using System.Collections.Generic;

namespace StoryTeller.UserInterface.Actions
{
    public interface IScreenObjectRegistry
    {
        // I'm going to move this out of IScreenObjectRegistry
        // into another interface at some point
        // ISP says this shouldn't be here.
        IEnumerable<ScreenAction> Actions { get; }

        // Removes all temporary menu items
        void ClearTransient();

        IActionExpression Action(string name);
        IActionExpression PermanentAction(string name);

        

        void PlaceInExplorerPane(object view, string header);
    }
}