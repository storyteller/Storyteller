using System;
using System.Windows;
using StoryTeller.UserInterface.Controls;

namespace StoryTeller.UserInterface
{
    public delegate void MessageRequestHandler(object sender, MessageRequestArgs args);

    public interface IApplicationShell
    {
        void LockAsBusy();
        void Unlock();
        void PlaceInExplorerPane(object view, string text);
        void RemoveFromExplorerPane(object view);
        void ShowTestExplorerTree();
        void LockAsInvalidBinaryState();
    }

    public class MessageRequestArgs : RoutedEventArgs
    {
        public static readonly RoutedEvent SendMessageEvent
            = EventManager.RegisterRoutedEvent(
                "SendMessage",
                RoutingStrategy.Bubble,
                typeof(MessageRequestHandler),
                typeof(Shell));

        public MessageRequestArgs(Action<IEventAggregator> action)
            : base(SendMessageEvent)
        {
            Action = action;
        }

        public Action<IEventAggregator> Action { get; private set; }
    }
}