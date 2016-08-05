using System;
using Baseline;

namespace StoryTeller.Results
{
    public class Envelope
    {
        public Envelope()
        {
        }

        public Envelope(object message)
        {
            this.topic = ToTopic(message.GetType());
            this.message = message;
        }

        public string topic;
        public object message;

        protected bool Equals(Envelope other)
        {
            return string.Equals(topic, other.topic) && Equals(message, other.message);
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
                return ((topic != null ? topic.GetHashCode() : 0)*397) ^ (message != null ? message.GetHashCode() : 0);
            }
        }

        public override string ToString()
        {
            return string.Format("Topic: {0}, Message: {1}", topic, message);
        }

        public static string ToTopic(Type messageType)
        {
            return messageType.Name.SplitPascalCase().Replace(' ', '-').ToLower();
        }
    }
}