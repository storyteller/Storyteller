using System.Windows;
using System.Windows.Controls;
using StoryTeller.UserInterface.Dialogs;

namespace StoryTeller.UserInterface.Projects
{
    /// <summary>
    ///   Interaction logic for ProjectLoadFailure.xaml
    /// </summary>
    public partial class ProjectLoadFailure : UserControl, ICommandDialog<IProjectLoadFailureHandler>
    {
        private readonly IEventAggregator _events;

        public ProjectLoadFailure() { InitializeComponent(); }

        public ProjectLoadFailure(IProjectLoadFailureHandler handler, IEventAggregator events) : this()
        {
            _events = events;
            errorText.Text = handler.ErrorText;

            no.Click += (x, y) =>
            {
                if (Parent != null)
                {
                    Parent.As<Window>().Close();
                }
            };
            yes.Click += (x, y) =>
            {
                _events.SendMessage(new RemoveProjectFromHistoryMessage 
                {
                    ProjectToken = handler.ProjectToken
                });
                
                if (Parent != null)
                {
                    Parent.As<Window>().Close();
                }
            };
        }

        public Button Yes { get { return yes; } }
        public Button No { get { return no; } }

        public string Title { get { return "Project Load Failure"; } }
    }
}