using System;
using System.Xml.Serialization;
using StoryTeller.Domain;
using StoryTeller.New.Results;

namespace StoryTeller.Engine
{
    // TODO -- get rid of the stupid serialization cruft

    [Serializable]
    public class Counts
    {
        [XmlAttribute]
        public int Rights { get; set; }
        [XmlAttribute]
        public int Wrongs { get; set; }
        [XmlAttribute]
        public int Exceptions { get; set; }
        [XmlAttribute]
        public int SyntaxErrors { get; set; }

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
                    IncrementRights();
                    break;

                case ResultStatus.error:
                    IncrementExceptions();
                    break;

                case ResultStatus.failed:
                    IncrementWrongs();
                    break;

                case ResultStatus.missing:
                    IncrementSyntaxErrors();
                    break;
            }
        }

        public void IncrementRights()
        {
            Rights++;
        }

        public void IncrementWrongs()
        {
            Wrongs++;
        }

        public void IncrementExceptions()
        {
            Exceptions++;
        }

        public void IncrementSyntaxErrors()
        {
            SyntaxErrors++;
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