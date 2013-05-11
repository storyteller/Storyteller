using System;
using FubuCore.Logging;
using StructureMap;

namespace StoryTeller.UserInterface.Screens
{
    public class ScreenFactory : IScreenFactory
    {
        private readonly IContainer _container;
        private readonly ILogger _logger;

        public ScreenFactory(IContainer container, ILogger logger)
        {
            _container = container;
            _logger = logger;
        }

        #region IScreenFactory Members

        public SCREEN Build<SCREEN>() where SCREEN : IScreen
        {
            return _container.GetInstance<SCREEN>();
        }

        public IScreen<T> Build<T>(T subject)
        {
            IScreen<T> screen = null;
            try
            {
                screen = _container.With(subject).GetInstance<IScreen<T>>();
            }
            catch (Exception ex)
            {
                _logger.Info("Missing screen: {0}", ex.Message);
            }

            return screen;
        }

        #endregion
    }
}