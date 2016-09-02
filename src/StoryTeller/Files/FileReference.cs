using System;
using System.IO;
using Baseline;

namespace StoryTeller.Files
{
    public class FileReference : IFileReference
    {
        private string _relativePath;

        public FileReference(string path)
        {
            Path = path;
            if (!System.IO.Path.IsPathRooted(path))
            {
                RelativePath = path;
            }
        }

        public string Path { get; private set; }

        public string RelativePath
        {
            get { return _relativePath; }
            set { _relativePath = value.IsEmpty() ? string.Empty : value.Replace('\\', '/'); }
        }

        public string ReadContents()
        {
            return new FileSystem().ReadStringFromFile(Path);
        }

        public void ReadContents(Action<Stream> action)
        {
            using (var stream = new FileStream(Path, FileMode.Open, FileAccess.Read))
            {
                action(stream);
            }
        }

        public void ReadLines(Action<string> read)
        {
            new FileSystem().ReadTextFile(Path, read);
        }

        public long Length()
        {
            return new FileInfo(Path).Length;
        }

        public string Etag()
        {
            var length = Length();
            var lastModified = LastModified();

            var hash = lastModified.ToFileTimeUtc() ^ length;

            return Convert.ToString(hash, 16);
        }

        public DateTime LastModified()
        {
            var last = new FileInfo(Path).LastWriteTimeUtc;
            return new DateTime(last.Year, last.Month, last.Day, last.Hour, last.Minute, last.Second, last.Kind);
        }

        protected bool Equals(FileReference other)
        {
            return string.Equals(RelativePath, other.RelativePath);
        }

        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            if (obj.GetType() != this.GetType()) return false;
            return Equals((FileReference) obj);
        }

        public override int GetHashCode()
        {
            return (RelativePath != null ? RelativePath.GetHashCode() : 0);
        }

        public override string ToString()
        {
            return $"RelativePath: {RelativePath}";
        }

        public static IFileReference Load(string relativePath)
        {
            return new ApplicationFiles(Directory.GetCurrentDirectory()).Find(relativePath);
        }
    }
}
