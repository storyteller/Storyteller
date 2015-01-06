using System;
using StoryTeller.Engine;

namespace StoryTeller.New.Results
{
    public class CellResult : IResultMessage
    {
        public static readonly CellResult Ok = new CellResult{status = ResultStatus.ok};
        public static readonly CellResult Success = new CellResult{status = ResultStatus.success};
        public static readonly CellResult Missing = new CellResult{status = ResultStatus.missing};

        public ResultStatus status;
        public string actual;
        public string error;

        public static CellResult Failure(string actual)
        {
            return new CellResult{actual = actual, status = ResultStatus.failed};
        }

        public static CellResult Error(string message)
        {
            return new CellResult {status = ResultStatus.error, error = message};
        }

        public static CellResult Error(Exception ex)
        {
            // TODO -- be smart enough to remove exception wrapping
            // for special exceptions
            return Error(ex.ToString());
        }


        protected bool Equals(CellResult other)
        {
            return status == other.status && string.Equals(actual, other.actual) && string.Equals(error, other.error);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != this.GetType()) return false;
            return Equals((CellResult) obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                var hashCode = (int) status;
                hashCode = (hashCode*397) ^ (actual != null ? actual.GetHashCode() : 0);
                hashCode = (hashCode*397) ^ (error != null ? error.GetHashCode() : 0);
                return hashCode;
            }
        }

        public void Modify(Counts counts)
        {
            counts.Increment(status);
        }

        public override string ToString()
        {
            return string.Format("Status: {0}, Actual: {1}, Error: {2}", status, actual, error);
        }
    }
}