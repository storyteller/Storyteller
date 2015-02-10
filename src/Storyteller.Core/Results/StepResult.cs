using System;
using System.Collections.Generic;
using System.Linq;
using FubuCore;
using Storyteller.Core.Engine;

namespace Storyteller.Core.Results
{
    public enum Stage
    {
        body,
        setup,
        teardown,
        before,
        after
    }

    public class StepResult : IResultMessage
    {
        public StepResult(string id, ResultStatus status)
        {
            this.status = status;
            this.id = id;
        }

        public StepResult(string id, Exception ex) : this(id, ResultStatus.error)
        {
        }

        public string id { get; set; }

        public object position;
        public ResultStatus status;
        public string error;

        public CellResult[] cells = new CellResult[0];

        public void Tabulate(Counts counts)
        {
            counts.Increment(status);
            if (cells != null)
            {
                cells.Each(x => counts.Increment(x.status));
            }
        }

        protected bool Equals(StepResult other)
        {
            return string.Equals(position, other.position) && status == other.status && string.Equals(error, other.error) && string.Equals(id, other.id);
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
                int hashCode = (position != null ? position.GetHashCode() : 0);
                hashCode = (hashCode*397) ^ (int) status;
                hashCode = (hashCode*397) ^ (error != null ? error.GetHashCode() : 0);
                hashCode = (hashCode*397) ^ (id != null ? id.GetHashCode() : 0);
                return hashCode;
            }
        }

        public override string ToString()
        {
            var description = "StepResult " + id;
            if (position != null)
            {
                description += "." + position;
            }

            description += " status: {0}".ToFormat(status);
            if (error.IsNotEmpty())
            {
                description += "\n  Error!\n" + error;
            }

            if (cells.Any())
            {
                description += "\n  Cells:\n    *" + cells.Select(x => x.ToString()).Join("\n    * ");
            }

            return description;
        }

        public string type
        {
            get { return "step-result"; }
        }
    }
}