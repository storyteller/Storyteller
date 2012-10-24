namespace StoryTeller.UserInterface.Tests
{
    public class Mode
    {
        public static readonly Mode Edit = new Mode("Edit");
        public static readonly Mode Preview = new Mode("Preview");
        public static readonly Mode Results = new Mode("Results");
        public static readonly Mode Xml = new Mode("Xml");


        private readonly string _name;

        private Mode(string name)
        {
            _name = name;
        }

        public string Name { get { return _name; } }

        public override string ToString()
        {
            return _name;
        }

        public bool Equals(Mode obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            return Equals(obj._name, _name);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof (Mode)) return false;
            return Equals((Mode) obj);
        }

        public override int GetHashCode()
        {
            return (_name != null ? _name.GetHashCode() : 0);
        }
    }
}