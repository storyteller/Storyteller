using System;
using System.Collections.Generic;
using System.Linq;
using System.Windows;
using StoryTeller.Domain;
using StoryTeller.UserInterface.Actions;
using StoryTeller.UserInterface.Screens;

namespace StoryTeller.UserInterface
{
    public interface ICloseable
    {
        void AddCanCloseMessages(CloseToken token);
        void PerformShutdown();
    }

    // Just a data structure holding any messages to display to
    // the user before shutting down the application
    public class CloseToken
    {
        private readonly List<string> _messages = new List<string>();

        public string[] Messages { get { return _messages.ToArray(); } }

        public void AddMessage(string message)
        {
            _messages.Add(message);
        }
    }

    public interface IMessageCreator
    {
        UserMessageResponse AskUser(string title, string message);
        void ShowAlert(string title, string message);
        UserMessageResponse AskUserCanCancel(string title, string message);
    }

    public enum UserMessageResponse
    {
        Yes = 0,
        No = 1,
        Cancel = 2
    }

    public class MessageCreator : IMessageCreator
    {
        #region IMessageCreator Members

        public UserMessageResponse AskUser(string title, string message)
        {
            return MessageBox.Show(message, title, MessageBoxButton.YesNo).ToUserMessageResponse();
        }

        public UserMessageResponse AskUserCanCancel(string title, string message)
        {
            return MessageBox.Show(message, title, MessageBoxButton.YesNoCancel).ToUserMessageResponse();
        }

        public void ShowAlert(string title, string message)
        {
            MessageBox.Show(message, title, MessageBoxButton.OK);
        }

        #endregion
    }

    
    public class ScreenRequested
    {
        public IScreenLocator ScreenLocator {
            get;
            set;}
    }

    public class RefreshScreenHeaders
    {
        
    }

    public class ScreenConductor : IScreenConductor
                                   , IListener<OpenItemMessage>
                                   , IListener<DeleteTestMessage>
                                   , IListener<UserScreenActivation>
                                   , IListener<ScreenRequested>
                                   , IListener<RefreshScreenHeaders>

    {
        public static readonly string CAN_CLOSE_TITLE = "Is it okay to close StoryTeller?";

        private readonly IEventAggregator _events;
        private readonly IScreenFactory _factory;
        private readonly IMessageCreator _messageBox;
        private readonly IScreenObjectLocator _screenObjectLocator;
        private readonly IScreenCollection _screens;
        private readonly IShellService _shellService;

        public ScreenConductor(IEventAggregator events, IScreenCollection screens, IScreenObjectLocator screenObjectLocator, IMessageCreator messageBox, IShellService shellService, IScreenFactory factory)
        {
            _events = events;
            _screens = screens;
            _screenObjectLocator = screenObjectLocator;
            _messageBox = messageBox;
            _shellService = shellService;
            _factory = factory;
        }

        #region IListener<DeleteTestMessage> Members

        public void Handle(DeleteTestMessage message)
        {
            IScreenLocator screenLocator = _screenObjectLocator.BuildSubject(message.Test);
            IScreen screen = findScreenMatchingSubject(screenLocator);
            if (screen == null) return;

            Close(screen);
        }

        #endregion

        #region IListener<OpenItemMessage> Members

        void IListener<OpenItemMessage>.Handle(OpenItemMessage message)
        {
            OpenScreen(message.Item);
        }

        #endregion

        #region IListener<UserScreenActivation> Members

        public void Handle(UserScreenActivation message)
        {
            activateCurrentScreen();
        }

        #endregion

        #region IScreenConductor Members

        public virtual void OpenScreen(IScreenLocator locator)
        {
            // What if that screen is already open and active?
            if (locator.Matches(_screens.Active))
            {
                return;
            }

            // Is the requested screen one of the inactive tabs?
            IScreen screen = findScreenMatchingSubject(locator);
            if (screen == null)
            {
                screen = createNewActiveScreen(locator);
            }
            else
            {
                activate(screen);
            }

            _screens.Show(screen);
        }

        public void OpenScreen(INamedItem subject)
        {
            IScreenLocator screenLocator = _screenObjectLocator.BuildSubject(subject);
            OpenScreen(screenLocator);
        }

        public void OpenScreen<T>() where T : IScreenLocator
        {
            IScreenLocator _locator = _screenObjectLocator.BuildSubject<T>();
            OpenScreen(_locator);
        }

        public bool CanClose()
        {
            var token = new CloseToken();
            UserMessageResponse userResponse = UserMessageResponse.Yes;
            _events.SendMessage<ICloseable>(x => x.AddCanCloseMessages(token));

            if (token.Messages.Length > 0)
            {
                string userMessage = string.Join("\n", token.Messages);
                userResponse = _messageBox.AskUser(CAN_CLOSE_TITLE, userMessage);
            }

            if (userResponse == UserMessageResponse.Yes)
            {
                _events.SendMessage<ICloseable>(x => x.PerformShutdown());
            }

            return userResponse == UserMessageResponse.Yes;
        }

        public virtual void Close(IScreen screen)
        {
            if (removeScreen(screen))
            {
                activateCurrentScreen();
            }
        }

        public void CloseAllBut(IScreen screen)
        {
            _screens.AllScreens.Where(s => s != screen).Each(x => removeScreen(x));
            activateCurrentScreen();
        }

        public void CloseAll()
        {
            _screens.AllScreens.Each(x => removeScreen(x));
        }

        public void Start()
        {
        }

        #endregion

        private void activateCurrentScreen()
        {
            IScreen screen = _screens.Active;
            if (screen != null)
            {
                activate(screen);
            }
        }

        private IScreen findScreenMatchingSubject(IScreenLocator _locator)
        {
            return _screens.AllScreens.FirstOrDefault(_locator.Matches);
        }

        private void activate(IScreen screen)
        {
            _shellService.ActivateScreen(screen);
        }

        // This method removes a screen from the application
        // and cleans up resources related to this screen
        private bool removeScreen(IScreen screen)
        {
            if (!screen.CanClose()) return false;

            _events.RemoveListener(screen);
            _screens.Remove(screen);

            _shellService.ClearTransient();

            return true;
        }

        private IScreen createNewActiveScreen(IScreenLocator _locator)
        {
            IScreen screen = _locator.CreateScreen(_factory);
            activate(screen);
            _screens.Add(screen);
            return screen;
        }

        #region Nested type: NulloScreen

        public class NulloScreen : IScreen
        {
            #region IScreen Members

            public object View { get { throw new NotImplementedException(); } set { throw new NotImplementedException(); } }

            public string Title { get { throw new NotImplementedException(); } set { throw new NotImplementedException(); } }

            public void Activate(IScreenObjectRegistry screenObjects)
            {
            }

            public bool CanClose()
            {
                return true;
            }

            public void Dispose()
            {
            }

            #endregion
        }

        #endregion

        void IListener<ScreenRequested>.Handle(ScreenRequested message)
        {
            OpenScreen(message.ScreenLocator);
        }

        public void Handle(RefreshScreenHeaders message)
        {
            _screens.RefreshScreenHeaders();
        }
    }
}