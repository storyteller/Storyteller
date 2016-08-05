using System;
using Baseline;
using StoryTeller.Engine;
using StoryTeller.Model;
using StoryTeller.Results;

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
            if (node.id.IsEmpty())
            {
                throw new ArgumentOutOfRangeException(nameof(node), "The node must have an id");
            }

            Position = position;
            _type = type;
            _action = action;
            _node = node;
            Subject = position.ToString();
        }

        public string Subject { get; set; }

        public string type => _type;

        public Action<ISpecContext> Action => _action;

        public Node Node => _node;

        public object Position { get; set; }

        public string Id => _node.id;

        public int Count()
        {
            return 1;
        }

        public void AcceptVisitor(IStepExecutor executor)
        {
            executor.Line(this);
        }


        public void Execute(SpecContext context)
        {
            using (context.Timings.Subject(_type, Subject))

            try
            {
                _action(context);
                context.LogResult(new StepResult(Id, ResultStatus.ok) {position = Position});
            }
            catch (Exception ex)
            {
                context.LogException(_node.id,
                    ex,
                    Position);
            }
        }
    }
}