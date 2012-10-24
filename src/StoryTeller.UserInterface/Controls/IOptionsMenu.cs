using System.Collections.Generic;
using StoryTeller.UserInterface.Actions;

namespace StoryTeller.UserInterface.Controls
{
    public interface IOptionsMenu
    {
        void Refill(IEnumerable<ScreenAction> actions);
    }
}