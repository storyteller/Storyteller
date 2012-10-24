using System;
using System.Windows.Forms;
using FubuCore;
using StoryTeller.Domain;
using StoryTeller.Workspace;

namespace StoryTeller.UserInterface.Projects
{
    public interface IProjectValidator
    {
        ProjectValidationMessages Validate(IProject project);
    }

    public class ProjectValidator : IProjectValidator
    {
        public ProjectValidationMessages Validate(IProject project)
        {
            return project.As<Project>().Validate();
        }
    }


    public class ProjectController : IProjectController
                                        , IListener<SaveTestMessage>
                                        , IListener<ReloadTestsMessage>
                                        , IListener<DeleteTestMessage>
                                        , IListener<RenameTestRequest>
                                        , IListener<SuiteAddedMessage>
                                        , IListener<RemoveProjectFromHistoryMessage>
                                    
    {
        private readonly IScreenConductor _conductor;
        private readonly IEventAggregator _events;
        private readonly IProjectHistory _history;
        private readonly IProjectPersistor _persistor;
        private readonly IProjectExplorerView _view;
        private readonly IFileDialogPicker _filePicker;
        private IProject _project;

        public ProjectController(IProjectPersistor persistor, IScreenConductor shell, IEventAggregator events,
                                 IProjectHistory history, IProjectExplorerView view, IFileDialogPicker filePicker)
        {
            _persistor = persistor;
            _conductor = shell;
            _events = events;
            _history = history;
            _view = view;
            _filePicker = filePicker;
        }

        public IProject Project { get { return _project; } set { _project = value; } }


        public void Handle(DeleteTestMessage message)
        {
            _project.DeleteFile(message.Test);
            message.Parent.Remove(message.Test);
        }

        public void Handle(RemoveProjectFromHistoryMessage message)
        {
            _history.Remove(message.ProjectToken);
            _persistor.SaveHistory(_history);
            reloadProjectList();
        }


        public void Handle(ReloadTestsMessage message)
        {
            reloadTests();
        }

        private void reloadTests()
        {
            _conductor.CloseAll();
            Hierarchy hierarchy = _project.LoadTests();
            _events.SendMessage(hierarchy);
        }


        public void Handle(RenameTestRequest message)
        {
            _project.RenameTest(message.Test, message.NewName);
            _events.SendMessage(new TestRenamed
            {
                Test = message.Test
            });

            _events.SendMessage<RefreshScreenHeaders>();
        }

        public void Handle(SaveTestMessage message)
        {
            _project.Save(message.Test);
        }


        public void Handle(SuiteAddedMessage message)
        {
            _project.CreateDirectory(message.NewSuite);
        }

        public virtual bool LoadProject(ProjectToken token)
        {
            if (token == null) return false;            
            try
            {
                var project = _persistor.LoadFromFile(token.Filename);
                if(project == null)
                {
                    handleProjectLoadFailure(token);
                    return false;
                }

                token.Name = project.Name;

                ActivateProject(project);
                _history.MarkAsLastAccessed(token);
                _persistor.SaveHistory(_history);
                reloadProjectList();
                _project = project;
                return true;
            }
            catch (Exception e)
            {
                handleProjectLoadFailure(new ProjectLoadFailureMessage
                {
                    ErrorMessage = "Error loading project with filename: {0}".ToFormat(token.Filename) + "\r\n" + e,
                    ProjectToken = token
                });
                return false;
            }
        }

        private void handleProjectLoadFailure(ProjectToken projectToken)
        {
            var message = new ProjectLoadFailureMessage
            {
                ErrorMessage = "Error loading project with filename: {0} \r\n\r\n Additional Information: {0}".ToFormat(projectToken.Filename),
                ProjectToken = projectToken
            };
            handleProjectLoadFailure(message);
        }

        private void handleProjectLoadFailure(ProjectLoadFailureMessage message)
        {
            _events.SendMessage(message);            
        }

        public void StartNewProject(IProject project)
        {
            _persistor.SaveProject(project);
            var projectToken = project.ToProjectToken();
            try
            {
                ActivateProject(project);
                _history.Store(projectToken);

                _persistor.SaveHistory(_history);

                reloadProjectList();

                _project = project;
            }
            catch (Exception e)
            {
                handleProjectLoadFailure(new ProjectLoadFailureMessage
                {
                    ErrorMessage = "Error loading project with filename: {0} \r\n\r\n Additional Information: {1}".ToFormat(projectToken.Filename, e),
                    ProjectToken = projectToken
                });
            }
        }

        public void CreateNewProject()
        {
            _conductor.OpenScreen<NewProjectSubject>();
        }

        public void LoadExistingProject()
        {
            _filePicker.Filter = FileDialogPicker.XML_FILE_FILTER;
            var result = _filePicker.ShowDialog();
            if(result == DialogResult.OK)
            {
                var file = _filePicker.Selection;
                try
                {
                    var project = _persistor.LoadFromFile(file);
                    LoadProject(project.ToProjectToken());
                }
                catch(Exception e)
                {
                    handleProjectLoadFailure(new ProjectLoadFailureMessage
                    {
                        ErrorMessage = "Error loading project with filename: {0} \r\n\r\n Additional Information: {1}".ToFormat(file, e)
                    });
                }                
            }
        }

        public void SaveProject(IProject project)
        {
            _persistor.SaveProject(project);
            _events.SendMessage(new ForceBinaryRecycle());
            _events.SendMessage(new ReloadTestsMessage());
        }

        public void Start()
        {
            reloadProjectList();

            ProjectToken token = _history.LastAccessed;
            bool projectLoaded = false;
            while (token != null)
            {
                if (LoadProject(token))
                {
                    projectLoaded = true;
                    break;
                }
                else
                {
                    token = _history.Next(token);
                }
            }

            if (!projectLoaded)
            {
                _conductor.OpenScreen<NewProjectSubject>();
            }
        }


        public virtual void ActivateProject(IProject project)
        {
            if (project != null)
            {
                _events.SendMessage(new ProjectLoaded(project));
                _project = project;
                reloadTests();
            }
        }

        private void reloadProjectList()
        {
            _view.ShowProjects(_history.Projects);
            
        }
    }
}