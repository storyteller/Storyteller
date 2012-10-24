using System.Linq;

namespace StoryTeller.UserInterface.Screens
{
    public class ScreenFinder : IScreenFinder
    {
        private readonly IScreenCollection _screens;

        public ScreenFinder(IScreenCollection screens)
        {
            _screens = screens;
        }

        #region IScreenFinder Members

        public IScreen Find(IScreenLocator _locator)
        {
            return _screens.AllScreens.FirstOrDefault(_locator.Matches);
        }

        #endregion
    }
}