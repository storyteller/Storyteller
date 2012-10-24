using System;
using System.Collections.Generic;
using HtmlTags;
using StoryTeller.Engine;

namespace StoryTeller.UserInterface.Editing.HTML
{
    public class TextboxBuilder : ICellBuilder
    {
        private readonly List<Action<Cell, HtmlTag>> _alterations = new List<Action<Cell, HtmlTag>>();

        public TextboxBuilder()
        {
            If(t => t.IsFloatingPoint()).Then(
                x => x.AddClass(GrammarConstants.NUMBER).Attr(GrammarConstants.MAX_LENGTH, "19"));
            If(t => t == typeof (Int16)).Then(
                x => x.Attr(GrammarConstants.MAX, Int16.MaxValue).AddClass(GrammarConstants.INTEGER));
            If(t => t == typeof (Int32)).Then(
                x => x.Attr(GrammarConstants.MAX, Int32.MaxValue).AddClass(GrammarConstants.INTEGER));
            If(t => t == typeof (Int64)).Then(
                x => x.Attr(GrammarConstants.MAX, Int64.MaxValue).AddClass(GrammarConstants.INTEGER));
        }

        #region ICellBuilder Members

        public bool CanBuild(Cell cell)
        {
            return true;
        }

        public void Configure(Cell cell, CellTag tag)
        {
            tag.Attr("type", "text").AddClass(GrammarConstants.REQUIRED);
            _alterations.Each(x => x(cell, tag));
        }

        public string TagName { get { return "input"; } }

        #endregion

        private IfExpression If(Func<Type, bool> filter)
        {
            return new IfExpression(_alterations, filter);
        }

        #region Nested type: IfExpression

        internal class IfExpression
        {
            private readonly List<Action<Cell, HtmlTag>> _alterations;
            private readonly Func<Type, bool> _filter;

            public IfExpression(List<Action<Cell, HtmlTag>> alterations, Func<Type, bool> filter)
            {
                _alterations = alterations;
                _filter = filter;
            }

            public void Then(Action<HtmlTag> action)
            {
                Action<Cell, HtmlTag> alteration = (cell, tag) => { if (_filter(cell.Type)) action(tag); };

                _alterations.Add(alteration);
            }
        }

        #endregion
    }
}