using System;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Navigation;
using HtmlTags;

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
        private readonly string _emptyPage = new HtmlDocument().ToString();
        private string _html = "<html></html>";
        private string _previousCommand = string.Empty;
        private string _path;
        private bool _doOpenFile;

        public HtmlView()
        {
            Content = _browser;
            this.HorizontalContentAlignment = HorizontalAlignment.Stretch;
            _browser.HorizontalAlignment = HorizontalAlignment.Stretch;

            _browser.Visibility = Visibility.Visible;

            Loaded += (x, y) => _browser.NavigateToString(_html);

            _browser.Navigated += BrowserNavigated;
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
            _doOpenFile = true;
            _path = path;
            _browser.NavigateToString(_emptyPage);
        }

        public void BrowserNavigated(object sender, NavigationEventArgs e)
        {
            if (_doOpenFile)
            {
                _doOpenFile = false;
                _browser.Navigate(new Uri(_path));
            }
        }

        public void CaptureFocus()
        {
            _browser.Focus();
        }

        public void RunCommand(string command)
        {
            if(!string.IsNullOrEmpty(command) && command != _previousCommand)
                _browser.InvokeScript(command);
            _previousCommand = command;
        }

        #endregion
    }
}