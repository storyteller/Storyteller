using System;
using System.Collections.Generic;
using System.Windows.Controls;
using System.Windows.Media;
using FubuCore.Util;
using StoryTeller.UserInterface.Handlers;

namespace StoryTeller.UserInterface.Screens
{
    


    public class ScreenCollection : IScreenCollection
    {
        private readonly Cache<IScreen, StoryTellerTabItem> _tabItems
            = new Cache<IScreen, StoryTellerTabItem>();

        private readonly TabControl _tabs;

        public ScreenCollection(TabControl tabs, IEventAggregator events)
        {
            _tabs = tabs;
            _tabItems.OnMissing = screen => new StoryTellerTabItem(screen, events);

            // Sends a message when the user select a different tab on the screen
            _tabs.SelectionChanged += (s, c) => events.SendMessage<UserScreenActivation>();
        }

        #region IScreenCollection Members

        public void ClearAll()
        {
            _tabs.Items.Clear();
        }

        public IScreen Active
        {
            get
            {
                // If there is a selected tab, this 
                // will return the IScreen object
                // matching the selected tab
                if (_tabs.SelectedItem != null)
                {
                    return toScreen(_tabs.SelectedItem);
                }
                ;

                return null;
            }
        }

        public void Show(IScreen screen)
        {
            _tabs.SelectedItem = _tabItems[screen].Item;
        }

        public void Add(IScreen screen)
        {
            // Add a new screen to the tabbed display
            StoryTellerTabItem item = _tabItems[screen];
            _tabs.Items.Add(item.Item);
        }

        public void Remove(IScreen screen)
        {
            if (_tabItems.Has(screen))
            {
                TabItem tabItem = _tabItems[screen].Item;
                _tabItems.Remove(screen);
                _tabs.Items.Remove(tabItem);
            }
        }

        public void RefreshScreenHeaders()
        {
            _tabItems.Each(x => x.RefreshTitle());
        }

        public IEnumerable<IScreen> AllScreens { get { return new List<IScreen>(_tabItems.GetAllKeys()); } }

        public void Start()
        {
            // no-op
        }

        #endregion

        private IScreen toScreen(object tab)
        {
            return tab.As<TabItem>().Tag.As<IScreen>();
        }
    }
}