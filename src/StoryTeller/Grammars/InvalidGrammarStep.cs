using StoryTeller.Conversion;
using StoryTeller.Results;

namespace StoryTeller.Grammars
{
    public class InvalidGrammarStep : LineStepBase
    {
        private readonly StepValues _values;

        public InvalidGrammarStep(StepValues values, string message) : base(values, StepthroughStyle.Over)
        {
            _values = values;
            Message = message;
            Position = null;
        }

        public string Message { get; }


        public override string Subject => "Missing";

        protected override StepResult execute(ISpecContext context)
        {
            var result = new StepResult(_values.id, ResultStatus.error)
            {
                error = Message
            };

            return result;
        }

        protected bool Equals(InvalidGrammarStep other)
        {
            return string.Equals(_values.id, other._values.id) && string.Equals(Message, other.Message);
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
                return ((_values.id != null ? _values.id.GetHashCode() : 0)*397) ^
                       (Message != null ? Message.GetHashCode() : 0);
            }
        }

        public override string ToString()
        {
            return $"Invalid Grammar on Step: {_values.id}, Message: {Message}";
        }
    }
}