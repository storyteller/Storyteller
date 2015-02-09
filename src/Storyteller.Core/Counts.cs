using Newtonsoft.Json;
using Storyteller.Core.Results;

namespace Storyteller.Core
{

    public class Counts
    {
        [JsonProperty("rights")]
        public int Rights;

        [JsonProperty("wrongs")]
        public int Wrongs;

        [JsonProperty("errors")]
        public int Exceptions;

        [JsonProperty("invalids")]
        public int SyntaxErrors;

        public Counts()
        {
        }

        public Counts(int rights, int wrongs, int exceptions, int syntaxErrors)
        {
            Rights = rights;
            Wrongs = wrongs;
            Exceptions = exceptions;
            SyntaxErrors = syntaxErrors;
        }

        public void Add(Counts peer)
        {
            Rights += peer.Rights;
            Wrongs += peer.Wrongs;
            Exceptions += peer.Exceptions;
            SyntaxErrors += peer.SyntaxErrors;
        }

        public void Increment(ResultStatus status)
        {
            switch (status)
            {
                case ResultStatus.success:
                    Rights++;
                    break;

                case ResultStatus.error:
                    Exceptions++;
                    break;

                case ResultStatus.failed:
                    Wrongs++;
                    break;

                case ResultStatus.missing:
                    SyntaxErrors++;
                    break;

                case ResultStatus.invalid:
                    SyntaxErrors++;
                    break;
            }
        }

        public override string ToString()
        {
            return string.Format("Rights: {0}, Wrongs: {1}, Exceptions: {2}, SyntaxErrors: {3}", Rights, Wrongs,
                                 Exceptions, SyntaxErrors);
        }

        public bool Equals(Counts obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            return obj.Rights == Rights && obj.Wrongs == Wrongs && obj.Exceptions == Exceptions &&
                   obj.SyntaxErrors == SyntaxErrors;
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof(Counts)) return false;
            return Equals((Counts)obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                int result = Rights;
                result = (result * 397) ^ Wrongs;
                result = (result * 397) ^ Exceptions;
                result = (result * 397) ^ SyntaxErrors;
                return result;
            }
        }

        public bool WasSuccessful()
        {
            int count = Wrongs + Exceptions + SyntaxErrors;
            return count == 0;
        }

        public void Reset()
        {
            Wrongs = Rights = Exceptions = SyntaxErrors = 0;
        }

        public bool HasResult()
        {
            return (Wrongs + Rights + Exceptions + SyntaxErrors) > 0;
        }

        public Counts Clone()
        {
            return (Counts)MemberwiseClone();
        }
    }
}