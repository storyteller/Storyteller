using System;
using System.Windows.Controls;
using StoryTeller.Domain;

namespace StoryTeller.UserInterface.Exploring
{
    /// <summary>
    /// Interaction logic for SuiteView.xaml
    /// </summary>
    public partial class SuiteView : UserControl, ISuiteView
    {
        public SuiteView()
        {
            InitializeComponent();

            runAll.Click += (s, e) => Presenter.RunAll();
        }

        #region ISuiteView Members

        public ITestLineDriver AddTest(Test test, Action<Test> queueAction)
        {
            TestLineControls controls = new TestLinePanel().CreateControls(grid);
            return new TestLineDriver(controls, test, queueAction);
        }

        public void ClearAll()
        {
            if (grid.RowDefinitions.Count == 1) return;
            grid.RowDefinitions.RemoveRange(1, grid.RowDefinitions.Count - 1);
        }

        public ISuitePresenter Presenter { get; set; }

        #endregion
    }
}