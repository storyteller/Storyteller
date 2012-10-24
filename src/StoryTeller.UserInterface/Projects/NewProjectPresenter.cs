using System.Windows.Input;
using ShadeTree.Validation;
using StoryTeller.UserInterface.Actions;
using StoryTeller.UserInterface.Screens;
using StoryTeller.Workspace;

namespace StoryTeller.UserInterface.Projects
{
    public class NewProjectPresenter : IScreen
    {
        private readonly ICommand _cancel;
        private readonly IScreenConductor _conductor;
        private readonly IProjectController _controller;
        private readonly Project _project;
        private readonly ICommand _save;
        private readonly IProjectValidator _validator;
        private readonly IProjectScreen _view;

        public NewProjectPresenter(IProjectController controller, IScreenConductor conductor, IProjectValidator validator,
                                   IProjectScreen view)
        {
            _controller = controller;
            _conductor = conductor;
            _validator = validator;
            _view = view;
            _project = new Project();

            _view.BindTo(_project);

            _save = new ActionCommand(save);
            _cancel = new ActionCommand(cancel);
        }

        public Project Project { get { return _project; } }

        public ICommand Save { get { return _save; } }
        public ICommand Cancel { get { return _cancel; } }


        public object View { get { return _view; } }

        public string Title { get { return "New Testing Project"; } }

        public void Activate(IScreenObjectRegistry screenObjects)
        {
            screenObjects.Action("Save").Bind(ModifierKeys.Control, Key.S).To(_save);
            screenObjects.Action("Cancel").Bind(Key.Escape).To(_cancel);
        }

        public bool CanClose()
        {
            return true;
        }

        public void Dispose()
        {
        }


        private void save()
        {
            var notification = _validator.Validate(_project);
            if (notification.IsValid)
            {
                _controller.StartNewProject(_project);
                _conductor.Close(this);
            }

            _view.ShowErrorMessages(notification);

        }

        private void cancel()
        {
            _conductor.Close(this);
        }
    }
}