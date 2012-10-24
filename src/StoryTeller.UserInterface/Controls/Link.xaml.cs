using System;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Documents;
using System.Windows.Media;
using StoryTeller.UserInterface.Screens;

namespace StoryTeller.UserInterface.Controls
{
    /// <summary>
    /// Interaction logic for Link.xaml
    /// </summary>
    public partial class Link : UserControl
    {
        public Link()
        {
            InitializeComponent();
        }

        public Link(string text, Action action)
            : this()
        {
            WireUp(text, action);
        }

        public Brush LinkColor
        {
            get
            {
                return textBlock.Foreground;
            }
            set
            {
                textBlock.Foreground = link.Foreground = value;
            }
        }

        public Hyperlink Link1 { get { return link; } }
        public TextBlock TextBlock { get { return textBlock; } }

        public void WireUpToScreen(string text, Func<IScreenLocator> toLocator)
        {
            WireUp(text, () => new ScreenRequested
            {
                ScreenLocator = toLocator()
            });
        }

        public void WireUp<T>(string text, Func<T> toMessage)
        {
            WireUp(text, () =>
            {
                var args = new MessageRequestArgs(events => events.SendMessage(toMessage()));
                RaiseEvent(args);
            });
        }

        public void WireUp(string text, Action action)
        {
            textBlock.Text = text;
            link.Click += action.ToRoutedHandler();
        }
    }
}