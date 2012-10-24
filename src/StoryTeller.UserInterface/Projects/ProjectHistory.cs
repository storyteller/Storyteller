using System;
using System.Collections.Generic;
using System.Linq;
using System.Xml.Serialization;

namespace StoryTeller.UserInterface.Projects
{
    public interface IProjectHistory
    {
        ProjectToken[] Projects { get; }
        ProjectToken LastAccessed { get; }
        void Store(ProjectToken token);
        void MarkAsLastAccessed(ProjectToken token);
        void Remove(ProjectToken projectToken);
        ProjectToken Next(ProjectToken token);
    }

    public class ProjectHistory : IProjectHistory
    {
        private readonly List<ProjectToken> _projects = new List<ProjectToken>();

        #region IProjectHistory Members

        public void Store(ProjectToken token)
        {
            if (_projects.Contains(token))
            {
                _projects.Remove(token);
            }

            _projects.Insert(0, token);

            while (_projects.Count > 4)
            {
                _projects.RemoveAt(4);
            }
        }

        public void MarkAsLastAccessed(ProjectToken token)
        {
            _projects.Remove(token);
            _projects.Insert(0, token);
        }

        public void Remove(ProjectToken projectToken)
        {
            _projects.Remove(projectToken);
        }

        /// <summary>
        /// Gets the next project in the history that is after the given token.
        /// </summary>
        /// <param name="token"></param>
        /// <returns></returns>
        public ProjectToken Next(ProjectToken token)
        {
            return Projects.FirstOrDefault(x => Array.IndexOf(Projects, x) > Array.IndexOf(Projects, token));
        }

        public ProjectToken[] Projects
        {
            get { return _projects.ToArray(); }
            set
            {
                _projects.Clear();
                _projects.AddRange(value);
            }
        }

        public ProjectToken LastAccessed { get { return _projects.FirstOrDefault(); } }

        #endregion
    }

    public class ProjectToken
    {
        public ProjectToken()
        {
        }

        public string Name { get; set; }
        public string Filename { get; set; }

        public bool Equals(ProjectToken obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            return Equals(obj.Name, Name) && Equals(obj.Filename, Filename);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof (ProjectToken)) return false;
            return Equals((ProjectToken) obj);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                return ((Name != null ? Name.GetHashCode() : 0)*397) ^ (Filename != null ? Filename.GetHashCode() : 0);
            }
        }

        public override string ToString()
        {
            return string.Format("Name: {0}, Filename: {1}", Name, Filename);
        }
    }
}