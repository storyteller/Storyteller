using System;
using FubuCore;
using Storyteller.Core.Engine;
using Storyteller.Core.Model;

namespace Storyteller.Core.Grammars
{
    public class SilentAction : ILineExecution
    {
        private readonly Action<ISpecContext> _action;
        private readonly Node _node;

        public static SilentAction AsCritical(object position, Action<ISpecContext> action, Node node)
        {
            Action<ISpecContext> wrapped = c =>
            {
                try
                {
                    action(c);
                }
                catch (StorytellerCriticalException)
                {
                    throw;
                }
                catch (StorytellerCatastrophicException)
                {
                    throw;
                }
                catch (Exception e)
                {
                    throw new StorytellerCriticalException("Failed at position '{0}'".ToFormat(position), e);
                }
            };

            return new SilentAction(position, wrapped, node);
        }

        public SilentAction(object position, Action<ISpecContext> action, Node node)
        {
            Position = position;
            _action = action;
            _node = node;
        }

        public Action<ISpecContext> Action
        {
            get { return _action; }
        }

        public Node Node
        {
            get { return _node; }
        }

        public object Position { get; set; }

        public int Count()
        {
            return 1;
        }

        public void AcceptVisitor(IStepExecutor executor)
        {
            executor.Line(this);
        }


        public void Execute(ISpecContext context)
        {
            try
            {
                _action(context);
            }
            catch (Exception ex)
            {
                context.LogException(_node.Id,
                    ex,
                    Position);
            }
        }
    }
}