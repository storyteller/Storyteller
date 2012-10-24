using System;
using System.Windows.Controls;
using ShadeTree.Binding;
using ShadeTree.Binding.WPF;
using StoryTeller.Execution;
using StoryTeller.Workspace;
using StructureMap.Attributes;

namespace StoryTeller.UserInterface.Controls
{

    /// <summary>
    /// Interaction logic for TestStopConditionsView.xaml
    /// </summary>
    public partial class TestStopConditionsView : INeedBuildUp, IListener<ProjectLoaded>
    {
        private readonly ScreenBinder<TestStopConditions> _binder = new ScreenBinder<TestStopConditions>();
        private TestStopConditions _conditions;

        public TestStopConditionsView()
        {
            InitializeComponent();

            _binder.Bind(x => x.BreakOnExceptions).To(exceptions);
            _binder.Bind(x => x.BreakOnWrongs).To(wrongs);
            _binder.Bind(x => x.TimeoutInSeconds).To(timeout);
        }

        [SetterProperty]
        public TestStopConditions Conditions { set
        {
            _conditions = value;
            _binder.BindToModel(_conditions);
        }
        }

        public void Handle(ProjectLoaded message)
        {
            _conditions.TimeoutInSeconds = message.Project.TimeoutInSeconds;
            _binder.UpdateScreen();
        }

        public TextBox Timeout { get { return timeout; } }
    }
}