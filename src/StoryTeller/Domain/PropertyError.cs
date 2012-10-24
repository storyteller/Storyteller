namespace StoryTeller.Domain
{
    public class PropertyError
    {
        public PropertyErrorCode Code { get; set; }
        public string Attribute { get; set; }

        public bool Equals(PropertyError other)
        {
            if (ReferenceEquals(null, other)) return false;
            if (ReferenceEquals(this, other)) return true;
            return Equals(other.Code, Code) && Equals(other.Attribute, Attribute);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof (PropertyError)) return false;
            return Equals((PropertyError) obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                return (Code.GetHashCode()*397) ^ (Attribute != null ? Attribute.GetHashCode() : 0);
            }
        }

        public override string ToString()
        {
            return string.Format("Code: {0}, Attribute: {1}", Code, Attribute);
        }
    }
}