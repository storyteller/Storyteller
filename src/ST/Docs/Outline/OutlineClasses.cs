using System;
using System.IO;
using FubuCore;
using ST.Docs.Topics;

namespace ST.Docs.Outline
{
    public static class OutlineWriter
    {
        public static readonly IFileSystem FileSystem = new FileSystem();

        public static void WriteToFiles(string directory, Topic topLevel)
        {
            if (!FileSystem.DirectoryExists(directory))
            {
                FileSystem.CreateDirectory(directory);
            }

            var file = directory.AppendPath(topLevel.Key) + ".md";
            if (!File.Exists(file))
            {
                new FileSystem().WriteToFlatFile(file, writer =>
                {
                    writer.WriteLine("<!--Title:{0}-->".ToFormat(topLevel.Title));
                    writer.WriteLine("<!--Url:{0}-->".ToFormat(topLevel.UrlSegment));
                });
            }


        }
    }
}