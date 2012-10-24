using System;
using System.Windows.Controls;
using StoryTeller.Domain;

namespace StoryTeller.UserInterface.Controls
{
    public interface ITestFilterBar
    {
        ITestFilterObserver Observer { set; }
        void RunAll();
    }

    /// <summary>
    /// Interaction logic for TestFilterBar.xaml
    /// </summary>
    public partial class TestFilterBar : UserControl, ITestFilterBar
    {
        private ToggleBar<Lifecycle> _lifecycleToggle;
        private ITestFilterObserver _observer;
        private ToggleBar<ResultStatus> _statusToggle;

        public TestFilterBar()
        {
            InitializeComponent();


            _statusToggle = new ToggleBar<ResultStatus>(resultPanel, x => _observer.ResultStatusChanged(x), x =>
            {
                x.Icon(Icon.AnyStatus, ResultStatus.All, "View all tests");
                x.Icon(Icon.Success, ResultStatus.Success, "View only successful tests");
                x.Icon(Icon.Failed, ResultStatus.Failed, "View only failed tests");
                x.Icon(Icon.Unknown, ResultStatus.Unknown, "View only tests without any results");
            });

            _lifecycleToggle = new ToggleBar<Lifecycle>(lifecyclePanel, x => _observer.LifecycleChanged(x), x =>
            {
                x.Text("Any lifecyle", Lifecycle.Any);
                x.Text("Acceptance", Lifecycle.Acceptance);
                x.Text("Regression", Lifecycle.Regression);
            });
        }


        public ITestFilterObserver Observer { set { _observer = value; } }

        public void RunAll()
        {
            _observer.RunAll();
        }


        private void btnApply_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            _observer.TagFilterApplied(tagsFilter.Text.Trim());
        }

        private void btnClear_Click(object sender, System.Windows.RoutedEventArgs e)
        {
            tagsFilter.Text = "";
            _observer.TagFilterApplied(tagsFilter.Text.Trim());
        }
    }
}