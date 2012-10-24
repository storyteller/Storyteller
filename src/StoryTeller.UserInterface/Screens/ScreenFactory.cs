using StructureMap;

namespace StoryTeller.UserInterface.Screens
{
    public class ScreenFactory : IScreenFactory
    {
        private readonly IContainer _container;

        public ScreenFactory(IContainer container)
        {
            _container = container;
        }

        #region IScreenFactory Members

        public SCREEN Build<SCREEN>() where SCREEN : IScreen
        {
            return _container.GetInstance<SCREEN>();
        }

        public IScreen<T> Build<T>(T subject)
        {
            return _container.With(subject).GetInstance<IScreen<T>>();
        }

        #endregion
    }
}