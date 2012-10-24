using System.Collections.Generic;
using StoryTeller.Domain;

namespace StoryTeller.Model
{
    public class CommentNode : IFixtureNode
    {
        #region IFixtureNode Members

        public string Name { get { return "Add Comment"; } }

        public TPath GetPath()
        {
            return TPath.Empty;
        }

        public string Title { get { return Name; } }

        public string Description { get { return Name; } }

        public void ModifyExampleTest(Test example)
        {
        }

        public IEnumerable<GrammarError> AllErrors()
        {
            return new GrammarError[0];
        }

        #endregion

        public bool Equals(CommentNode obj)
        {
            return obj != null;
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof (CommentNode)) return false;
            return Equals((CommentNode) obj);
        }

        public override int GetHashCode()
        {
            return 0;
        }
    }
}