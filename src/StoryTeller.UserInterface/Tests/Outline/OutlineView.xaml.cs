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

namespace StoryTeller.UserInterface.Tests.Outline
{
    /// <summary>
    /// Interaction logic for OutlineView.xaml
    /// </summary>
    public partial class OutlineView : UserControl, IOutlineView
    {
        public OutlineView()
        {
            InitializeComponent();
        }

        public void ResetTree(OutlineNode node)
        {
            tree.Items.Clear();
            tree.Items.Add(node);
            node.IsSelected = true;
        }

        public void FocusOnTop()
        {
            Focus();

            var outlineNode = tree.Items[0].As<OutlineNode>();
            outlineNode.BringIntoView();
            outlineNode.IsSelected = true;
            outlineNode.Focus();
        }
    }
}
