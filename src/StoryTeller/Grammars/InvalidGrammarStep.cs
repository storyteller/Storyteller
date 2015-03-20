using StoryTeller.Conversion;
using StoryTeller.Results;

namespace StoryTeller.Grammars
{
    public class InvalidGrammarStep : LineStepBase
    {
        private readonly StepValues _values;

        public InvalidGrammarStep(StepValues values, string message) : base(values)
        {
            _values = values;
            Message = message;
        }

        public string Message { get; private set; }

        public object Position
        {
            get { return null; }
        }

        public override string Subject
        {
            get { return "Missing"; }
        }

        protected override StepResult execute(ISpecContext context)
        {
            var result = new StepResult(_values.Id, ResultStatus.error)
            {
                error = Message
            };

            return result;
        }

        protected bool Equals(InvalidGrammarStep other)
        {
            return string.Equals(_values.Id, other._values.Id) && string.Equals(Message, other.Message);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != GetType()) return false;
            return Equals((InvalidGrammarStep) obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                return ((_values.Id != null ? _values.Id.GetHashCode() : 0)*397) ^
                       (Message != null ? Message.GetHashCode() : 0);
            }
        }

        public override string ToString()
        {
            return string.Format("Invalid Grammar on Step: {0}, Message: {1}", _values.Id, Message);
        }
    }
}