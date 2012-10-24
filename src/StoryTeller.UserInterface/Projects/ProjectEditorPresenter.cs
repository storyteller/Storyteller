using System;
using System.Windows.Input;
using StoryTeller.Domain;
using StoryTeller.UserInterface.Actions;
using StoryTeller.UserInterface.Screens;
using StoryTeller.Workspace;

namespace StoryTeller.UserInterface.Projects
{
    public class ProjectEditorPresenter : IScreen<Hierarchy>
    {
        private readonly Hierarchy _hierarchy;
        private readonly ProjectContext _context;
        private readonly IProjectController _controller;
        private readonly IProjectValidator _validator;
        private readonly IProjectScreen _screen;

        public ProjectEditorPresenter(Hierarchy hierarchy, ProjectContext context, IProjectController controller, IProjectValidator validator, IProjectScreen screen)
        {
            _hierarchy = hierarchy;
            _context = context;
            _controller = controller;
            _validator = validator;
            _screen = screen;
        }

        public void Dispose()
        {
        }

        public object View
        {
            get { return _screen; }
        }

        public string Title
        {
            get { return "Project " + _context.Project.Name; }
        }

        public void Activate(IScreenObjectRegistry screenObjects)
        {
            _screen.BindTo((Project) _context.Project);

            screenObjects.Action("Save").Bind(ModifierKeys.Control, Key.S).To(Save)
                .Icon = Icon.Save;
        }

        public void Save()
        {
            var messages = _validator.Validate(_context.Project);
            if (messages.IsValid)
            {
                _controller.SaveProject(_context.Project);
            }

            _screen.ShowErrorMessages(messages);
        }

        // TODO -- can close / is dirty logic
        public bool CanClose()
        {
            return true;
        }

        public Hierarchy Subject
        {
            get { return _hierarchy; }
        }
    }
}