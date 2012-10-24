using System;
using System.Collections.Generic;
using StoryTeller.Domain;
using StoryTeller.Rendering;

namespace StoryTeller.Engine
{
    public class ActionGrammar : LineGrammar
    {
        private readonly GrammarAction _action;

        public ActionGrammar(string text, Action action)
            : this(text, action.ToGrammarAction())
        {
        }

        public ActionGrammar(string text, GrammarAction action)
            : base(text)
        {
            _action = action;
        }

        public override string Description { get { return Template; } }

        public override void Execute(IStep containerStep, ITestContext context)
        {
            _action(containerStep, context);
        }

        public override IList<Cell> GetCells()
        {
            return new List<Cell>();
        }
    }

    public class ActionGrammar<TCellType> : LineGrammar
    {
        private readonly Action<TCellType, ITestContext> _action;

        public ActionGrammar(string template, Action<TCellType> action)
            : this(template, (x, y) => action(x))
        {
        }

        public ActionGrammar(string template, Action<TCellType, ITestContext> action)
            : base(template)
        {
            _action = action;
            key = DisplayParser.FirstKey(template);
        }

        protected internal string key { get; set; }
        protected internal string template { get; set; }

        public override string Description { get { return DescriptionAttribute.GetDescription(GetType()); } }

        public override void Execute(IStep containerStep, ITestContext context)
        {
            cell().ReadArgument(context, containerStep, x => _action((TCellType) x, context));
        }


        public override IList<Cell> GetCells()
        {
            return new List<Cell>
            {
                cell()
            };
        }

        private Cell cell()
        {
            return new Cell(key, typeof (TCellType));
        }
    }
}