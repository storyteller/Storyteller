using System;
using Storyteller.Core.Model;
using Storyteller.Core.Results;

namespace Storyteller.Core.Grammars
{
    public class FixtureAction : ISilentAction
    {
        private readonly Action<ISpecContext> _action;
        private readonly Section _section;
        private readonly Stage _stage;

        public FixtureAction(Stage stage, Action<ISpecContext> action, Section section)
        {
            _stage = stage;
            _action = action;
            _section = section;
        }

        public Stage Stage
        {
            get { return _stage; }
        }

        public int Count()
        {
            return 1;
        }

        public void AcceptVisitor(ISpecExecutor executor)
        {
            executor.Action(this);
        }

        public void Execute(ISpecContext context)
        {
            try
            {
                _action(context);
            }
            catch (Exception ex)
            {
                context.LogException(_section.Id, new StorytellerCriticalException("Failed in fixture " + _stage, ex),
                    _stage);
            }
        }
    }
}