using System;
using FubuCore;

namespace Storyteller.Core.Results
{
    public class Envelope
    {
        public Envelope()
        {
        }

        public Envelope(Subject subject, object message)
        {
            this.topic = ToTopic(message.GetType());
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

        public static string ToTopic(Type messageType)
        {
            return messageType.Name.SplitPascalCase().Replace(' ', '-').ToLower();
        }
    }
}