using System;
using System.Collections;
using System.Collections.Generic;
using Baseline;

namespace StoryTeller.Model
{
    // SAMPLE: ICellExpression
    public interface ICellExpression
    {
        /// <summary>
        /// Override the header display for this cell within Tables
        /// </summary>
        /// <param name="header"></param>
        /// <returns></returns>
        ICellExpression Header(string header);

        /// <summary>
        /// Explicitly choose the editor control for this cell
        /// </summary>
        /// <param name="editor"></param>
        /// <returns></returns>
        ICellExpression Editor(string editor);

        /// <summary>
        /// Explicitly set a default value for this cell
        /// </summary>
        /// <param name="default"></param>
        /// <returns></returns>
        ICellExpression DefaultValue(string @default);

        /// <summary>
        /// Explicitly set the selection values by the raw values
        /// </summary>
        /// <param name="values"></param>
        /// <returns></returns>
        ICellExpression SelectionValues(params string[] values);

        /// <summary>
        /// Explicitly set the selection options for this cell
        /// </summary>
        /// <param name="options"></param>
        /// <returns></returns>
        ICellExpression SelectionOptions(params Option[] options);

        /// <summary>
        /// Use a named selection list for this cell
        /// </summary>
        /// <param name="listName"></param>
        /// <returns></returns>
        ICellExpression SelectionList(string listName);
    }
    // ENDSAMPLE

    public static class CellExpressionExtensions
    {
        /// <summary>
        /// Shorthand for DefaultValue("NULL")
        /// </summary>
        /// <param name="expression"></param>
        /// <returns></returns>
        public static ICellExpression DefaultIsNull(this ICellExpression expression)
        {
            return expression.DefaultValue("NULL");
        }

        public static ICellExpression DefaultIsEmpty(this ICellExpression expression)
        {
            return expression.DefaultValue("EMPTY");
        }
    }

    public class CellModifications : ICellExpression
    {
        private readonly IList<Action<ICellExpression>> _modifications = new List<Action<ICellExpression>>();

        public void Apply(Cell cell)
        {
            _modifications.Each(x => x(cell));
        }

        public ICellExpression Header(string header)
        {
            _modifications.Add(c => c.Header(header));
            return this;
        }

        public ICellExpression Editor(string editor)
        {
            _modifications.Add(c => c.Editor(editor));
            return this;
        }

        public ICellExpression DefaultValue(string @default)
        {
            _modifications.Add(c => c.DefaultValue(@default));
            return this;
        }

        public ICellExpression SelectionValues(params string[] values)
        {
            _modifications.Add(c => c.SelectionValues(values));
            return this;
        }

        public ICellExpression SelectionOptions(params Option[] options)
        {
            _modifications.Add(c => c.SelectionOptions(options));
            return this;
        }

        public ICellExpression SelectionList(string listName)
        {
            _modifications.Add(c => c.SelectionList(listName));
            return this;
        }
    }
}