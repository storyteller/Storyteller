namespace StoryTeller.Workspace
{
    public class ReloadTestsMessage
    {
    }

    public class ClearResultsMessage
    {
    }


    public class ProjectLoaded
    {
        private readonly IProject _project;

        public ProjectLoaded(IProject project)
        {
            _project = project;
        }

        public IProject Project { get { return _project; } }

        public bool Equals(ProjectLoaded obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            return Equals(obj._project, _project);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof (ProjectLoaded)) return false;
            return Equals((ProjectLoaded) obj);
        }

        public override int GetHashCode()
        {
            return (_project != null ? _project.GetHashCode() : 0);
        }
    }


}