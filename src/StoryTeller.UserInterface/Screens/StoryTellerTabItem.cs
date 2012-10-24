using System;
using System.Windows;
using System.Windows.Controls;

namespace StoryTeller.UserInterface.Screens
{
    public class StoryTellerTabItem
    {
        private Label _label;
        private readonly IScreen _screen;
        private readonly TabItem _item;

        public StoryTellerTabItem(IScreen screen, IEventAggregator events)
        {
            _screen = screen;
            _item = new TabItem();

            Func<Action<IScreenConductor>, Action> sendMessage = a => () => events.SendMessage(a);

            _item.Header = new StackPanel().Horizontal()
                .Configure(x =>
                {
                    x.Height = 25;
                })
                .AddText(screen.Title.GetLabelTextWithoutHotkey(), x => _label = x)
                .Add(new TabCloser(sendMessage(s => s.Close(screen))));

            _label.VerticalAlignment = VerticalAlignment.Center;
            _label.Margin = new Thickness(0, 0, 5, 0);

            _item.Content = new DockPanel().With(screen.View);
            _item.Tag = screen;


            // Sets up a context menu for each tab in the screen that can capture "Close"
            // messages
            _item.ContextMenu = new ContextMenu().Configure(o =>
            {
                o.AddItem("Close", sendMessage(s => s.Close(screen)));
                o.AddItem("Close All But This", sendMessage(s => s.CloseAllBut(screen)));
                o.AddItem("Close All", sendMessage(s => s.CloseAll()));
            });
        }

        public TabItem Item
        {
            get { return _item; }
        }

        public void RefreshTitle()
        {
            HeaderText = _screen.Title;
        }

        public string HeaderText { get { return _label.Content as string; } set { _label.Content = value; } }
    }
}