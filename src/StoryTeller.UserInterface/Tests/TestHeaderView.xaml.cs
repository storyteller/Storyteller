using System.Windows.Controls;
using System.Windows.Input;
using ShadeTree.Binding;
using ShadeTree.Binding.WPF;

namespace StoryTeller.UserInterface.Tests
{
    /// <summary>
    /// Interaction logic for TestHeaderView.xaml
    /// </summary>
    public partial class TestHeaderView : UserControl, ITestHeaderView
    {
        private readonly ScreenBinder<TestHeaderViewModel> _binder = new ScreenBinder<TestHeaderViewModel>();
        private TestHeaderViewModel _model;

        public TestHeaderView()
        {
            InitializeComponent();

            _binder.Bind(x => x.Path).To(path);
            _binder.Bind(x => x.Status).To(status);
            _binder.Bind(x => x.AutoRun).To(autoRun);
            _binder.Bind(x => x.NumberOfRetries).To(numberOfRetries);
            _binder.Bind(x => x.Name).To(testName).OnChange(() =>
            {
                hideTestName();
            }).RebindOnChange();

            var element = new ButtonElement(lifecycle);
            element.OnClick(() => _model.ToggleLifecycle());
            _binder.AddElement(element);

            path.MouseDown += new System.Windows.Input.MouseButtonEventHandler(path_MouseDown);
            testName.LostFocus += (x, y) =>
            {
                hideTestName();
            };

            //testName.LostMouseCapture += (x, y) => hideTestName();
            testName.LostKeyboardFocus += (x, y) => hideTestName();
            
        }

        private void hideTestName()
        {
            path.Visibility = System.Windows.Visibility.Visible;
            testName.Visibility = System.Windows.Visibility.Hidden;
        }

        void path_MouseDown(object sender, System.Windows.Input.MouseButtonEventArgs e)
        {
            if (e.ChangedButton == MouseButton.Left)
            {
                path.Visibility = System.Windows.Visibility.Collapsed;
                testName.Visibility = System.Windows.Visibility.Visible;
                testName.Focus();
            }
        }

        #region ITestHeaderView Members

        public void Refresh()
        {
            _binder.UpdateScreen();
            lifecycle.Content = _model.Lifecycle;
        }

        #endregion

        public void BindTo(TestHeaderViewModel model)
        {
            _model = model;
            _binder.BindToModel(model);
            lifecycle.Content = _model.Lifecycle;
        }
    }
}