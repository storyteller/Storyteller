using System;
using System.Collections.Generic;
using System.Linq;
using FubuCore;
using Storyteller.Core.Model;

namespace Storyteller.Core.Grammars
{
    public class ParagraphGrammar : IGrammar
    {
        private readonly IList<IGrammar> _children = new List<IGrammar>();
        private readonly string _title;

        public ParagraphGrammar(string title)
        {
            _title = title;
        }

        public IExecutionStep CreatePlan(Step step, FixtureLibrary library)
        {
            IExecutionStep[] children = _children.Select(x => x.CreatePlan(step, library)).ToArray();
            for (int i = 0; i < children.Length; i++)
            {
                if (children[i] is ILineExecution)
                {
                    children[i].As<ILineExecution>().Position = i;
                }
            }

            return new CompositeExecution(children);
        }

        /// <summary>
        /// Adds a new child grammar to this ParagraphGrammar
        /// </summary>
        /// <param name="grammar"></param>
        public void AddGrammar(IGrammar grammar)
        {
            _children.Add(grammar);
        }

        public GrammarModel Compile(CellHandling cells)
        {
            GrammarModel[] childrenModels = _children.Select(_ => _.Compile(cells)).ToArray();
            return new Paragraph {children = childrenModels, title = _title};
        }

        // TODO -- test this!
        public void Do(Action<ISpecContext> action)
        {
            var silent = new SilentGrammar(_children.Count, action);
            _children.Add(silent);
        }
    }
}