using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using StoryTeller.UserInterface.Actions;

namespace StoryTeller.UserInterface.Controls
{
    /// <summary>
    /// Interaction logic for OptionsMenu.xaml
    /// </summary>
    public partial class OptionsMenu : UserControl, IOptionsMenu
    {
        public OptionsMenu()
        {
            InitializeComponent();

            ContextMenu = new ContextMenu();
            button.Click += (s, e) => ShowOptions();
        }


        public void Refill(IEnumerable<ScreenAction> actions)
        {
            ContextMenu.Items.Clear();
            actions.Each(x =>
            {
                var item = CommandMenuItem.Build(x);
                ContextMenu.Items.Add(item);
            });
        }

        public void ShowOptions()
        {
            ContextMenu.IsOpen = true;
        }
    }
}
