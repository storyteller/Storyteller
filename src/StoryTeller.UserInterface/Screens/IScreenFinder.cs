namespace StoryTeller.UserInterface.Screens
{
    public interface IScreenFinder
    {
        IScreen Find(IScreenLocator _locator);
    }
}