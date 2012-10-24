namespace StoryTeller.UserInterface.Projects
{
    public class RemoveProjectFromHistoryMessage
    {
        public bool Equals(RemoveProjectFromHistoryMessage other)
        {
            if (ReferenceEquals(null, other))
            {
                return false;
            }
            if (ReferenceEquals(this, other))
            {
                return true;
            }
            return Equals(other.ProjectToken, ProjectToken);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj))
            {
                return false;
            }
            if (ReferenceEquals(this, obj))
            {
                return true;
            }
            if (obj.GetType() != typeof (RemoveProjectFromHistoryMessage))
            {
                return false;
            }
            return Equals((RemoveProjectFromHistoryMessage) obj);
        }

        public override int GetHashCode() {
            return (ProjectToken != null ? ProjectToken.GetHashCode() : 0);
        }

        public ProjectToken ProjectToken { get; set; }            
    }
}