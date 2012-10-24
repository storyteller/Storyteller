using System;
using System.Collections;
using System.Collections.Generic;
using System.Windows.Controls;
using FubuCore;
using StoryTeller.Domain;
using StoryTeller.Model;

namespace StoryTeller.UserInterface.Tests.Outline
{
    public class OutlineTreeBuilder : ITestStream
    {
        private readonly FixtureLibrary _library;
        private readonly Stack<OutlineNode> _nodes = new Stack<OutlineNode>();

        private OutlineNode _top;
        private readonly Test _test;
        private readonly IOutlineConfigurer _configurer;

        public OutlineTreeBuilder(Test test, FixtureLibrary library, IOutlineConfigurer configurer)
        {
            _library = library;
            _test = test;
            _configurer = configurer;
        }

        public OutlineNode CurrentNode
        {
            get
            {
                return _nodes.Peek();
            }
        }

        // Strictly for testing support
        public OutlineNode LastNode { get; set; }

        public OutlineNode Build()
        {
            var outlineNode = new OutlineNode(_test, Icon.Test);
            outlineNode.AddText(_test.Name);

            Rebuild(outlineNode);

            return _top;
        }

        public void Rebuild(OutlineNode topNode)
        {
            topNode.IsSelected = true;
            topNode.Items.Clear();
            _top = topNode;
            
            _nodes.Push(_top);
            LastNode = _top;

            var parser = new TestParser(_test, this, _library);
            parser.Parse();
        }

        private void addRearrangeCommands(OutlineNode node)
        {
            if (CurrentNode.Icon == Icon.Paragraph) return;

            _configurer.ConfigureRearrangeCommands(node, CurrentNode.Holder, node.Part);
        }

        private void withNewLeaf(ITestPart part, Icon icon, Action<OutlineNode> configure)
        {
            var node = new OutlineNode(part, icon);
            configure(node);
            CurrentNode.Items.Add(node);
            LastNode = node;
        }

        private void withNewNode(ITestPart part, Icon icon, Action<OutlineNode> configure)
        {
            var node = new OutlineNode(part, icon);
            configure(node);
            CurrentNode.Items.Add(node);
            LastNode = node;
            _nodes.Push(node);
        }

        public void Tags(Tags tags)
        {
            withNewLeaf(tags, Icon.Tags, node =>
            {
                node.AddText(tags.Text.TrimToLength(40, "..."));
                node.ToolTip = tags.Text;

                addRearrangeCommands(node);
            });
        }
        

        public void Comment(Comment comment)
        {
            withNewLeaf(comment, Icon.Comment, node =>
            {
                node.AddText(comment.Text.TrimToLength(40, "..."));
                node.ToolTip = comment.Text;

                addRearrangeCommands(node);
            });
        }

        public void InvalidSection(Section section)
        {
            withNewLeaf(section, Icon.Invalid, node =>
            {
                node.AddText(section.FixtureName);
                node.ToolTip = section.FixtureName + " is not a valid Fixture name";

                addRearrangeCommands(node);
            });
        }

        public void StartSection(Section section, FixtureStructure fixture)
        {
            withNewNode(section, Icon.Section, node =>
            {
                node.AddText(fixture.Label);
                node.ToolTip = fixture.FixtureClassName;

                addRearrangeCommands(node);
                _configurer.ConfigurePartAdders(node, fixture, section);
            });
        }

        public void EndSection(Section section)
        {
            _nodes.Pop();
        }

        public void Sentence(Sentence sentence, IStep step)
        {
            withNewLeaf(step, Icon.Sentence, node =>
            {
                _configurer.WriteSentenceText(node, sentence, step);
                addRearrangeCommands(node);
            });
        }

        public void InvalidGrammar(string grammarKey, IStep step)
        {
            withNewLeaf(step, Icon.Invalid, node =>
            {
                node.AddText("Invalid Grammar ({0})".ToFormat(grammarKey));
                addRearrangeCommands(node);
            });
        }

        public void Table(Table table, IStep step)
        {
            withNewLeaf(step, Icon.Table, node =>
            {
                node.AddText(table.Label);
                addRearrangeCommands(node);
            });
        }

        public void SetVerification(SetVerification verification, IStep step)
        {
            withNewLeaf(step, Icon.SetVerification, node =>
            {
                node.AddText(verification.Label);
                addRearrangeCommands(node);
            });
        }

        public void StartParagraph(Paragraph paragraph, IStep step)
        {
            withNewNode(step, Icon.Paragraph, node =>
            {
                node.AddText(paragraph.Label);
                addRearrangeCommands(node);
            });
        }

        public void EndParagraph(Paragraph paragraph, IStep step)
        {
            _nodes.Pop();
        }

        public void StartEmbeddedSection(EmbeddedSection section, IStep step)
        {
            withNewNode(step, Icon.EmbeddedSection, node =>
            {
                node.AddText(section.Label);
                addRearrangeCommands(node);
                StepLeaf leaf = section.LeafFor(step);
                node.Holder = leaf;
                _configurer.ConfigurePartAdders(node, section.Fixture, leaf);
            });
        }

        public void EndEmbeddedSection(EmbeddedSection section, IStep step)
        {
            _nodes.Pop();
        }

        public void StartTest(Test test)
        {
            if (_top == null)
            {
                _top = new OutlineNode(test, Icon.Test);
                _top.AddText(test.Name);
                LastNode = _top;
            }

            if (_nodes.Count == 0)
            {
                _nodes.Push(_top);
            }
            
            _configurer.ConfigureSectionAdder(_top, _library, _test);

        }

        public void EndTest(Test test)
        {
            // no-op
        }

        public void IncrementParagraphGrammar()
        {
            // no-op
        }

        public void Do(DoGrammarStructure structure, IStep step)
        {
            // no-op
        }
    }

    
}