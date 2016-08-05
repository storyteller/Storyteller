using System.Collections.Generic;
using System.Linq;

namespace ST.Files
{
    public class ChangeSet
    {
        public readonly List<IFileReference> Changed = new List<IFileReference>();
        public readonly List<IFileReference> Added = new List<IFileReference>();
        public readonly List<string> Deleted = new List<string>();

        public ChangeSet Adds(params IFileReference[] files)
        {
            Added.AddRange(files);
            return this;
        }

        public ChangeSet Changes(params IFileReference[] files)
        {
            Changed.AddRange(files);
            return this;
        }

        public ChangeSet Deletes(params IFileReference[] files)
        {
            Deleted.AddRange(files.Select(x => x.RelativePath));
            return this;
        }

        public bool HasChanges()
        {
            return Changed.Any() || Added.Any() || Deleted.Any();
        }

        public override string ToString()
        {
            return string.Format("changed: {0}, added: {1}, deleted: {2}", Changed.Select(x => x.RelativePath).Join(", "), Added.Select(x => x.RelativePath).Join(", "), Deleted.Join(", "));
        }
    }
}