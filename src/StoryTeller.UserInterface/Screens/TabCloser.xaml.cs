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

namespace StoryTeller.UserInterface.Screens
{
    /// <summary>
    /// Interaction logic for TabCloser.xaml
    /// </summary>
    public partial class TabCloser : UserControl
    {
        public TabCloser()
        {
            InitializeComponent();
            image.SetIcon(Icon.Close);
        }

        public TabCloser(Action action) : this()
        {
            link.Click += action.ToRoutedHandler();            
        }
    }
}
