using System;
using System.Windows;
using System.Windows.Input;
using FubuCore.Util;
using StoryTeller.Domain;
using StoryTeller.Engine;
using StoryTeller.Model;

namespace StoryTeller.UserInterface.Tests.Outline
{
    public class OutlineTreeService : IOutlineTreeService
    {
        private readonly ProjectContext _context;
        private OutlineNode _topNode;

        public OutlineTreeService(ProjectContext context)
        {
            _context = context;
        }

        public OutlineNode BuildNode(Test test, IOutlineController controller)
        {
            var builder = this.builder(controller, test);

            _topNode = builder.Build();
            return _topNode;
        }

        private OutlineTreeBuilder builder(IOutlineController controller, Test test)
        {
            var configurer = new OutlineConfigurer(controller);
            var filteredLibrary = _context.Library;
            
            return new OutlineTreeBuilder(test, filteredLibrary, configurer);
        }

        public void RedrawNode(Test test, IOutlineController controller)
        {
            builder(controller, test).Rebuild(_topNode);
            moveNext();
        }

        private void moveNext()
        {
            Keyboard.FocusedElement.As<UIElement>().MoveFocus(new TraversalRequest(FocusNavigationDirection.Next));
        }

        public void SelectNodeFor(ITestPart part)
        {
            //_topNode.Parent.CallOn<UIElement>(e => e.Focus());
            //moveNext();
            //moveNext();
            //moveNext();
            //moveNext();
            //moveNext();

            _topNode.IsSelected = false;
            var parent = _topNode.Parent as UIElement;
            parent.Focus();
            parent.InvalidateVisual();
            OutlineNode node = _topNode.Find(n => n.Part == part);
            node.BringIntoView();
            node.IsSelected = true;
            node.Focus();
            //node.MoveFocus(new TraversalRequest(FocusNavigationDirection.Next));
            //moveNext();
            return;
            

            //_topNode.Parent.CallOn<UIElement>(e => e.Focus());
            
            node.Focus();
            
            //parent.MoveFocus(new TraversalRequest(FocusNavigationDirection.Next));
            //Keyboard.FocusedElement.As<UIElement>().MoveFocus(new TraversalRequest(FocusNavigationDirection.Next));
            //Keyboard.FocusedElement.As<UIElement>().MoveFocus(new TraversalRequest(FocusNavigationDirection.Previous));

            //node.IsSelected = true;
            //node.Focus();
            //_topNode.Parent.CallOn<UIElement>(e => e.Focus());

            
        }
    }
}