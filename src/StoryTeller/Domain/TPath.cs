using System;
using System.Collections.Generic;
using System.Linq;
using FubuCore;
using System.IO;

namespace StoryTeller.Domain
{
    [Serializable]
    public class TPath
    {
        private readonly List<string> _parts;

        public TPath(string path)
        {
            _parts = path.IsNotEmpty()
                         ? new List<string>(path.Split('/'))
                         : new List<string>();
        }

        private TPath(List<string> parts)
        {
            _parts = parts;
        }

        public string Workspace
        {
            get
            {
                return _parts[0];
            }
        }

        public string Next { get { return _parts.First(); } }

        public string Name { get { return _parts.Last(); } }

        public bool IsEnd { get { return _parts.Count == 1; } }

        public string Locator { get { return _parts.ToArray().Join("/"); } }

        public static TPath Empty { get { return new TPath(new List<string>()); } }

        public bool IsRoot { get { return _parts.Count == 0; } }

        public TPath Pop()
        {
            var childParts = new List<string>(_parts.Skip(1));
            return new TPath(childParts);
        }

        public TPath Push(string name)
        {
            var childParts = new List<string>(_parts);
            childParts.Insert(0, name);

            return new TPath(childParts);
        }

        public TPath ToSuite()
        {
            var childParts = new List<string>(_parts.Take(_parts.Count - 1));
            return new TPath(childParts);
        }

        public TPath Append(string name)
        {
            var childParts = new List<string>(_parts)
            {
                name
            };

            return new TPath(childParts);
        }

        public bool Equals(TPath obj)
        {
            return !ReferenceEquals(null, obj) && Locator.Equals(obj.Locator);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != typeof (TPath)) return false;
            return Equals((TPath) obj);
        }

        public override int GetHashCode()
        {
            return 0;
        }

        public string GetContainingFolder()
        {
            if (IsEnd) return string.Empty;

            return ToSuite()._parts.ToArray().Join(Path.DirectorySeparatorChar.ToString());
        }

        public string GetFolder()
        {
            return _parts.ToArray().Join(Path.DirectorySeparatorChar.ToString());
        }

        public string DottedPath()
        {
            return _parts.ToArray().Join(".");
        }
    }
}