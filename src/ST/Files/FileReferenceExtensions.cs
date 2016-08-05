using System;
using System.IO;

namespace ST.Files
{
    public static class FileReferenceExtensions
    {
        public static DateTime ExactLastWriteTime(this IFileReference file)
        {
            return new FileInfo(file.Path).LastWriteTimeUtc;
        }
    }
}