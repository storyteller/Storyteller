using System.Collections.Generic;
using Baseline;

namespace ST.Files
{
    /// <summary>
    /// Provides an abstraction to find files across the main application
    /// </summary>
    public interface IApplicationFiles
    {
        /// <summary>
        /// Tells you the directory of the main application
        /// </summary>
        /// <value></value>
        string RootPath { get; }

        /// <summary>
        /// Find files by FileSet across the application
        /// </summary>
        /// <param name="fileSet"></param>
        /// <returns></returns>
        IEnumerable<IFileReference> FindFiles(FileSet fileSet);

        /// <summary>
        /// Finds a file by relative name across the application
        /// </summary>
        /// <param name="relativeName"></param>
        /// <returns></returns>
        IFileReference Find(string relativeName);
    }
}