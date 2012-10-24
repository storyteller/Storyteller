using System;
using System.Windows.Controls;
using System.Windows.Controls.Primitives;
using FubuCore.Util;

namespace StoryTeller.UserInterface.Controls
{
    public class ToggleBar<T>
    {
        private readonly Cache<T, ToggleButton> _buttons = new Cache<T, ToggleButton>();
        private readonly Action<T> _callback;


        public ToggleBar(StackPanel panel, Action<T> callback, Action<ConfigureToggleBar> configure)
        {
            panel.Children.Clear();

            _callback = callback;
            configure(new ConfigureToggleBar(panel, this));
        }

        private void selectValue(T value, ToggleButton button)
        {
            _buttons.Each(b =>
            {
                if (!b.IsSame(button))
                {
                    b.IsChecked = false;
                }
            });

            _callback(value);
        }

        #region Nested type: ConfigureToggleBar

        public class ConfigureToggleBar
        {
            private readonly StackPanel _panel;
            private readonly ToggleBar<T> _parent;

            public ConfigureToggleBar(StackPanel panel, ToggleBar<T> parent)
            {
                _panel = panel;
                _parent = parent;
            }

            public void Icon(Icon icon, T value, string toolTip)
            {
                _panel.Add<ToggleButton>(x =>
                {
                    x.ToIconButton(icon, () => _parent.selectValue(value, x));
                    x.ToolTip = toolTip;
                    x.Margin = new System.Windows.Thickness(2);
                    _parent._buttons[value] = x;
                });
            }

            public void Text(string text, T value)
            {
                _panel.Add<ToggleButton>(x =>
                {
                    _parent._buttons[value] = x;
                    x.Click += (a, b) => _parent.selectValue(value, x);
                    x.Content = text;
                    x.Margin = new System.Windows.Thickness(2);
                });
            }
        }

        #endregion
    }
}