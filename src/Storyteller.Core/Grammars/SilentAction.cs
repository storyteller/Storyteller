using System;
using FubuCore;
using Storyteller.Core.Engine;
using Storyteller.Core.Model;
using Storyteller.Core.Results;

namespace Storyteller.Core.Grammars
{
    public class SilentAction : ILineExecution
    {
        private readonly Action<ISpecContext> _action;
        private readonly Node _node;
        private readonly Stage _stage;

        // TODO -- may change 'Stage stage' to object position when we hit paragraphs
        public SilentAction(Stage stage, Action<ISpecContext> action, Node node)
        {
            _stage = stage;
            _action = action;
            _node = node;
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
            executor.Line(this);
        }

        // TODO -- lift this out so that there's one wrapper for critical?
        // Maybe put the critical into Fixture.SetUp instead?
        public void Execute(ISpecContext context)
        {
            try
            {
                _action(context);
            }
            catch (Exception ex)
            {
                context.LogException(_node.Id, new StorytellerCriticalException("Failed in stage '{0}'".ToFormat(_stage), ex),
                    _stage);
            }
        }
    }
}