using System;
using System.Collections.Generic;
using System.Linq;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Controls.Primitives;
using System.Windows.Input;
using StoryTeller.Domain;
using Label=System.Windows.Controls.Label;

namespace StoryTeller.UserInterface.Tests.Outline
{
    public class OutlineNode : TreeViewItem
    {
        private Icon _icon;
        private Image _image;

        public OutlineNode(ITestPart part, Icon icon)
        {
            Focusable = true;

            Part = part;
            IsExpanded = true;
            Holder = part as IPartHolder;

            Header = new StackPanel().Horizontal().Configure(x =>
            {
                _image = x.Add<Image>();
            });

            Icon = icon;

            this.BindControlAnd(Key.M).To(() =>
            {
                if (ContextMenu != null)
                {
                    ContextMenu.PlacementTarget = this;
                    ContextMenu.VerticalOffset = 5;
                    ContextMenu.HorizontalOffset = 20;
                    ContextMenu.Placement = PlacementMode.RelativePoint;
                    ContextMenu.IsOpen = true;
                }
            });
        }


        public OutlineNode ParentNode
        {
            get
            {
                return Parent as OutlineNode;
            }
        }

        public ITestPart Part { get; set; }

        public string HeaderText()
        {
            return Header.As<StackPanel>().Children.OfType<Label>()
                .Aggregate(string.Empty, (current, label) => current + label.Content);
        }

        public void AddText(string text)
        {
            var label = Header.As<StackPanel>().Add<Label>();
            label.Content = text.GetLabelTextWithoutHotkey();
        }

        public string Description()
        {
            return string.Format("{0}, Part: {1}, Holder: {2}", base.ToString(), Part, Holder);
        }

        public void AddItalicizedText(string text)
        {
            var label = Header.As<StackPanel>().Add<Label>();
            label.Content = text.GetLabelTextWithoutHotkey();
            label.FontStyle = FontStyles.Italic;
        }

        public Icon Icon
        {
            get { return _icon; }
            set
            {
                _image.SetIcon(value);
                _icon = value;
            }
        }


        public IEnumerable<OutlineNode> Descendents
        {
            get
            {
                foreach (OutlineNode item in Items)
                {
                    yield return item;

                    foreach (OutlineNode node in item.Descendents)
                    {
                        yield return node;
                    }
                }
            }
        }

        public OutlineNode Find(Func<OutlineNode, bool> filter)
        {
            if (filter(this)) return this;

            return Descendents.FirstOrDefault(filter);
        }

        public IPartHolder Holder { get; set; }
    }
}