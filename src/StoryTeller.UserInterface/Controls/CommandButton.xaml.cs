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

namespace StoryTeller.UserInterface.Controls
{
    /// <summary>
    /// Interaction logic for CommandButton.xaml
    /// </summary>
    public partial class CommandButton : UserControl
    {
        public CommandButton()
        {
            InitializeComponent();
        }

        public CommandButton(Icon icon, string text, ICommand command) : this()
        {
            image.SetIcon(icon);
            label.Content = text;
            button.Command = command;
        }

        
    }
}
