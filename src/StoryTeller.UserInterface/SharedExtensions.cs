using System;
using System.Collections;
using System.Collections.Generic;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Controls.Primitives;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using StoryTeller.Engine;
using StoryTeller.UserInterface.Projects;
using StoryTeller.Workspace;

namespace StoryTeller.UserInterface
{
    public static class SharedExtensions
    {
        public static ProjectToken ToProjectToken(this IProject project)
        {
            return new ProjectToken
            {
                Filename = project.FileName,
                Name = project.Name
            };
        }

        public static UserMessageResponse ToUserMessageResponse(this MessageBoxResult response)
        {
            switch (response)
            {
                case MessageBoxResult.Yes:
                    return UserMessageResponse.Yes;
                case MessageBoxResult.Cancel:
                    return UserMessageResponse.Cancel;
                default:
                    return UserMessageResponse.No;
            }
        }

        public static void Do<T>(this Stack<T> stack, T target, Action action)
        {
            stack.Push(target);
            
            try
            {
                action();
            }
            finally
            {
                stack.Pop();
            }
        }

        public static bool IsFloatingPoint(this Type type)
        {
            return type == typeof (decimal) || type == typeof (float) || type == typeof (double);
        }

        public static void Show(this UIElement element)
        {
            element.Visibility = Visibility.Visible;
        }

        public static void Hide(this UIElement element)
        {
            element.Visibility = Visibility.Collapsed;
        }

        public static void SetIcon(this MenuItem item, Icon icon)
        {
            var image = new Image();
            image.SetIcon(icon);
            item.Icon = image;
        }

        public static void SetIcon(this Image image, Icon icon)
        {
            image.Tag = icon;

            var source = new BitmapImage();
            source.BeginInit();
            source.StreamSource = icon.ImageStream();
            source.EndInit();

            image.Source = source;
        }

        public static void BackgroundIs(this Control element, Color color)
        {
            element.Background = new SolidColorBrush(color);
        }

        public static ButtonExpression ToIconButton(this ButtonBase button, Icon icon)
        {
            button.ClickMode = ClickMode.Release;


            var image = button.Content as Image;
            if (image == null)
            {
                image = new Image();
                button.Content = image;

                image.Width = 25;
                image.Height = 25;
            }

            image.SetIcon(icon);

            return new ButtonExpression(button);
        }

        public static ButtonExpression ToIconButton(this ButtonBase button, Icon icon, Action action)
        {
            button.Click += (s, e) => action();
            return button.ToIconButton(icon);
        }

        public static ButtonExpression ToIconButton(this ButtonBase button, Icon icon, ICommand command)
        {
            button.Command = command;
            return button.ToIconButton(icon);
        }

        public static string GetText(this Button button)
        {
            var panel = button.Content as StackPanel;
            if (panel == null) return null;

            string text = "";
            foreach (object child in panel.Children)
            {
                child.CallOn<Label>(x => text = x.Content.ToString());
            }

            return text;
        }

        public static string GetLabelTextWithoutHotkey(this string text)
        {
            return text == null ? text : text.Replace("_", "__");
        }

        public static StackPanel Configure(this StackPanel panel, Action<StackPanel> action)
        {
            action(panel);
            return panel;
        }

        public static StackPanel Horizontal(this StackPanel panel)
        {
            panel.Orientation = Orientation.Horizontal;
            return panel;
        }

        public static StackPanel Add(this StackPanel panel, params UIElement[] elements)
        {
            elements.Each(x => panel.Children.Add(x));
            return panel;
        }

        public static StackPanel Vertical(this StackPanel panel)
        {
            panel.Orientation = Orientation.Vertical;
            return panel;
        }

        public static void CenterAll(this FrameworkElement element)
        {
            element.HorizontalAlignment = HorizontalAlignment.Center;
            element.VerticalAlignment = VerticalAlignment.Center;
        }

        public static T Add<T>(this Panel panel) where T : UIElement, new()
        {
            var t = new T();
            panel.Children.Add(t);

            return t;
        }

        public static ButtonExpression IconButton(this StackPanel panel, Icon icon, Action action)
        {
            return panel.Add<Button>().ToIconButton(icon, action);
        }

        public static StackPanel IconButton(this StackPanel panel, Icon icon, Action action,
                                            Action<ButtonExpression> configureButton)
        {
            configureButton(panel.Add<Button>().ToIconButton(icon, action));
            return panel;
        }

        public static T Add<T>(this Panel panel, Action<T> action) where T : UIElement, new()
        {
            var element = panel.Add<T>();
            action(element);
            return element;
        }

        public static StackPanel AddText(this StackPanel panel, string text)
        {
            panel.Add<Label>().Content = text;
            return panel;
        }

        public static StackPanel AddText(this StackPanel panel, string text, Action<Label> action)
        {
            var label = panel.Add<Label>();
            label.Content = text;

            action(label);

            return panel;
        }

        public static Icon GetIcon(this Image image)
        {
            return image.Tag as Icon;
        }

        public static void Add(this Grid grid, UIElement element, int rowIndex, int column)
        {
            grid.Children.Add(element);
            Grid.SetRow(element, rowIndex);
            Grid.SetColumn(element, column);
        }

        public static T Add<T>(this Grid grid, int rowIndex, int column) where T : FrameworkElement, new()
        {
            var target = new T();
            grid.Add(target, rowIndex, column);

            return target;
        }

        public static Grid Add<T>(this Grid grid, int rowIndex, int column, Action<T> configure)
            where T : FrameworkElement, new()
        {
            var target = grid.Add<T>(rowIndex, column);
            configure(target);

            return grid;
        }

        public static DockPanel With(this DockPanel panel, UIElement element)
        {
            panel.Children.Add(element);
            return panel;
        }

        public static DockPanel With(this DockPanel panel, object element)
        {
            panel.Children.Add(element.As<UIElement>());
            return panel;
        }

        public static void ShowInDock(this FrameworkElement element, DockPanel parent, bool isVisible)
        {
            element.Visibility = isVisible ? Visibility.Visible : Visibility.Collapsed;

            if (isVisible && element.Parent != parent)
            {
                parent.Children.Add(element);
            }

            if (!isVisible && element.Parent == parent)
            {
                parent.Children.Remove(element);
            }
        }

        public static FrameworkElement Stretch(this FrameworkElement element)
        {
            element.HorizontalAlignment = HorizontalAlignment.Stretch;
            return element;
        }

        public static RoutedEventHandler ToRoutedHandler(this Action action)
        {
            return (s, e) => action();
        }

        public static MenuItem AddItem(this ContextMenu menu, string text, Action action)
        {
            var item = new MenuItem
            {
                Header = text
            };

            item.Click += action.ToRoutedHandler();
            menu.Items.Add(item);

            return item;
        }

        public static int Zeroed(this double number)
        {
            return number < 0 ? 0 : (int) number;
        }

        public static DockPanel Add<T>(this DockPanel panel, Action<T> configure, Dock dock) where T : UIElement, new()
        {
            panel.Add<T>(element =>
            {
                configure(element);
                DockPanel.SetDock(element, dock);
            });
            return panel;
        }

        public static DockPanel Top<T>(this DockPanel panel, Action<T> configure) where T : UIElement, new()
        {
            return panel.Add(configure, Dock.Top);
        }

        public static T Top<T>(this DockPanel panel) where T : UIElement, new()
        {
            return panel.Add<T>(x => DockPanel.SetDock(x, Dock.Top));
        }

        public static T Bottom<T>(this DockPanel panel) where T : UIElement, new()
        {
            return panel.Add<T>(x => DockPanel.SetDock(x, Dock.Bottom));
        }


        public static DockPanel Bottom<T>(this DockPanel panel, Action<T> configure) where T : UIElement, new()
        {
            return panel.Add(configure, Dock.Bottom);
        }

        public static DockPanel Left<T>(this DockPanel panel, Action<T> configure) where T : UIElement, new()
        {
            return panel.Add(configure, Dock.Left);
        }

        public static DockPanel Left(this DockPanel panel, UIElement element)
        {
            DockPanel.SetDock(element, Dock.Left);
            panel.Children.Add(element);
            return panel;
        }

        public static DockPanel Right<T>(this DockPanel panel, Action<T> configure) where T : UIElement, new()
        {
            return panel.Add(configure, Dock.Right);
        }

        public static RowDefinition AddRow(this Grid grid)
        {
            var row = new RowDefinition
            {
                Height = GridLength.Auto
            };

            grid.RowDefinitions.Add(row);

            return row;
        }

        public static void AddHeader(this Grid grid, UIElement element)
        {
            grid.ColumnDefinitions.Add(new ColumnDefinition
            {
                Width = GridLength.Auto
            });
            int column = grid.ColumnDefinitions.Count - 1;

            grid.Add(element, 0, column);
        }

        #region Nested type: ButtonExpression

        public class ButtonExpression
        {
            private readonly ButtonBase _button;

            public ButtonExpression(ButtonBase button)
            {
                _button = button;
            }

            public ButtonBase Button { get { return _button; } }

            public void Text(string text)
            {
                var panel = new StackPanel
                {
                    Orientation = Orientation.Horizontal
                };
                var image = _button.Content.As<Image>();
                _button.Content = panel;
                panel.Children.Add(image);
                panel.Children.Add(new Label
                {
                    Content = text
                });
            }

            public ButtonExpression SmallerImages()
            {
                Image image = _button.Content as Image ?? _button.Content.As<StackPanel>().Children[0].As<Image>();
                image.Width = image.Height = 16;

                return this;
            }

            public ButtonExpression Transparent()
            {
                _button.Background = new SolidColorBrush(Colors.Transparent);
                return this;
            }


            public ButtonExpression DoesNotAcceptTab()
            {
                _button.TabIndex = int.MaxValue;
                return this;
            }
        }

        #endregion
    }

    public interface IReadOnlyDictionary<KEY, T> : IEnumerable<T>
    {
        T this[KEY key] { get; }
    }

    public class ReadOnlyDictionary<KEY, T> : IReadOnlyDictionary<KEY, T>
    {
        private readonly IDictionary<KEY, T> _dictionary;

        public ReadOnlyDictionary(IDictionary<KEY, T> dictionary)
        {
            _dictionary = dictionary;
        }

        #region IReadOnlyDictionary<KEY,T> Members

        public T this[KEY key] { get { return _dictionary[key]; } }

        public IEnumerator<T> GetEnumerator()
        {
            return _dictionary.Values.GetEnumerator();
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }

        #endregion
    }
}