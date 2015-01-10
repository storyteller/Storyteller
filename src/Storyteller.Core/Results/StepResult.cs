using System;
using Storyteller.Core.Engine;

namespace Storyteller.Core.Results
{
    public enum Stage
    {
        body,
        setup,
        teardown
    }

    public class StepResult : IResultMessage
    {
        public StepResult(ResultStatus status)
        {
            this.status = status;
        }

        public string id { get; set; }
        public Stage stage = Stage.body;

        public static StepResult Error(string message)
        {
            return new StepResult(ResultStatus.error){error = message};
        }

        public static StepResult Error(Exception ex)
        {
            // TODO - needs to check for special exceptions
            return Error(ex.ToString());
        }

        public ResultStatus status;
        public string error;
        public void Modify(Counts counts)
        {
            counts.Increment(status);
        }

        protected bool Equals(StepResult other)
        {
            return stage == other.stage && status == other.status && string.Equals(error, other.error);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != this.GetType()) return false;
            return Equals((StepResult) obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                var hashCode = (int) stage;
                hashCode = (hashCode*397) ^ (int) status;
                hashCode = (hashCode*397) ^ (error != null ? error.GetHashCode() : 0);
                return hashCode;
            }
        }

        public override string ToString()
        {
            return string.Format("Stage: {0}, Status: {1}, Error: {2}", stage, status, error);
        }
    }
}