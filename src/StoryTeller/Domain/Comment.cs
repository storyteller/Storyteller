using System;
using System.Collections.Generic;

namespace StoryTeller.Domain
{
    public class Comment : ITestPart
    {
        public static readonly string COMMENT = "Comment";

        public Comment()
        {
        }

        public Comment(string text)
        {
            Text = text;
        }

        public string Text { get; set; }

        #region ITestPart Members

        public void AcceptVisitor(ITestVisitor visitor)
        {
            visitor.WriteComment(this);
        }

        public int StepCount()
        {
            return 0;
        }

        public IEnumerable<ITestPart> Children { get { return new ITestPart[0]; } }

        #endregion

        public bool Equals(Comment obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            return Equals(obj.Text, Text);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof(Comment)) return false;
            return Equals((Comment)obj);
        }

        public override int GetHashCode()
        {
            return (Text != null ? Text.GetHashCode() : 0);
        }
    }
}