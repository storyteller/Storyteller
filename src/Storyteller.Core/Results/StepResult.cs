using System;
using Storyteller.Core.Engine;

namespace Storyteller.Core.Results
{
    public class StepResult : IResultMessage
    {
        public static readonly StepResult Ok = new StepResult{status = ResultStatus.ok};
        public static readonly StepResult Success = new StepResult{status = ResultStatus.success};
        public static readonly StepResult Failed = new StepResult{status = ResultStatus.failed};

        public string id { get; set; }

        public static StepResult Error(string message)
        {
            return new StepResult{status = ResultStatus.error, error = message};
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
            return status == other.status && string.Equals(error, other.error);
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
                return ((int) status*397) ^ (error != null ? error.GetHashCode() : 0);
            }
        }

        public override string ToString()
        {
            return string.Format("Status: {0}, Error: {1}", status, error);
        }
    }
}