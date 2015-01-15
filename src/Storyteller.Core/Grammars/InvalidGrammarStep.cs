using System;
using Storyteller.Core.Results;

namespace Storyteller.Core.Grammars
{
    public class InvalidGrammarStep : ILineExecution
    {

        public InvalidGrammarStep(string id, string message)
        {
            Id = id;
            Message = message;
        }

        public string Id { get; private set; }
        public string Message { get; private set; }

        public object Position
        {
            get { return null; }
        }

        public void Execute(ISpecContext context)
        {
            var result = new StepResult(Id, ResultStatus.error)
            {
                error = Message
            };

            context.LogResult(result);
        }

        public int Count()
        {
            return 1;
        }

        public void AcceptVisitor(ISpecExecutor executor)
        {
            executor.Line(this);
        }

        protected bool Equals(InvalidGrammarStep other)
        {
            return string.Equals(Id, other.Id) && string.Equals(Message, other.Message);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != this.GetType()) return false;
            return Equals((InvalidGrammarStep) obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                return ((Id != null ? Id.GetHashCode() : 0)*397) ^ (Message != null ? Message.GetHashCode() : 0);
            }
        }

        public override string ToString()
        {
            return string.Format("Invalid Grammar on Step: {0}, Message: {1}", Id, Message);
        }
    }
}