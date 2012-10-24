using System.Collections.Generic;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Documents;
using StoryTeller.UserInterface.Controls;

namespace StoryTeller.UserInterface.Projects
{
    /// <summary>
    ///   Interaction logic for Settings.xaml
    /// </summary>
    public partial class Settings : UserControl, INeedBuildUp, IProjectExplorerView
    {
        private IProjectController _controller;

        public Settings()
        {
            InitializeComponent();
            newProjectLink.Click += (x, y) => _controller.CreateNewProject();
            loadProjectLink.Click += (x, y) => _controller.LoadExistingProject();
        }

        public IProjectController Controller { set { _controller = value; } }


        public TestStopConditionsView TestStopConditionsView { get { return stopConditions; } }

        public Hyperlink NewProject { get { return newProjectLink; } }
        public Hyperlink LoadProject { get { return loadProjectLink; } }

        public void ShowProjects(ProjectToken[] projects)
        {
            projectList.Children.Clear();

            projects.Each(p =>
            {
                var link = new Link(p.Name, () => _controller.LoadProject(p));
                link.Margin = new Thickness(0, 0, 0, 5);
                projectList.Children.Add(link);
            });
        }
    }
}