using System;
using FubuCore;
using StoryTeller.Engine;
using StoryTeller.Model;

namespace StoryTeller.Grammars
{
    public class SilentAction : ILineExecution
    {
        private readonly string _type;
        private readonly Action<ISpecContext> _action;
        private readonly Node _node;

        public static SilentAction AsCritical(string type, object position, Action<ISpecContext> action, Node node)
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

            return new SilentAction(type, position, wrapped, node);
        }

        public SilentAction(string type, object position, Action<ISpecContext> action, Node node)
        {
            if (node.Id.IsEmpty())
            {
                throw new ArgumentOutOfRangeException("node", "The node must have an id");
            }

            Position = position;
            _type = type;
            _action = action;
            _node = node;
            Subject = position.ToString();
        }

        public string Subject { get; set; }

        public string type
        {
            get { return _type; }
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
            using (context.Timings.Subject(_type, Subject))

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