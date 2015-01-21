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
        private readonly object _position;

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
            _position = position;
            _action = action;
            _node = node;
        }

        public object Position
        {
            get { return _position; }
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
                context.LogException(_node.Id,
                    ex,
                    _position);
            }
        }
    }
}