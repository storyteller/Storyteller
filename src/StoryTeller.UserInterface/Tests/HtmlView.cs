using System;
using System.Windows;
using System.Windows.Controls;

namespace StoryTeller.UserInterface.Tests
{
    public interface IHtmlView
    {
        string Html { set; }
        object Listener { set; }
        void OpenFile(string path);
        void CaptureFocus();
        void RunCommand(string command);
    }

    public class HtmlView : ContentControl, IHtmlView
    {
        private readonly WebBrowser _browser = new WebBrowser();
        private string _html = "<html></html>";

        public HtmlView()
        {
            Content = _browser;
            this.HorizontalContentAlignment = HorizontalAlignment.Stretch;
            _browser.HorizontalAlignment = HorizontalAlignment.Stretch;

            _browser.Visibility = Visibility.Visible;

            Loaded += (x, y) => _browser.NavigateToString(_html);
        }

        #region IHtmlView Members

        public string Html
        {
            set
            {
                _html = value;
                _browser.NavigateToString(value);
            }
            get { return _html; }
        }

        public object Listener
        {
            set
            {
                _browser.ObjectForScripting = value;
            }
        }

        public void OpenFile(string path)
        {
            _browser.Navigate(new Uri(path));
        }

        public void CaptureFocus()
        {
            _browser.Focus();
        }

        public void RunCommand(string command)
        {
            _browser.InvokeScript(command);
        }

        #endregion
    }
}