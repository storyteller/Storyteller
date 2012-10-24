using System;
using System.Collections.Generic;
using System.Windows.Input;
using StoryTeller.Domain;
using StoryTeller.Model;

namespace StoryTeller.UserInterface.Tests.Outline
{
    public static class KeyExtensions
    {
        public static KeyGesture ToGesture(this Key key)
        {
            return new KeyGesture(key, ModifierKeys.Control);
        }

        public static KeyGesture PlusAlt(this Key key)
        {
            return new KeyGesture(key, ModifierKeys.Alt);
        }

        public static KeyGesture PlusShiftAlt(this Key key)
        {
            return new KeyGesture(key, ModifierKeys.Alt | ModifierKeys.Shift);
        }

        public static KeyGesture PlusShift(this Key key)
        {
            return new KeyGesture(key, ModifierKeys.Control | ModifierKeys.Shift);
        }
    }
    
    public class OutlineConfigurer : IOutlineConfigurer
    {
        private readonly IOutlineController _controller;

        public OutlineConfigurer(IOutlineController controller)
        {
            _controller = controller;
        }

        public void ConfigureTableColumnSelector(OutlineNode node, Table table, IStep step)
        {
            // no-op
        }

        public void ConfigureRearrangeCommands(OutlineNode node, IPartHolder holder, ITestPart part)
        {
            node.BindControlAnd(Key.Up).To(() => _controller.MoveUp(part, holder)).Menu("Move Up", Icon.UpArrow);
            node.BindControlAnd(Key.PageUp).To(() => _controller.MoveToTop(part, holder)).Menu("Move to Top", Icon.UpArrow);
            node.BindControlAnd(Key.Down).To(() => _controller.MoveDown(part, holder)).Menu("Move Down", Icon.DownArrow);
            node.BindControlAnd(Key.PageDown).To(() => _controller.MoveToBottom(part, holder)).Menu("Move to Bottom", Icon.DownArrow);
            node.Bind(Key.Delete).To(() => _controller.Remove(part, holder)).Menu("Delete", Icon.Delete);
        }


        public void ConfigureSectionAdder(OutlineNode node, FixtureLibrary library, Test test)
        {
            var selector = new OutlineGrammarSelector(node);
            selector.Add(Icon.Comment, "Comment", () => _controller.AddComment(test), Key.C.ToGesture());

            int index = 0;
            library.ActiveFixtures.Each(x =>
            {
                if (index < Shortcuts.Length)
                {
                    selector.Add(Icon.Section, x.Label, () => _controller.AddSection(x.Name), Shortcuts[index++]);
                }
                else
                {
                    selector.Add(Icon.Section, x.Label, () => _controller.AddSection(x.Name), new KeyGesture(Key.F15));
                }
            });
        }


        public void ConfigurePartAdders(OutlineNode node, FixtureStructure fixture, IPartHolder holder)
        {
            var selector = new OutlineGrammarSelector(node);
            var configurer = new GrammarSelectorConfigurer(holder, selector, _controller);
            configurer.Configure(fixture);
        }

        public void WriteSentenceText(OutlineNode node, Sentence sentence, IStep step)
        {
            var writer = new SentenceWriter(node, step);
            sentence.Parts.Each(x => x.AcceptVisitor(writer));
        }

        public class SentenceWriter : ISentenceVisitor
        {
            private readonly OutlineNode _node;
            private readonly IStep _step;

            public SentenceWriter(OutlineNode node, IStep step)
            {
                _node = node;
                _step = step;
            }

            public void Label(Label label)
            {
                _node.AddText(label.Text);
            }

            public void Input(TextInput input)
            {
                var key = input.Cell.Key;
                string value = _step.Has(key) ? _step.Get(key) : input.Cell.DefaultValue ?? "{" + key + "}";

                _node.AddItalicizedText(value);
            }

        }



        public static readonly KeyGesture[] Shortcuts = new KeyGesture[]
        {
            Key.D0.ToGesture(),    
            Key.D1.ToGesture(),    
            Key.D2.ToGesture(),    
            Key.D3.ToGesture(),    
            Key.D4.ToGesture(),    
            Key.D5.ToGesture(),    
            Key.D6.ToGesture(),    
            Key.D7.ToGesture(),    
            Key.D8.ToGesture(),    
            Key.D9.ToGesture(),  
            Key.D0.PlusAlt(),    
            Key.D1.PlusAlt(),    
            Key.D2.PlusAlt(),    
            Key.D3.PlusAlt(),    
            Key.D4.PlusAlt(),    
            Key.D5.PlusAlt(),    
            Key.D6.PlusAlt(),    
            Key.D7.PlusAlt(),    
            Key.D8.PlusAlt(),    
            Key.D9.PlusAlt(),  
            Key.D0.PlusShift(),    
            Key.D1.PlusShift(),    
            Key.D2.PlusShift(),    
            Key.D3.PlusShift(),    
            Key.D4.PlusShift(),    
            Key.D5.PlusShift(),    
            Key.D6.PlusShift(),    
            Key.D7.PlusShift(),    
            Key.D8.PlusShift(),    
            Key.D9.PlusShift(),  
            Key.A.ToGesture(),
            Key.B.ToGesture(),
            Key.D.ToGesture(),
            Key.E.ToGesture(),
            Key.F.ToGesture(),
            Key.G.ToGesture(),
            Key.H.ToGesture(),
            Key.I.ToGesture(),
            Key.J.ToGesture(),
            Key.K.ToGesture(),
            Key.L.ToGesture(),
            Key.M.ToGesture(),
            Key.N.ToGesture(),
            Key.O.ToGesture(),
            Key.P.ToGesture(),
            Key.Q.ToGesture(),
            Key.R.ToGesture(),
            Key.S.ToGesture(),
            Key.T.ToGesture(),
            Key.U.ToGesture(),
            Key.V.ToGesture(),

            Key.A.PlusAlt(),
            Key.B.PlusAlt(),
            Key.D.PlusAlt(),
            Key.E.PlusAlt(),
            Key.F.PlusAlt(),
            Key.G.PlusAlt(),
            Key.H.PlusAlt(),
            Key.I.PlusAlt(),
            Key.J.PlusAlt(),
            Key.K.PlusAlt(),
            Key.L.PlusAlt(),
            Key.M.PlusAlt(),
            Key.N.PlusAlt(),
            Key.O.PlusAlt(),
            Key.P.PlusAlt(),
            Key.Q.PlusAlt(),
            Key.R.PlusAlt(),
            Key.S.PlusAlt(),
            Key.T.PlusAlt(),
            Key.U.PlusAlt(),
            Key.V.PlusAlt(),

            Key.A.PlusShiftAlt(),
            Key.B.PlusShiftAlt(),
            Key.D.PlusShiftAlt(),
            Key.E.PlusShiftAlt(),
            Key.F.PlusShiftAlt(),
            Key.G.PlusShiftAlt(),
            Key.H.PlusShiftAlt(),
            Key.I.PlusShiftAlt(),
            Key.J.PlusShiftAlt(),
            Key.K.PlusShiftAlt(),
            Key.L.PlusShiftAlt(),
            Key.M.PlusShiftAlt(),
            Key.N.PlusShiftAlt(),
            Key.O.PlusShiftAlt(),
            Key.P.PlusShiftAlt(),
            Key.Q.PlusShiftAlt(),
            Key.R.PlusShiftAlt(),
            Key.S.PlusShiftAlt(),
            Key.T.PlusShiftAlt(),
            Key.U.PlusShiftAlt(),
            Key.V.PlusShiftAlt(),
        };


        public class GrammarSelectorConfigurer : IGrammarVisitor
        {
            private readonly IPartHolder _holder;
            private readonly OutlineGrammarSelector _selector;
            private readonly IOutlineController _controller;
            private int _index = 0;

            public GrammarSelectorConfigurer(IPartHolder holder, OutlineGrammarSelector selector, IOutlineController controller)
            {
                _holder = holder;
                _selector = selector;
                _controller = controller;
            }

            private void add(string key, string text, Icon icon)
            {                
                _selector.Add(icon, text, () => _controller.AddStep(key, _holder), Shortcuts[_index]);
                getIndexAction()();
            }

            private Action getIndexAction()
            {
                Action indexAction;
                if(_index < Shortcuts.Length - 1)
                {
                    indexAction = () => _index +=1;
                }
                else
                {
                    indexAction = () => { };
                }
                return indexAction;
            }

            void IGrammarVisitor.Sentence(Sentence sentence, IStep step)
            {
                add(sentence.Name, sentence.Label, Icon.Sentence);
            }

            void IGrammarVisitor.Table(Table table, IStep step)
            {
                add(table.Name, table.Label, Icon.Table);
            }

            void IGrammarVisitor.SetVerification(SetVerification setVerification, IStep step)
            {
                add(setVerification.Name, setVerification.Label, Icon.SetVerification);
            }

            void IGrammarVisitor.Paragraph(Paragraph paragraph, IStep step)
            {
                add(paragraph.Name, paragraph.Label, Icon.Paragraph);
            }

            void IGrammarVisitor.EmbeddedSection(EmbeddedSection section, IStep step)
            {
                add(section.Name, section.Label, Icon.EmbeddedSection);
            }

            void IGrammarVisitor.DoGrammar(DoGrammarStructure grammar, IStep step)
            {
            }


            public void Configure(FixtureStructure fixture)
            {
                _selector.Add(Icon.Comment, "Comment", () => _controller.AddComment(_holder), Key.C.ToGesture());

                fixture.Grammars.Each(g => g.AcceptVisitor(this, new Step()));
            }
        }
    }
}