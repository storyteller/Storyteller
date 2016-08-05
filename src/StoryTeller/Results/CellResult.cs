using System;
using Baseline;
using Newtonsoft.Json;

namespace StoryTeller.Results
{
    public class CellResult
    {
        public string id { get; set; }

        [JsonIgnore]
        public ResultStatus Status = ResultStatus.ok;

        [JsonProperty("status")]
        public string StatusDescription
        {
            get { return Status.ToString(); }
        }


        public string actual;
        public string error;
        public string cell;

        public CellResult(string cell, ResultStatus status)
        {
            this.cell = cell;
            this.Status = status;
        }

        public static CellResult Ok(string cell)
        {
            return new CellResult(cell, ResultStatus.ok);
        }

        public static CellResult Success(string cell)
        {
            return new CellResult(cell, ResultStatus.success);
        }

        public static CellResult Failure(string cell, string actual)
        {
            return new CellResult(cell, ResultStatus.failed) {actual = actual};
        }

        public static CellResult Missing(string cell)
        {
            return new CellResult(cell, ResultStatus.missing);
        }

        public static CellResult Error(string cell, string message)
        {
            return new CellResult(cell, ResultStatus.error){error = message};
        }

        public static CellResult Error(string cell, Exception ex)
        {
            return Error(cell, ex.ToDisplayMessage());
        }


        protected bool Equals(CellResult other)
        {
            return string.Equals(actual, other.actual) && string.Equals(error, other.error) && string.Equals(cell, other.cell);
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
                var hashCode = (actual != null ? actual.GetHashCode() : 0);
                hashCode = (hashCode*397) ^ (error != null ? error.GetHashCode() : 0);
                hashCode = (hashCode*397) ^ (cell != null ? cell.GetHashCode() : 0);
                return hashCode;
            }
        }

        public override string ToString()
        {
            var value = string.Format("CellResult '{0}' = {1}", cell, Status);

            if (Status == ResultStatus.failed)
            {
                value += ", actual = " + actual;
            }

            if (error.IsNotEmpty())
            {
                value += "\nError!\n" + error;
            }

            return value;
        }

        public void Tabulate(Counts counts)
        {
            counts.Increment(Status);
        }

    }
}