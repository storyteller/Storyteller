namespace StoryTeller.UserInterface.Screens
{
    public abstract class ScreenSubject<T, SCREEN> : IScreenLocator<T> where SCREEN : class, IScreen
    {
        #region IScreenSubject<T> Members

        public bool Matches(IScreen screen)
        {
            var theSpecificScreen = screen as SCREEN;
            if (theSpecificScreen == null) return false;

            return matches(theSpecificScreen);
        }

        public abstract IScreen CreateScreen(IScreenFactory factory);

        #endregion

        protected abstract bool matches(SCREEN screen);
    }
}