using System;
using System.Collections.Generic;
using System.Security.Policy;
using StoryTeller.Engine;
using StructureMap.Diagnostics;

namespace StoryTeller.New.Results
{

    public interface IResultMessage
    {
        void Modify(Counts counts);
    }

    public enum ResultStatus
    {
        ok,
        success,
        failed,
        error,
        missing
    }

    public class Envelope
    {
        public Envelope()
        {
        }

        public Envelope(Subject subject, object message)
        {
            // TODO -- derive the topic
            this.subject = subject;
            this.message = message;
        }

        public string topic;
        public Subject subject;
        public object message;

        protected bool Equals(Envelope other)
        {
            return string.Equals(topic, other.topic) && Equals(subject, other.subject) && Equals(message, other.message);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != this.GetType()) return false;
            return Equals((Envelope) obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                var hashCode = (topic != null ? topic.GetHashCode() : 0);
                hashCode = (hashCode*397) ^ (subject != null ? subject.GetHashCode() : 0);
                hashCode = (hashCode*397) ^ (message != null ? message.GetHashCode() : 0);
                return hashCode;
            }
        }

        public override string ToString()
        {
            return string.Format("Topic: {0}, Subject: {1}, Message: {2}", topic, subject, message);
        }
    }

    public class Finished
    {
        public DateTime time;
        public DateTime duration;
    }

    public class TimedOut
    {
        public DateTime time;
    }

    public class Subject
    {
        public string spec;
        public string identifier; // can be id.cell, id, or id.setup or id.teardown

        public Subject()
        {
        }

        protected bool Equals(Subject other)
        {
            return string.Equals(spec, other.spec) && string.Equals(identifier, other.identifier);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != this.GetType()) return false;
            return Equals((Subject) obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                return ((spec != null ? spec.GetHashCode() : 0)*397) ^ (identifier != null ? identifier.GetHashCode() : 0);
            }
        }

        public override string ToString()
        {
            return string.Format("Spec: {0}, Identifier: {1}", spec, identifier);
        }
    }
}