using System;
using System.Text;
using System.Collections.Generic;
using System.Linq;

namespace StoryTeller.Domain
{
    public class Tags : ITestPart
    {
        public static readonly string TAGS = "TestTags";
        public const string AUTO_CLOSE_SELECTOR = "autoCloseSelector";
        public Tags()
        {
        }

        public Tags(string text)
        {
            Text = text;
        }

        public string Text { get; set; }

        public void AddTag(string text)
        {
            Text = string.Join(",", Text, text);
        }

        public void AcceptVisitor(ITestVisitor visitor)
        {
            visitor.WriteTags(this);
        }

        public int StepCount()
        {
            return 0;
        }

        public IEnumerable<ITestPart> Children { get { return new ITestPart[0]; } }

        public bool DoesTestMatch(Test test)
        {
            return test.GetTags().AllTags.Any(tag => AllTags.Any(tagToMatchOn => tag.Trim().ToUpper() == tagToMatchOn.Trim().ToUpper()));
        }

        public List<string> AllTags
        {
            get
            {
                return new List<string>(Text.Split(','));
            }
        }

        public bool Equals(Tags obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            return Equals(obj.Text, Text);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof(Tags)) return false;
            return Equals((Tags)obj);
        }

        public override int GetHashCode()
        {
            return (Text != null ? Text.GetHashCode() : 0);
        }
    }
}