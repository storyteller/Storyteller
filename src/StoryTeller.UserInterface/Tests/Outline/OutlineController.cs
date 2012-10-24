using System;
using StoryTeller.Domain;

namespace StoryTeller.UserInterface.Tests.Outline
{
    public class OutlineController : ITestStateListener, IOutlineController
    {
        private readonly Test _test;
        private readonly IOutlineView _view;
        private readonly ITestStateManager _stateManager;
        private readonly IOutlineTreeService _treeService;

        public OutlineController(Test test, IOutlineView view, ITestStateManager stateManager, IOutlineTreeService treeService)
        {
            _test = test;
            _view = view;
            _stateManager = stateManager;
            _treeService = treeService;
            stateManager.RegisterListener(this);
        }

        public IOutlineView View
        {
            get { return _view; }
        }

        private void configure(IPartHolder holder, Action<IPartHolder> configure)
        {
            configure(holder);
            _stateManager.Version(this);
            _treeService.RedrawNode(_test, this);
        }

        public void AddComment(IPartHolder holder)
        {
            configure(holder, h => h.AddComment());
        }

        public void AddSection(string fixtureName)
        {
            configure(_test, h => h.AddSection(fixtureName));
        }

        public void AddStep(string grammarKey, IPartHolder holder)
        {
            configure(holder, h => h.AddStep(grammarKey));
        }

        public void Remove(ITestPart part, IPartHolder holder)
        {
            configure(holder, h => h.Remove(part));
        }

        public void MoveUp(ITestPart part, IPartHolder holder)
        {
            configure(holder, h => h.MoveUp(part));
            _treeService.SelectNodeFor(part);
        }

        public void MoveDown(ITestPart part, IPartHolder holder)
        {
            configure(holder, h => h.MoveDown(part));
            _treeService.SelectNodeFor(part);
        }

        public void MoveToTop(ITestPart part, IPartHolder holder)
        {
            configure(holder, h => h.MoveToTop(part));
            _treeService.SelectNodeFor(part);
        }

        public void MoveToBottom(ITestPart part, IPartHolder holder)
        {
            configure(holder, h => h.MoveToBottom(part));
            _treeService.SelectNodeFor(part);
        }

        public void Refresh()
        {
            Update(null);
        }

        public void FocusOnTop()
        {
            _view.FocusOnTop();
        }

        public void Update(object source)
        {
            TopNode = _treeService.BuildNode(_test, this);
            _view.ResetTree(TopNode);
        }

        public OutlineNode TopNode { get; set; }
    }
}