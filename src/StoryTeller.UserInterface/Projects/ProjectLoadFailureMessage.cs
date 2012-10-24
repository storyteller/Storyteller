namespace StoryTeller.UserInterface.Projects
{
    public class ProjectLoadFailureMessage
    {                
        public string ErrorMessage { get; set; }
        public ProjectToken ProjectToken { get; set; }

        public bool Equals(ProjectLoadFailureMessage other)
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
            if (obj.GetType() != typeof (ProjectLoadFailureMessage))
            {
                return false;
            }
            return Equals((ProjectLoadFailureMessage) obj);
        }

        public override int GetHashCode() {
            return (ProjectToken != null ? ProjectToken.GetHashCode() : 0);
        }
    }
}


