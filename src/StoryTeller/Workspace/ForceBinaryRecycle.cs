namespace StoryTeller.Workspace
{
    public class ForceBinaryRecycle
    {
        public bool Equals(ForceBinaryRecycle other)
        {
            return true;
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof (ForceBinaryRecycle)) return false;
            return true;
        }

        public override int GetHashCode()
        {
            return 0;
        }
    }

    public class ForceEnvironmentRecycle
    {
    }
}