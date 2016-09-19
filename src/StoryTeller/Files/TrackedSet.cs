using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using Baseline;

namespace StoryTeller.Files
{
    public class TrackedSet
    {
        private readonly ConcurrentDictionary<string, DateTime> _files = new ConcurrentDictionary<string, DateTime>();

        public TrackedSet(IEnumerable<IFileReference> files)
        {
            files.Each(x => _files[x.RelativePath] = x.ExactLastWriteTime());
        }

        public IEnumerable<string> Files => _files.Keys;

        public ChangeSet DetectChanges(IEnumerable<IFileReference> files)
        {
            var changeSet = new ChangeSet();

            var dict = files.ToDictionary(x => x.RelativePath);
            var deleted = _files.Keys.Where(x => !dict.ContainsKey(x));
            changeSet.Deleted.AddRange(deleted);

            
            changeSet.Added.AddRange(files.Where(x => !_files.ContainsKey(x.RelativePath)));


            var changed = files.Where(x => _files.ContainsKey(x.RelativePath) && _files[x.RelativePath] != x.ExactLastWriteTime());
            changeSet.Changed.AddRange(changed);

            return changeSet;

        }
    }
}