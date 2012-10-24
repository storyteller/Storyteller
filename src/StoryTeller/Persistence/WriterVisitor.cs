using System;
using System.Collections.Generic;
using FubuCore;
using StoryTeller.Domain;

namespace StoryTeller.Persistence
{
    public class WriterVisitor : ITestVisitor
    {
        private readonly Stack<INode> _nodes = new Stack<INode>();
        private readonly INode _root;
        private readonly Test _test;

        public WriterVisitor(Test test, INode node)
        {
            _test = test;
            _root = node;
        }

        #region ITestVisitor Members

        public void RunStep(IStep step)
        {
            if (step.Description.IsNotEmpty())
            {
                _nodes.Peek().AddComment(step.Description);
            }

            // Here, this should be changed
            _nodes.Peek().AddChild(step.GrammarKey).WithProperties(step.Values).With(elem =>
            {
                step.EachLeaf((key, leaf) =>
                {
                    _nodes.Push(elem.AddChild(key));

                    leaf.AcceptVisitor(this);

                    _nodes.Pop();
                });
            });
        }

        public void WriteTags(Tags tags)
        {
            _nodes.Peek().AddChild(Tags.TAGS).WithFormattedText(tags.Text);
        }

        public void WriteComment(Comment comment)
        {
            _nodes.Peek().AddChild(Comment.COMMENT).WithFormattedText(comment.Text);
        }

        public void StartSection(Section section)
        {
            try
            {
                INode parent = _nodes.Peek();
                if (section.Description.IsNotEmpty())
                {
                    parent.AddComment(section.Description);
                }

                INode element = parent.AddChild(section.FixtureName);
                _nodes.Push(element);
            }
            catch (Exception e)
            {
                throw new ApplicationException(
                    "Could not create element for Section '{0}'".ToFormat(section.FixtureName), e);
            }
        }

        public void EndSection(Section section)
        {
            _nodes.Pop();
        }

        #endregion


        public void Write()
        {
            _root["name"] = _test.Name;
            _root["lifecycle"] = _test.Lifecycle.ToString();

            _nodes.Push(_root);

            _test.AcceptVisitor(this);
        }
    }
}