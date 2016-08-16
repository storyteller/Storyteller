using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Baseline;
using GenericEnumerableExtensions = System.Collections.Generic.GenericEnumerableExtensions;

namespace ST.Files
{
    public class ApplicationFiles : IApplicationFiles
    {
        private readonly string _root;
        private readonly StructureMap.Util.LightweightCache<string, IFileReference> _files;
        private readonly static IFileSystem _fileSystem = new FileSystem();

        public ApplicationFiles(string root)
        {
            _root = root.ToFullPath();
            _files = new StructureMap.Util.LightweightCache<string, IFileReference>(findFile);
        }

        /// <summary>
        /// The root physical path of this FubuMVC Application
        /// </summary>
        public string RootPath => _root;

        // I'm okay with this finding nulls

        public IEnumerable<IFileReference> FindFiles(FileSet fileSet)
        {
            return _fileSystem.FindFiles(_root, fileSet).Select(file =>
            {
                var fileReference = new FileReference(file)
                {
                    RelativePath = file.PathRelativeTo(_root).Replace("\\", "/")
                };

                if (fileReference.RelativePath.IsEmpty())
                {
                    throw new ArgumentException("Not able to determine a relative path for " + file);
                }

                return fileReference;
            });
        }


        public IFileReference Find(string relativeName)
        {
            return _files[relativeName.Replace("\\", "/")];
        }

        public void AssertHasFile(string relativeName)
        {
            relativeName = relativeName.Replace("\\", "/");
            var file = findFile(relativeName);
            if (file == null)
            {
                var files = FindFiles(FileSet.Deep("*")).Select(x => x.Path);

                var description = "Could not find " + relativeName;
                GenericEnumerableExtensions.Each(files, x => description += "\n" + x);

                throw new Exception(description);
            }
        }

        private IFileReference findFile(string name)
        {
            if (name.IsEmpty()) return null;

            var fileSet = new FileSet{
                DeepSearch = true,
                Include = name
            };

            return FindFiles(fileSet).FirstOrDefault();
        }

        public static IApplicationFiles ForDefault()
        {
            return new ApplicationFiles(Directory.GetCurrentDirectory());
        }
    }
}