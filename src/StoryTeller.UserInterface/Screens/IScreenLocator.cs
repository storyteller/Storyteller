namespace StoryTeller.UserInterface.Screens
{
    public interface IScreenLocator
    {
        bool Matches(IScreen screen);
        IScreen CreateScreen(IScreenFactory factory);
    }

    // Marker interface
    public interface IScreenLocator<T> : IScreenLocator
    {
    }


    public class SingletonScreenSubject<T> : IScreenLocator where T : IScreen
    {
        #region IScreenSubject Members

        public bool Matches(IScreen screen)
        {
            return screen is T;
        }

        public IScreen CreateScreen(IScreenFactory factory)
        {
            return factory.Build<T>();
        }

        #endregion
    }


}